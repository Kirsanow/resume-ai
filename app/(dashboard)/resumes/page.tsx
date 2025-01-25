import { createResume } from "@/actions/resumeActions";
import ResumesList from "./_components/resumes-list";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getResumes } from "./_queries";

export default async function Resumes() {
  const resumes = await getResumes();
  return (
    <form action={createResume}>
      <h1>Resumes</h1>
      <Link href="/resumes/new">
        <Button>Add Resume</Button>
      </Link>
      <ResumesList resumes={resumes} />
    </form>
  );
}
