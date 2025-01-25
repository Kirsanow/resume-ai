export interface PersonalDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location?: string;
  website?: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  highlights: string[];
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description?: string;
}

export interface Skill {
  id: string;
  name: string;
  level?: "beginner" | "intermediate" | "advanced" | "expert";
}

export interface ResumeContent {
  personalDetails: PersonalDetails;
  professionalSummary: string;
  workExperience: WorkExperience[];
  education: Education[];
  skills: Skill[];
}

export interface Resume {
  id: string;
  userId: string;
  title: string;
  content: ResumeContent;
  templateId: string;
  templateName?: string;
  status: "draft" | "published";
  metadata?: Record<string, any>;
  createdAt: string;
  updatedAt: string;
}
