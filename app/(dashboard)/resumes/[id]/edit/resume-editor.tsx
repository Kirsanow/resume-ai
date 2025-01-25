"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  Type,
  Grid,
} from "lucide-react";
import { useParams } from "next/navigation";
import { useResume } from "../../_hooks/useResume";
import { useQuery } from "@tanstack/react-query";
import { getResume } from "../../_queries";
import { Resume } from "../../_types";

export default function ResumeEditor({
  resume: initialResume,
}: {
  resume: Resume;
}) {
  const [scale, setScale] = useState(1);
  const params = useParams();
  const id = params.id as string;

  const { data: initialData, isLoading: isLoadingInitial } = useQuery({
    queryKey: ["resume", id],
    queryFn: async () => await getResume(id),
    initialData: initialResume,
  });

  const { resume, updateField, isDirty, isSaving } = useResume(initialData);

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.1, 2));
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.1, 0.5));

  if (isLoadingInitial || !resume) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Editor Panel */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="border-b sticky top-0 bg-background z-10">
          <div className="container flex items-center justify-between h-16 px-4 mx-auto">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-semibold">{resume.title}</h1>
              <span className="text-sm text-muted-foreground">
                {isDirty ? "Saving..." : "Saved"}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline">Preview</Button>
              <Button>Download PDF</Button>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="container px-4 py-8 mx-auto">
          <div className="grid gap-8 md:grid-cols-[300px_1fr]">
            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="p-4 border rounded-lg">
                <h2 className="mb-4 text-lg font-semibold">Resume Score</h2>
                <div className="flex items-center gap-2">
                  <div className="w-full h-2 bg-secondary rounded-full">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{
                        width: `${calculateResumeScore(resume)}%`,
                      }}
                    />
                  </div>
                  <span className="text-sm font-medium">
                    {calculateResumeScore(resume)}%
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Complete more sections to improve your score
                </p>
              </div>
              <nav className="space-y-1">
                <Button variant="ghost" className="w-full justify-start">
                  Personal Details
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Professional Summary
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Work Experience
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Education
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Skills
                </Button>
              </nav>
            </aside>

            {/* Content */}
            <div className="space-y-8">
              {/* Personal Details */}
              <section className="p-6 border rounded-lg">
                <h2 className="mb-6 text-lg font-semibold">Personal Details</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="Enter your first name"
                      value={resume.personalDetails?.firstName || ""}
                      onChange={(e) =>
                        updateField("personalDetails", {
                          ...resume.personalDetails,
                          firstName: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="Enter your last name"
                      value={resume.personalDetails?.lastName || ""}
                      onChange={(e) =>
                        updateField("personalDetails", {
                          ...resume.personalDetails,
                          lastName: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="Enter your email"
                      value={resume.personalDetails?.email || ""}
                      onChange={(e) =>
                        updateField("personalDetails", {
                          ...resume.personalDetails,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="Enter your phone number"
                      value={resume.personalDetails?.phone || ""}
                      onChange={(e) =>
                        updateField("personalDetails", {
                          ...resume.personalDetails,
                          phone: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </section>

              {/* Professional Summary */}
              <section className="p-6 border rounded-lg">
                <h2 className="mb-6 text-lg font-semibold">
                  Professional Summary
                </h2>
                <textarea
                  className="w-full h-32 px-3 py-2 border rounded-md resize-none"
                  placeholder="Write 2-4 short, energetic sentences about your career achievements and skills..."
                  value={resume.professionalSummary || ""}
                  onChange={(e) =>
                    updateField("professionalSummary", e.target.value)
                  }
                />
              </section>

              {/* Work Experience */}
              <section className="p-6 border rounded-lg">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold">Work Experience</h2>
                  <Button
                    variant="outline"
                    onClick={() => {
                      const newExperience = {
                        id: crypto.randomUUID(),
                        company: "",
                        position: "",
                        startDate: "",
                        current: false,
                        description: "",
                        highlights: [],
                      };
                      updateField("workExperience", [
                        ...resume.workExperience,
                        newExperience,
                      ]);
                    }}
                  >
                    Add Experience
                  </Button>
                </div>
                {resume.workExperience?.length === 0 ? (
                  <div className="p-8 text-center border-2 border-dashed rounded-lg">
                    <p className="text-muted-foreground">
                      Add your most recent work experience
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {resume.workExperience?.map((experience) => (
                      <div
                        key={experience.id}
                        className="p-4 border rounded-lg"
                      >
                        <div className="grid gap-4 md:grid-cols-2">
                          <input
                            type="text"
                            className="w-full px-3 py-2 border rounded-md"
                            placeholder="Company"
                            value={experience.company}
                            onChange={(e) => {
                              const updated = resume.workExperience.map((exp) =>
                                exp.id === experience.id
                                  ? { ...exp, company: e.target.value }
                                  : exp
                              );
                              updateField("workExperience", updated);
                            }}
                          />
                          <input
                            type="text"
                            className="w-full px-3 py-2 border rounded-md"
                            placeholder="Position"
                            value={experience.position}
                            onChange={(e) => {
                              const updated = resume.workExperience.map((exp) =>
                                exp.id === experience.id
                                  ? { ...exp, position: e.target.value }
                                  : exp
                              );
                              updateField("workExperience", updated);
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>

              {/* Education */}
              <section className="p-6 border rounded-lg">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold">Education</h2>
                  <Button
                    variant="outline"
                    onClick={() => {
                      const newEducation = {
                        id: crypto.randomUUID(),
                        school: "",
                        degree: "",
                        field: "",
                        startDate: "",
                        current: false,
                      };
                      updateField("education", [
                        ...resume.education,
                        newEducation,
                      ]);
                    }}
                  >
                    Add Education
                  </Button>
                </div>
                {resume.education?.length === 0 ? (
                  <div className="p-8 text-center border-2 border-dashed rounded-lg">
                    <p className="text-muted-foreground">
                      Add your educational background
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {resume.education?.map((edu) => (
                      <div key={edu.id} className="p-4 border rounded-lg">
                        <div className="grid gap-4 md:grid-cols-2">
                          <input
                            type="text"
                            className="w-full px-3 py-2 border rounded-md"
                            placeholder="School"
                            value={edu.school}
                            onChange={(e) => {
                              const updated = resume.education.map((item) =>
                                item.id === edu.id
                                  ? { ...item, school: e.target.value }
                                  : item
                              );
                              updateField("education", updated);
                            }}
                          />
                          <input
                            type="text"
                            className="w-full px-3 py-2 border rounded-md"
                            placeholder="Degree"
                            value={edu.degree}
                            onChange={(e) => {
                              const updated = resume.education.map((item) =>
                                item.id === edu.id
                                  ? { ...item, degree: e.target.value }
                                  : item
                              );
                              updateField("education", updated);
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>

              {/* Skills */}
              <section className="p-6 border rounded-lg">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold">Skills</h2>
                  <Button
                    variant="outline"
                    onClick={() => {
                      const newSkill = {
                        id: crypto.randomUUID(),
                        name: "",
                      };
                      updateField("skills", [...resume.skills, newSkill]);
                    }}
                  >
                    Add Skill
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {resume.skills?.map((skill) => (
                    <div
                      key={skill.id}
                      className="px-3 py-1 text-sm bg-secondary rounded-full flex items-center gap-2"
                    >
                      <input
                        type="text"
                        className="bg-transparent border-none focus:outline-none"
                        value={skill.name}
                        onChange={(e) => {
                          const updated = resume.skills.map((item) =>
                            item.id === skill.id
                              ? { ...item, name: e.target.value }
                              : item
                          );
                          updateField("skills", updated);
                        }}
                      />
                      <button
                        onClick={() => {
                          const updated = resume.skills.filter(
                            (item) => item.id !== skill.id
                          );
                          updateField("skills", updated);
                        }}
                        className="text-red-500 hover:text-red-700"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>

      {/* Preview Panel */}
      <div className="w-[900px] border-l flex flex-col">
        {/* Preview Header */}
        <div className="border-b">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Grid className="h-5 w-5" />
              </Button>
              <span className="text-sm font-medium">Select template</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={handleZoomOut}>
                <Minus className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Type className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={handleZoomIn}>
                <Plus className="h-4 w-4" />
              </Button>
              <div className="flex items-center gap-2 px-3 py-1.5 text-sm border rounded-md">
                <span>Line spacing</span>
                <span className="text-muted-foreground">100%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Preview Content */}
        <div className="flex-1 overflow-auto bg-zinc-100 p-8">
          <div
            className="bg-white shadow-lg mx-auto transition-transform"
            style={{
              width: "794px", // A4 width in pixels
              height: "1123px", // A4 height in pixels
              transform: `scale(${scale})`,
              transformOrigin: "top center",
            }}
          >
            {/* Resume preview content */}
            <ResumePreview resume={resume} />
          </div>
        </div>

        {/* Preview Footer */}
        <div className="border-t p-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            {isDirty ? "Saving..." : "Saved"}
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm">1 / 1</span>
            <Button variant="ghost" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function calculateResumeScore(resume: Resume): number {
  let score = 0;
  let total = 0;

  // Personal Details
  const personalDetails = resume.personalDetails;
  if (personalDetails?.firstName) score++;
  if (personalDetails?.lastName) score++;
  if (personalDetails?.email) score++;
  if (personalDetails?.phone) score++;
  total += 4;

  // Professional Summary
  if (resume.professionalSummary?.length > 0) score++;
  total++;

  // Work Experience
  if (resume.workExperience?.length > 0) score += 2;
  total += 2;

  // Education
  if (resume.education?.length > 0) score += 2;
  total += 2;

  // Skills
  if (resume.skills?.length > 0) score++;
  total++;

  return Math.round((score / total) * 100);
}

function ResumePreview({ resume }: { resume: Resume }) {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">
          {resume.personalDetails?.firstName} {resume.personalDetails?.lastName}
        </h1>
        <div className="text-gray-600">
          {resume.personalDetails?.email} • {resume.personalDetails?.phone}
        </div>
      </div>

      {/* Professional Summary */}
      {resume.professionalSummary && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Professional Summary</h2>
          <p className="text-gray-700">{resume?.professionalSummary}</p>
        </div>
      )}

      {/* Work Experience */}
      {resume.workExperience?.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Work Experience</h2>
          <div className="space-y-4">
            {resume.workExperience?.map((exp) => (
              <div key={exp.id}>
                <h3 className="font-semibold">{exp?.position}</h3>
                <div className="text-gray-600">{exp?.company}</div>
                <p className="text-gray-700">{exp?.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {resume.education?.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Education</h2>
          <div className="space-y-4">
            {resume.education.map((edu) => (
              <div key={edu.id}>
                <h3 className="font-semibold">{edu?.degree}</h3>
                <div className="text-gray-600">{edu?.school}</div>
                {edu?.description && (
                  <p className="text-gray-700">{edu?.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {resume.skills?.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {resume.skills?.map((skill) => (
              <span
                key={skill.id}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
