import {FC} from "hono/jsx";
import {linkButton} from "../assets/styles/index";
import {GitHubIcon, WantedlyIcon} from "./SkillIcons";

type IconType = "github" | "wantedly";

const iconMap: Record<IconType, FC<{size?: number}>> = {
  github: GitHubIcon,
  wantedly: WantedlyIcon,
};

type SocialLinkProps = {
  name: string;
  url: string;
  iconType: IconType;
};

export const SocialLink: FC<SocialLinkProps> = ({name, url, iconType}) => {
  const Icon = iconMap[iconType];
  return (
    <a class={linkButton} href={url} target="_blank">
      <Icon size={16} /> {name}
    </a>
  );
};

type SocialLinkData = {
  name: string;
  url: string;
  iconType: IconType;
};

type SocialLinksProps = {
  links: SocialLinkData[];
};

export const SocialLinks: FC<SocialLinksProps> = ({links}) => (
  <>
    {links.map((link) => (
      <SocialLink name={link.name} url={link.url} iconType={link.iconType} />
    ))}
  </>
);
