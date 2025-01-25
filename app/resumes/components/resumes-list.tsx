"use client";

import { deleteResume, getData } from "@/actions/resumeActions";
import { Resume } from "@/types/resumeTypes";
import { useQuery } from "@tanstack/react-query";

export default function ResumesList() {
  const { data: resumes, isLoading } = useQuery({
    queryKey: ["resumes"],
    queryFn: async () => await getData(),

    // initialData: resumes,
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {resumes?.map((resume) => (
            <tr key={resume.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {resume.title}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <button className="text-blue-600 hover:text-blue-800 mr-4">
                  Edit
                </button>
                <button
                  className="text-red-600 hover:text-red-800"
                  onClick={(e) => {
                    e.preventDefault();
                    deleteResume(resume.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
