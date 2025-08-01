import { type ElementType } from "react";
import {
  Languages,
  ShieldCheck,
  FileText,
  Globe,
  Server,
  Database,
  TerminalSquare,
  Type,
  GitBranch,
  Paintbrush,
  Wind,
  Atom,
  Router,
  Settings2,
  ClipboardList,
  BookOpenText,
  Palette,
  PackagePlus,
  Package,
  Bug,
  Cuboid,
  BookOpen,
  Hexagon,
} from "lucide-react";

export type TechItem = {
  name: string;
  icon: ElementType;
};

export type TechCategory = {
  [category: string]: TechItem[];
};

export const getTechStack = (): TechCategory => ({
  frontend: [
    { name: "HTML5", icon: FileText },
    { name: "CSS3", icon: Paintbrush },
    { name: "Tailwind", icon: Wind },
    { name: "Styled Components", icon: Palette },
    { name: "JavaScript", icon: TerminalSquare },
    { name: "TypeScript", icon: Type },
    { name: "React", icon: Atom },
    { name: "React Router", icon: Router },
    { name: "Redux", icon: Cuboid },
    { name: "Redux Toolkit", icon: Cuboid },
    { name: "Next.js", icon: BookOpen },
    { name: "i18next", icon: Languages },
  ],
  backend: [
    { name: "Node.js", icon: Hexagon },
    { name: "Express", icon: Server },
    { name: "MongoDB", icon: Database },
    { name: "Mongoose", icon: Database },
    { name: "Swagger", icon: FileText },
  ],
  tools: [
    { name: "GitHub", icon: GitBranch },
    { name: "Bitbucket", icon: GitBranch },
    { name: "npm", icon: Package },
    { name: "Yarn", icon: PackagePlus },
    { name: "Jira", icon: ClipboardList },
    { name: "Confluence", icon: BookOpenText },
    { name: "OWASP Top 10", icon: ShieldCheck },
  ],
  experimental: [
    { name: "Docker", icon: Settings2 },
    { name: "GraphQL", icon: Globe },
    { name: "Jest", icon: Bug },
  ],
});
