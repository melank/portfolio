import {Hono} from "hono";
import {serveStatic} from "hono/cloudflare-pages";
import {Style} from "hono/css";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {MyIcon} from "../components/MyIcon";
import {SkillGroup, SkillRow} from "../components/SkillGroup";
import {TerminalLines} from "../components/TerminalLine";
import {SocialLinks} from "../components/SocialLink";
import {global} from "../assets/styles/global";
import {
  container,
  mainGrid,
  profileCard,
  profileHeader,
  profileInfo,
  nameContainer,
  nameLeft,
  linksRight,
  name,
  nameEn,
  roleContainer,
  roleBadge,
  openToWorkBadge,
  sectionTitle,
  skillsSection,
  skillCategoryTitle,
  langGrid,
  terminalCard,
  terminalHeader,
  terminalDot,
  terminalBody,
} from "../assets/styles/index";
import {
  languageSkills,
  infrastructureSkills,
  otherSkills,
  terminalLines,
  socialLinks,
  roles,
} from "./data/skills";

const app = new Hono();

app.get("/", (c) =>
  c.html(
    <html lang="ja">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Masaki Kishida - Portfolio</title>
        <Style />
      </head>
      <body class={global}>
        <Header />
        <div class={container}>
          <div class={mainGrid}>
            <div class={profileCard}>
              <div class={profileHeader}>
                <MyIcon src={"/icon.jpeg"} />
                <div class={profileInfo}>
                  <div class={nameContainer}>
                    <div class={nameLeft}>
                      <h1 class={name}>
                        <ruby>岸田<rp>(</rp><rt class={nameEn}>KISHIDA</rt><rp>)</rp></ruby>{" "}
                        <ruby>賢紀<rp>(</rp><rt class={nameEn}>Masaki</rt><rp>)</rp></ruby>
                      </h1>
                      <span class={openToWorkBadge}>Open to Work</span>
                    </div>
                    <div class={linksRight}>
                      <SocialLinks links={socialLinks} />
                    </div>
                  </div>
                  <div class={roleContainer}>
                    {roles.map((role) => (
                      <span class={roleBadge}>{role}</span>
                    ))}
                  </div>
                </div>
              </div>

              <h2 class={sectionTitle}>Skills</h2>

              <div class={skillsSection}>
                <p class={skillCategoryTitle}>Languages & Frameworks</p>
                <div class={langGrid}>
                  {languageSkills.map((lang) => (
                    <SkillGroup language={lang} />
                  ))}
                </div>
              </div>

              <div class={langGrid}>
                <div class={skillsSection}>
                  <p class={skillCategoryTitle}>Infrastructure</p>
                  <SkillRow skills={infrastructureSkills} />
                </div>

                <div class={skillsSection}>
                  <p class={skillCategoryTitle}>Other</p>
                  <SkillRow skills={otherSkills} />
                </div>
              </div>
            </div>

            <div class={terminalCard}>
              <div class={terminalHeader}>
                <span class={terminalDot} style="background: #ff5f56;" />
                <span class={terminalDot} style="background: #ffbd2e;" />
                <span class={terminalDot} style="background: #27c93f;" />
              </div>
              <div class={terminalBody}>
                <TerminalLines entries={terminalLines} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  )
);

// serveStatic は Cloudflare Pages 環境でのみ動作させる
// ローカルでは Vite が静的ファイルを提供するため
if (import.meta.env.PROD) {
  app.use("/*", serveStatic());
}

export default app;
