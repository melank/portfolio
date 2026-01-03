import {css} from "hono/css";

export const container = css`
  max-width: 1500px;
  margin: 0 auto;
  padding: 20px;
`;

export const mainGrid = css`
  display: grid;
  grid-template-columns: 1fr 600px;
  gap: 24px;
  align-items: start;
`;

export const profileCard = css`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
`;

export const profileHeader = css`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 24px;
  flex-wrap: wrap;
`;

export const profileInfo = css`
  flex: 1;
  min-width: 200px;
`;

export const nameContainer = css`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
`;

export const nameLeft = css`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
`;

export const linksRight = css`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-end;
`;

export const name = css`
  font-size: 28px;
  font-weight: 700;
  color: #fff;
`;

export const roleContainer = css`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
`;

export const roleBadge = css`
  background: linear-gradient(90deg, #00c6ff 0%, #0072ff 100%);
  color: #fff;
  padding: 8px 18px;
  border-radius: 20px;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

export const specialtyBadge = css`
  background: rgba(0, 198, 255, 0.1);
  color: #7dd3fc;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 500;
`;

export const company = css`
  color: #a0aec0;
  font-size: 16px;
`;

export const companyLink = css`
  color: #63b3ed;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const openToWorkBadge = css`
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

export const linksContainer = css`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 12px;
`;

export const linkButton = css`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.1);
  color: #e2e8f0;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const sectionTitle = css`
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

export const skillsSection = css`
  margin-bottom: 20px;
`;

export const skillCategoryTitle = css`
  font-size: 14px;
  color: #e2e8f0;
  margin-bottom: 14px;
  font-weight: 600;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const langGrid = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

export const skillsRow = css`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const langGroup = css`
  margin-bottom: 0;
`;

export const langTitle = css`
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const frameworkList = css`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding-left: 12px;
  border-left: 2px solid rgba(0, 198, 255, 0.3);
`;

export const skillTag = css`
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

export const backendHighlight = css`
  background: linear-gradient(135deg, rgba(0, 198, 255, 0.2) 0%, rgba(0, 114, 255, 0.2) 100%);
  border-color: rgba(0, 198, 255, 0.3);
`;

export const terminalCard = css`
  background: #0d1117;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
`;

export const terminalHeader = css`
  background: #161b22;
  padding: 12px 16px;
  display: flex;
  gap: 8px;
`;

export const terminalDot = css`
  width: 12px;
  height: 12px;
  border-radius: 50%;
`;

export const terminalBody = css`
  padding: 20px;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 13px;
  line-height: 1.8;
`;

export const terminalLine = css`
  color: #8b949e;
  margin-bottom: 4px;
`;

export const terminalPrompt = css`
  color: #58a6ff;
`;

export const terminalValue = css`
  color: #7ee787;
`;
