import { redirect } from "next/navigation";

export default function ResumePage({ params }: { params: { id: string } }) {
  redirect(`/resumes/${params.id}/edit`);
}
