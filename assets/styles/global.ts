import { css } from "hono/css";

export const global = css`
  :-hono-global {
    * {
      padding: 0;
      margin: 0;
    }
  }
`