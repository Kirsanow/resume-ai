"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useActionState, useState } from "react";
import { createResumeAction } from "../_actions";
import { Button } from "@/components/ui/button";

const templates = [
  {
    id: "modern",
    name: "Modern",
    description: "Clean and contemporary design with a focus on readability",
    thumbnail: "/templates/modern.png",
  },
  {
    id: "professional",
    name: "Professional",
    description: "Traditional format perfect for corporate positions",
    thumbnail: "/templates/professional.png",
  },
  {
    id: "creative",
    name: "Creative",
    description: "Stand out with a unique layout for creative roles",
    thumbnail: "/templates/creative.png",
  },
];

export function TemplatesList() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [state, createResume, isPending] = useActionState(
    async (state: void | null, formData: FormData) => {
      await createResumeAction(formData);
      return null;
    },
    null
  );

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div
            key={template.id}
            className={`
            border rounded-lg p-4 cursor-pointer transition-all
            ${
              selectedTemplate === template.id
                ? "ring-2 ring-blue-500"
                : "hover:shadow-lg"
            }
          `}
            onClick={() => setSelectedTemplate(template.id)}
          >
            <div className="aspect-w-16 aspect-h-9 mb-4 relative">
              <Image
                src={template.thumbnail}
                alt={template.name}
                fill
                className="rounded-md object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{template.name}</h3>
            <p className="text-gray-600">{template.description}</p>
          </div>
        ))}
      </div>

      {selectedTemplate && (
        <form action={createResume}>
          <input type="hidden" name="templateId" value={selectedTemplate} />
          <Button disabled={isPending} type="submit">
            {isPending ? "Creating..." : "Use This Template"}
          </Button>
        </form>
      )}
    </div>
  );
}
