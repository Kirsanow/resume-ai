import { createResume, getData } from "@/actions/resumeActions";
import { db } from "@/db/drizzle";
import { resumes } from "@/db/schema";
import { auth } from "@/lib/auth";

export default async function Resumes() {
  // const session = await auth();

  const data = await getData();

  return (
    <form action={createResume}>
      <h1>Resumes</h1>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Add Resume
      </button>
    </form>
  );
}
