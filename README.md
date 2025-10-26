# Portfolio

melankポートフォリオサイト

## 技術スタック

- **フレームワーク**: [Hono](https://hono.dev/)
- **UIライブラリ**: Hono/jsx
- **スタイリング**: Hono/css
- **ビルドツール**: [Vite](https://vitejs.dev/)
- **デプロイ**: [Cloudflare Pages](https://pages.cloudflare.com/)
- **ランタイム**: Cloudflare Workers

## セットアップ

### 前提条件

- Node.js 18以上
- npm または yarn

### インストール

```bash
npm install
```

## 開発

ローカル開発サーバーを起動：

```bash
npm run dev
```

ブラウザで `http://localhost:5173/` を開いて確認できます。

## ビルド

静的ファイルを生成：

```bash
npm run build
```

## プレビュー

ビルド後のファイルをローカルでプレビュー：

```bash
npm run preview
```

## デプロイ

Cloudflare Pagesにデプロイ：

```bash
npm run deploy
```

## ライセンス

MIT License

---

© melank
