import { css } from "hono/css";

export const global = css`
  :-hono-global {
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    body {
      background: #0f0f1a;
      color: #e2e8f0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      min-height: 100vh;
    }
    a {
      color: inherit;
    }
  }
`;