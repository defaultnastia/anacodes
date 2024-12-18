export type StackListOptions =
  | "AppRouter"
  | "Axios"
  | "CSS Modules"
  | "Express"
  | "i18n"
  | "JavaScript"
  | "MongoDB"
  | "Mongoose"
  | "MUI"
  | "Multer"
  | "NextJs"
  | "next-intl"
  | "NodeJS"
  | "React"
  | "ReduxToolkit"
  | "REST API"
  | "Swagger"
  | "TailWind"
  | "TypeScript"
  | "Zustand";

export type ProjectLinkType =
  | "GitHub"
  | "Production"
  | "Swagger"
  | "Storybook"
  | "Figma";

export type ProjectType = {
  id: string;
  title: string;
  summary: string;
  fullDescription: string;
  stack: string[];
  image: string;
  links: { name: string; link: string }[];
};
