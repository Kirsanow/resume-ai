"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function createResumeAction(formData: FormData) {
  const supabase = await createClient();
  const templateId = formData.get("templateId");

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) throw userError;

  const { data, error } = await supabase
    .from("resumes")
    .insert({
      user_id: user?.id,
      template_id: templateId,
      title: "Untitled Resume",
    })
    .select()
    .single();

  if (error) throw error;

  return redirect(`/resumes/${data?.id}/edit`);
}

export const updateResumeAction = async (formData: FormData) => {
  const supabase = await createClient();
  const id = formData.get("id");
  const updates = formData.get("updates");
  const { data, error } = await supabase
    .from("resumes")
    .update(updates)
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  return data;
};
