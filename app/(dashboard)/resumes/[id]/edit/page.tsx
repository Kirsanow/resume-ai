import { getResume } from "../../_queries";
import ResumeEditor from "./resume-editor";

export default async function ResumeEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const resume = await getResume(resolvedParams.id);
  return <ResumeEditor resume={resume} />;
}
