"use server";
import { eq, not } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "@/db/drizzle";
import { resumes } from "@/db/schema";
import { auth } from "@/lib/auth";
import { z } from "zod";
import { redirect } from "next/navigation";

export const getData = async () => {
  const data = await db.select().from(resumes);
  return data;
};

export async function createResume() {
  // const session = await auth();
  // if (!session?.user?.id) {
  //   throw new Error("Unauthorized: Must be logged in to create a resume");
  // }

  // Validate input
  // const validated = createResumeSchema.parse(input);

  const [newResume] = await db
    .insert(resumes)
    .values({
      title: "Untitled",
      content: "{}",
    })
    .returning();

  return redirect(`/resumes/${newResume.id}/edit`);
}
