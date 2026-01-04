import {FC} from "hono/jsx";
import {css} from "hono/css";

export const Footer: FC = () => {
  const styledFooter = css`
    position: fixed;
    bottom: 10px;
    right: 15px;
    color: #888;
    font-size: 12px;

    @media (max-width: 768px) {
      right: auto;
      left: 50%;
      transform: translateX(-50%);
    }
  `;

  return <footer class={styledFooter}>&copy; 2025 Masaki Kishida</footer>;
};
