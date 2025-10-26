import {FC} from "hono/jsx";
import {css} from "hono/css";

export const Footer: FC = () => {
  const styledFooter = css`
    text-align: center;
    padding: 10px 0;
    color: rgb(250, 220, 0);
    background: #343b3f;
    width: 100%;
    position: fixed;
    bottom: 0;
  `;

  return <footer class={styledFooter}></footer>;
};
