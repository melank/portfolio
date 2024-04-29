import { Hono } from 'hono' 
import { Header } from '../components/Header';
import { MyIcon } from '../components/MyIcon';
import { css, Style } from 'hono/css'
import { global } from "../assets/styles/global";

const app = new Hono()

// div
const container = css`
  margin: 20px 20px 120px 20px; 
`;
// foolter
const styledFooter = css`
  color: #fff;
  text-align: center;
  padding: 10px 0;
  color: rsgb(250, 220, 0);
  background: #343b3f;
  width: 100%;
  position: fixed; /* 要素の位置を固定する */
  bottom: 0; /* 基準の位置を画面の一番下に指定する */
`;
// p
const styledParagraph = css`
  margin-bottom: 8px;
`;

app.get('/', (c) => c.html(
  <div class={global}>
    <Style />
    <Header/>
    <div class={container} >
      <MyIcon src={"icon.png"} />
      <p class={styledParagraph}>岸田 賢紀（KISHIDA Masaki）</p>
      <p class={styledParagraph}>
        Backend-Engineer @ <a href="https://fusic.co.jp">Fusic CO.,LTD</a>
      </p>
    </div>
  </div>
)) 

export default app