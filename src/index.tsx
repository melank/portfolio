import {Hono} from "hono";
import {serveStatic} from "hono/cloudflare-pages";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {MyIcon} from "../components/MyIcon";
import {css, cx, Style} from "hono/css";
import {global} from "../assets/styles/global";

const app = new Hono();

const container = css`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px 120px;
`;

const profileCard = css`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border-radius: 16px;
  padding: 40px;
  margin-bottom: 32px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
`;

const profileHeader = css`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 24px;
  flex-wrap: wrap;
`;

const profileInfo = css`
  flex: 1;
  min-width: 200px;
`;

const name = css`
  font-size: 28px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
`;

const roleContainer = css`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
`;

const roleBadge = css`
  background: linear-gradient(90deg, #00c6ff 0%, #0072ff 100%);
  color: #fff;
  padding: 8px 18px;
  border-radius: 20px;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const specialtyBadge = css`
  background: rgba(0, 198, 255, 0.1);
  color: #7dd3fc;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 500;
`;

const company = css`
  color: #a0aec0;
  font-size: 16px;
`;

const companyLink = css`
  color: #63b3ed;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const openToWorkBadge = css`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: linear-gradient(90deg, #059669 0%, #10b981 100%);
  color: #fff;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  &::before {
    content: "";
    display: inline-block;
    width: 8px;
    height: 8px;
    background: #fff;
    border-radius: 50%;
    animation: pulse 2s infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`;

const sectionTitle = css`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  &::before {
    content: "";
    display: inline-block;
    width: 4px;
    height: 20px;
    background: linear-gradient(180deg, #00c6ff 0%, #0072ff 100%);
    border-radius: 2px;
  }
`;

const skillsGrid = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 12px;
`;

const skillTag = css`
  background: rgba(255, 255, 255, 0.1);
  color: #e2e8f0;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 14px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s;
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(99, 179, 237, 0.5);
  }
`;

const backendHighlight = css`
  background: linear-gradient(135deg, rgba(0, 198, 255, 0.2) 0%, rgba(0, 114, 255, 0.2) 100%);
  border-color: rgba(0, 198, 255, 0.3);
`;

const terminalCard = css`
  background: #0d1117;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
`;

const terminalHeader = css`
  background: #161b22;
  padding: 12px 16px;
  display: flex;
  gap: 8px;
`;

const terminalDot = css`
  width: 12px;
  height: 12px;
  border-radius: 50%;
`;

const terminalBody = css`
  padding: 20px;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 14px;
  line-height: 1.8;
`;

const terminalLine = css`
  color: #8b949e;
  margin-bottom: 4px;
`;

const terminalPrompt = css`
  color: #58a6ff;
`;

const terminalValue = css`
  color: #7ee787;
`;

app.get("/", (c) =>
  c.html(
    <div class={global}>
      <Style />
      <Header />
      <div class={container}>
        <div class={profileCard}>
          <div class={profileHeader}>
            <MyIcon src={"/icon.jpeg"} />
            <div class={profileInfo}>
              <h1 class={name}>岸田 賢紀</h1>
              <div class={roleContainer}>
                <span class={roleBadge}>Software Engineer</span>
                <span class={specialtyBadge}>System Design</span>
                <span class={specialtyBadge}>API/DB Design</span>
                <span class={specialtyBadge}>Infrastructure</span>
              </div>
              <span class={openToWorkBadge}>Open to Work</span>
            </div>
          </div>

          <h2 class={sectionTitle}>Skills</h2>
          <div class={skillsGrid}>
            <span class={cx(skillTag, backendHighlight)}>PHP</span>
            <span class={cx(skillTag, backendHighlight)}>Laravel</span>
            <span class={cx(skillTag, backendHighlight)}>Go</span>
            <span class={cx(skillTag, backendHighlight)}>Python</span>
            <span class={skillTag}>TypeScript</span>
            <span class={skillTag}>AWS</span>
            <span class={skillTag}>Docker</span>
            <span class={skillTag}>MySQL</span>
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
              <span class={terminalValue}>Software Engineer specializing in Backend</span>
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
      <Footer />
    </div>
  )
);

// serveStatic は Cloudflare Pages 環境でのみ動作させる
// ローカルでは Vite が静的ファイルを提供するため
if (import.meta.env.PROD) {
  app.use("/*", serveStatic());
}

export default app;
