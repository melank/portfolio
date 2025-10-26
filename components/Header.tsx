import {FC} from "hono/jsx";
import {css} from "hono/css";

export const Header: FC = () => {
  const styledHeader = css`
    color: rgb(250, 220, 0);
    padding: 10px;
    background: #343b3f;
    width: 100%;
  `;

  const styledHeaderLink = css`
    text-decoration: none;
    color: white;
    margin-left: 10px;
  `;

  const styledTitle = css`
    font-size: 24px;
  `;

  return (
    <header class={styledHeader}>
      <span class={styledTitle}>melank.me</span>
      <a class={styledHeaderLink} href="https://github.com/melank">
        GitHub
      </a>
      <a class={styledHeaderLink} href="https://wantedly.com/id/melank">
        Wantedly
      </a>
    </header>
  );
};
