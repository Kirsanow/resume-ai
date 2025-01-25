"use server";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "@/db/drizzle";
import { resumes } from "@/db/schema";
import { redirect } from "next/navigation";
import { getQueryClient } from "@/lib/getQueryClient";

export const getData = async () => {
  const data = await db.select().from(resumes);
  return data;
};

export async function createResume() {
  const queryClient = getQueryClient();
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

  await queryClient.invalidateQueries({ queryKey: ["resumes"] });

  revalidatePath("/resumes");

  return redirect(`/resumes/${newResume.id}/edit`);
}

export async function deleteResume(id: string) {
  const queryClient = getQueryClient();

  await db.delete(resumes).where(eq(resumes.id, id));
  revalidatePath("/resumes");
  await queryClient.invalidateQueries({ queryKey: ["resumes"] });
}
