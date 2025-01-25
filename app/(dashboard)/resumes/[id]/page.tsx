import { redirect } from "next/navigation";

export default async function ResumePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  redirect(`/resumes/${resolvedParams.id}/edit`);
}
