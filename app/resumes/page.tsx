import { createResume } from "@/actions/resumeActions";
import ResumesList from "./components/resumes-list";

export default async function Resumes() {
  // const session = await auth();

  // const resumesData = await getData();

  return (
    <form action={createResume}>
      <h1>Resumes</h1>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Add Resume
      </button>
      <ResumesList />
    </form>
  );
}
