export interface PRD {
  overview: string;
  userStories: string[];
  features: {
    name: string;
    description: string;
  }[];
  technicalRequirements: {
    platform: string;
    techStack: string;
    integrationPoints: string[];
  };
  timeline: {
    phase: string;
    description: string;
  }[];
  contactEmail: string;
}