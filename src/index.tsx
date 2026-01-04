import {Hono} from "hono";
import {serveStatic} from "hono/cloudflare-pages";
import {Style} from "hono/css";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {MyIcon} from "../components/MyIcon";
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
} from "../components/SkillIcons";
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
  linkButton,
  sectionTitle,
  skillsSection,
  skillCategoryTitle,
  langGrid,
  skillsRow,
  langGroup,
  langTitle,
  frameworkList,
  skillTag,
  terminalCard,
  terminalHeader,
  terminalDot,
  terminalBody,
  terminalLine,
  terminalPrompt,
  terminalValue,
} from "../assets/styles/index";

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
                    <ruby>岸田<rp>(</rp><rt class={nameEn}>KISHIDA</rt><rp>)</rp></ruby> <ruby>賢紀<rp>(</rp><rt class={nameEn}>Masaki</rt><rp>)</rp></ruby>
                  </h1>
                  <span class={openToWorkBadge}>Open to Work</span>
                </div>
                <div class={linksRight}>
                  <a class={linkButton} href="https://github.com/melank" target="_blank">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a class={linkButton} href="https://wantedly.com/id/melank" target="_blank">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.453 14.555c-.171-.111-.658-.764-2.006-3.982a9.192 9.192 0 0 0-.237-.526l-.274-.664l-2.362-5.702H8.85l2.362 5.702l2.362 5.706l2.181 5.267a.196.196 0 0 0 .362 0l2.373-5.682a.1.1 0 0 0-.037-.119zm-8.85 0c-.171-.111-.658-.764-2.006-3.982a8.971 8.971 0 0 0-.236-.525l-.276-.665l-2.36-5.702H0l2.362 5.702l2.362 5.706l2.181 5.267a.196.196 0 0 0 .362 0l2.374-5.682a.098.098 0 0 0-.038-.119ZM24 6.375a2.851 2.851 0 0 1-2.851 2.852a2.851 2.851 0 0 1-2.852-2.852a2.851 2.851 0 0 1 2.852-2.851A2.851 2.851 0 0 1 24 6.375Z"/>
                    </svg>
                    Wantedly
                  </a>
                </div>
              </div>
              <div class={roleContainer}>
                <span class={roleBadge}>Software Engineer</span>
                <span class={roleBadge}>Project Manager</span>
              </div>
            </div>
          </div>

          <h2 class={sectionTitle}>Skills</h2>

          <div class={skillsSection}>
            <p class={skillCategoryTitle}>Languages & Frameworks</p>
            <div class={langGrid}>
              <div class={langGroup}>
                <p class={langTitle}><PHPIcon /> PHP</p>
                <div class={frameworkList}>
                  <span class={skillTag}><LaravelIcon /> Laravel</span>
                  <span class={skillTag}><SymfonyIcon /> Symfony</span>
                  <span class={skillTag}><BrefIcon /> Bref</span>
                </div>
              </div>
              <div class={langGroup}>
                <p class={langTitle}><TypeScriptIcon /> TypeScript (Backend)</p>
                <div class={frameworkList}>
                  <span class={skillTag}><NestJSIcon /> NestJS</span>
                  <span class={skillTag}><HonoIcon /> Hono</span>
                </div>
              </div>
              <div class={langGroup}>
                <p class={langTitle}><PythonIcon /> Python</p>
                <div class={frameworkList}>
                  <span class={skillTag}><AWSIcon /> AWS Lambda</span>
                  <span class={skillTag}><AWSIcon /> AWS SAM</span>
                </div>
              </div>
              <div class={langGroup}>
                <p class={langTitle}><TypeScriptIcon /> TypeScript (Frontend / BFF)</p>
                <div class={frameworkList}>
                  <span class={skillTag}><ReactIcon /> React</span>
                  <span class={skillTag}><NextJSIcon /> Next.js</span>
                </div>
              </div>
            </div>
          </div>

          <div class={langGrid}>
            <div class={skillsSection}>
              <p class={skillCategoryTitle}>Infrastructure</p>
              <div class={skillsRow}>
                <span class={skillTag}><AWSIcon /> AWS</span>
                <span class={skillTag}><DockerIcon /> Docker</span>
                <span class={skillTag}><MySQLIcon /> MySQL</span>
              </div>
            </div>

            <div class={skillsSection}>
              <p class={skillCategoryTitle}>Other</p>
              <div class={skillsRow}>
                <span class={skillTag}><OpenGLIcon /> OpenGL</span>
              </div>
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
            <p class={terminalLine}>
              <span class={terminalPrompt}>$ </span>whoami
            </p>
            <p class={terminalLine}>
              <span class={terminalValue}>Software Engineer specializing in Backend, passionate about Serverless</span>
            </p>
            <p class={terminalLine}>
              <span class={terminalPrompt}>$ </span>cat skills.txt
            </p>
            <p class={terminalLine}>
              <span class={terminalValue}>Requirements Definition, API Design, DB Design, Infrastructure</span>
            </p>
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
