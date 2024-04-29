import { Hono } from 'hono' 
import { Header } from '../components/Header';
import { MyIcon } from '../components/MyIcon';
import { css } from 'hono/css'

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
  <Header>
    <MyIcon src={"images/icon.png"}></MyIcon>
  </Header>
)) 

export default app