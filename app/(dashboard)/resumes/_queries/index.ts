"use server";

import { createClient } from "@/lib/supabase/server";

export const getResumes = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase.from("resumes").select("*");
  if (error) throw error;
  return data;
};

export const getResume = async (id: string) => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("resumes")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw error;
  return data;
};
