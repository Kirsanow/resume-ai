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

export default function ResumeEditPage({ params }: { params: { id: string } }) {
  const [scale, setScale] = useState(1);

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.1, 2));
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.1, 0.5));

  return (
    <div className="min-h-screen bg-background flex">
      {/* Editor Panel */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="border-b sticky top-0 bg-background z-10">
          <div className="container flex items-center justify-between h-16 px-4 mx-auto">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-semibold">Resume #{params.id}</h1>
              <span className="text-sm text-muted-foreground">
                Last edited just now
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
                    <div className="w-[15%] h-full bg-primary rounded-full" />
                  </div>
                  <span className="text-sm font-medium">15%</span>
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
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="Enter your last name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="Enter your phone number"
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
                />
              </section>

              {/* Work Experience */}
              <section className="p-6 border rounded-lg">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold">Work Experience</h2>
                  <Button variant="outline">Add Experience</Button>
                </div>
                <div className="p-8 text-center border-2 border-dashed rounded-lg">
                  <p className="text-muted-foreground">
                    Add your most recent work experience
                  </p>
                </div>
              </section>

              {/* Education */}
              <section className="p-6 border rounded-lg">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold">Education</h2>
                  <Button variant="outline">Add Education</Button>
                </div>
                <div className="p-8 text-center border-2 border-dashed rounded-lg">
                  <p className="text-muted-foreground">
                    Add your educational background
                  </p>
                </div>
              </section>

              {/* Skills */}
              <section className="p-6 border rounded-lg">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold">Skills</h2>
                  <Button variant="outline">Add Skill</Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="px-3 py-1 text-sm bg-secondary rounded-full">
                    React
                  </div>
                  <div className="px-3 py-1 text-sm bg-secondary rounded-full">
                    TypeScript
                  </div>
                  <div className="px-3 py-1 text-sm bg-secondary rounded-full">
                    Node.js
                  </div>
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
            {/* Resume preview content will be rendered here */}
          </div>
        </div>

        {/* Preview Footer */}
        <div className="border-t p-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            Saved
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
