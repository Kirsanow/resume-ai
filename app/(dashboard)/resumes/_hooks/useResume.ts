import { useState, useCallback } from "react";
import { Resume } from "../_types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDebounce } from "use-debounce";
import { updateResumeAction } from "../_actions";

type ResumeContent = Omit<
  Resume,
  "id" | "userId" | "createdAt" | "updatedAt" | "title" | "templateId"
>;

export function useResume(initialData: Resume | undefined) {
  const [resume, setResume] = useState<Resume | undefined>(initialData);
  const [isDirty, setIsDirty] = useState(false);
  const queryClient = useQueryClient();

  const { mutate: updateResume, isPending: isSaving } = useMutation({
    mutationFn: async (updates: Partial<ResumeContent>) => {
      if (!resume) return;

      // Create a patch for the content field
      const formData = new FormData();
      formData.append("id", resume.id);

      // We're updating the content JSONB field, so we need to nest the updates
      const contentUpdate = {
        content: {
          ...resume.content,
          ...updates,
        },
      };

      formData.append("updates", JSON.stringify(contentUpdate));

      const response = await updateResumeAction(formData);
      if (!response.ok) {
        throw new Error("Failed to update resume");
      }
      return response.json();
    },
    onSuccess: (data) => {
      if (data) {
        // Update the local state with the new data
        setResume((prev) => {
          if (!prev) return prev;
          return {
            ...prev,
            content: data.content,
          };
        });
      }
      queryClient.invalidateQueries({ queryKey: ["resumes"] });
      setIsDirty(false);
    },
  });

  const updateResumeCallback = useCallback(
    (updates: Partial<ResumeContent>) => {
      updateResume(updates);
    },
    [updateResume]
  );

  const [debouncedUpdate] = useDebounce(updateResumeCallback, 1000);

  const updateField = <K extends keyof ResumeContent>(
    field: K,
    value: ResumeContent[K]
  ) => {
    if (!resume) return;

    // Update local state
    setResume((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        content: {
          ...prev.content,
          [field]: value,
        },
      };
    });

    setIsDirty(true);

    // Send update to server
    debouncedUpdate({ [field]: value });
  };

  return {
    resume,
    updateField,
    isDirty,
    isSaving,
  };
}
