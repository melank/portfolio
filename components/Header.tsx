import {FC} from "hono/jsx";
import {css} from "hono/css";

export const Header: FC = () => {
  const styledHeader = css`
    color: rgb(250, 220, 0);
    padding: 14px;
    background: #343b3f;
    width: 100%;
    text-align: center;
  `;

  const styledTitle = css`
    font-size: 24px;
    font-weight: 600;
  `;

  return (
    <header class={styledHeader}>
      <span class={styledTitle}>melank.me</span>
    </header>
  );
};
