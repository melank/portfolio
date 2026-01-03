# Portfolio

melankポートフォリオサイト

## 技術スタック

- **フレームワーク**: [Hono](https://hono.dev/)
- **ビルドツール**: [Vite](https://vitejs.dev/)
- **ランタイム**: [Bun](https://bun.sh/)
- **デプロイ**: [Cloudflare Pages](https://pages.cloudflare.com/)

## セットアップ

### 前提条件

- Bun

### インストール

```bash
bun install
```

## 開発

ローカル開発サーバーを起動：

```bash
bun run dev
```

ブラウザで `http://localhost:5173/` を開いて確認できます。

## ビルド

静的ファイルを生成：

```bash
bun run build
```

## プレビュー

ビルド後のファイルをローカルでプレビュー：

```bash
bun run preview
```

## デプロイ

### 手動デプロイ

Cloudflare Pagesにデプロイ：

```bash
bun run deploy
```

### 自動デプロイ（CI/CD）

Cloudflare Pages の Git 統合により、`main` ブランチにプッシュすると自動的にビルド・デプロイが実行されます。

#### Cloudflare Pages ビルド設定

| 項目 | 値 |
|------|-----|
| Production branch | `main` |
| Build command | `bun install && bun run build` |
| Build output directory | `dist` |

#### 環境変数

| 変数名 | 値 |
|--------|-----|
| `BUN_VERSION` | `1` |
| `SKIP_DEPENDENCY_INSTALL` | `true` |

## ライセンス

MIT License

---

© melank
