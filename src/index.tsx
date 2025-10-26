import {Hono} from "hono";
import {serveStatic} from "hono/cloudflare-pages";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {MyIcon} from "../components/MyIcon";
import {css, Style} from "hono/css";
import {global} from "../assets/styles/global";

const app = new Hono();

const container = css`
  margin: 20px 20px 120px 20px;
`;

const styledParagraph = css`
  margin-bottom: 8px;
`;

app.get("/", (c) =>
  c.html(
    <div class={global}>
      <Style />
      <Header />
      <div class={container}>
        <MyIcon src={"/icon.jpeg"} />
        <p class={styledParagraph}>岸田 賢紀(KISHIDA Masaki)</p>
        <p class={styledParagraph}>
          Backend-Engineer @ <a href="https://fusic.co.jp">Fusic CO.,LTD</a>
        </p>
      </div>
      <Footer />
    </div>
  )
);

app.use("/*", serveStatic());

export default app;
