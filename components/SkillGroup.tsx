import {FC} from "hono/jsx";
import {langGroup, langTitle, frameworkList, skillTag, skillsRow} from "../assets/styles/index";
import type {LanguageSkill, Skill} from "../src/data/skills";

type SkillGroupProps = {
  language: LanguageSkill;
};

export const SkillGroup: FC<SkillGroupProps> = ({language}) => {
  const {name, Icon, frameworks} = language;
  return (
    <div class={langGroup}>
      <p class={langTitle}>
        <Icon /> {name}
      </p>
      <div class={frameworkList}>
        {frameworks.map((fw) => (
          <SkillTag skill={fw} />
        ))}
      </div>
    </div>
  );
};

type SkillTagProps = {
  skill: Skill;
};

export const SkillTag: FC<SkillTagProps> = ({skill}) => {
  const {name, Icon} = skill;
  return (
    <span class={skillTag}>
      <Icon /> {name}
    </span>
  );
};

type SkillRowProps = {
  skills: Skill[];
};

export const SkillRow: FC<SkillRowProps> = ({skills}) => (
  <div class={skillsRow}>
    {skills.map((skill) => (
      <SkillTag skill={skill} />
    ))}
  </div>
);
