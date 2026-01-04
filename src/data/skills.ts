import {FC} from "hono/jsx";
import {
  PHPIcon,
  TypeScriptIcon,
  PythonIcon,
  LaravelIcon,
  SymfonyIcon,
  BrefIcon,
  NestJSIcon,
  NextJSIcon,
  ReactIcon,
  HonoIcon,
  AWSIcon,
  DockerIcon,
  MySQLIcon,
  OpenGLIcon,
} from "../../components/SkillIcons";

type IconProps = {
  size?: number;
};

export type Skill = {
  name: string;
  Icon: FC<IconProps>;
};

export type LanguageSkill = {
  name: string;
  Icon: FC<IconProps>;
  frameworks: Skill[];
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};

export const languageSkills: LanguageSkill[] = [
  {
    name: "PHP",
    Icon: PHPIcon,
    frameworks: [
      {name: "Laravel", Icon: LaravelIcon},
      {name: "Symfony", Icon: SymfonyIcon},
      {name: "Bref", Icon: BrefIcon},
    ],
  },
  {
    name: "TypeScript (Backend)",
    Icon: TypeScriptIcon,
    frameworks: [
      {name: "NestJS", Icon: NestJSIcon},
      {name: "Hono", Icon: HonoIcon},
    ],
  },
  {
    name: "Python",
    Icon: PythonIcon,
    frameworks: [
      {name: "AWS Lambda", Icon: AWSIcon},
      {name: "AWS SAM", Icon: AWSIcon},
    ],
  },
  {
    name: "TypeScript (Frontend / BFF)",
    Icon: TypeScriptIcon,
    frameworks: [
      {name: "React", Icon: ReactIcon},
      {name: "Next.js", Icon: NextJSIcon},
    ],
  },
];

export const infrastructureSkills: Skill[] = [
  {name: "AWS", Icon: AWSIcon},
  {name: "Docker", Icon: DockerIcon},
  {name: "MySQL", Icon: MySQLIcon},
];

export const otherSkills: Skill[] = [
  {name: "OpenGL", Icon: OpenGLIcon},
];

export const terminalLines = [
  {command: "whoami", output: "Software Engineer specializing in Backend, passionate about Serverless"},
  {command: "cat skills.txt", output: "Requirements Definition, API Design, DB Design, Infrastructure"},
];

export const socialLinks = [
  {name: "GitHub", url: "https://github.com/melank", iconType: "github" as const},
  {name: "Wantedly", url: "https://wantedly.com/id/melank", iconType: "wantedly" as const},
];

export const roles = ["Software Engineer", "Project Manager"];
