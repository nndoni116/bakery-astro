# ハードパン — hardpan-astro

石川県金沢市に構えるハード系パン専門店向けの Astro テンプレートです。サイトは Astro と Tailwind CSS で構築され、コンテンツは microCMS から取得する設計になっています。

## 主な特徴

- 高速な静的サイト生成（Astro）
- ユーティリティファーストなスタイリング（Tailwind CSS）
- microCMS によるヘッドレス CMS 連携（`src/lib/microcms.ts`）
- TypeScript 対応、コンポーネント分割済み（`src/components`）

## 前提条件

- Node.js 18 以上（推奨）
- npm または yarn

## ローカル開発の手順

1. 依存関係をインストール

```bash
npm install
```

2. 環境変数を設定

ルートに `.env` を作成し、以下を追加してください（microCMS の情報は microCMS 管理画面で確認）。

```text
MICROCMS_SERVICE_DOMAIN=your-service-domain
MICROCMS_API_KEY=your-api-key
```

※ `src/lib/microcms.ts` は `import.meta.env.MICROCMS_SERVICE_DOMAIN` と `import.meta.env.MICROCMS_API_KEY` を参照します。

3. 開発サーバーを起動

```bash
npm run dev
```

ブラウザで http://localhost:3000 を開いてください（ポートはスクリプト設定による）。

## ビルドとプレビュー

```bash
npm run build
npm run preview
```

## ディレクトリ構成（抜粋）

- `src/pages` — ページ（`index.astro`）
- `src/components` — UI コンポーネント（`Header.astro`, `Hero.astro`, `ProductCard.astro` 等）
- `src/layouts` — レイアウト（`BaseLayout.astro`）
- `src/lib/microcms.ts` — microCMS クライアント（環境変数で設定）
- `src/env.d.ts` — 環境変数の型定義
- `tailwind.config.mjs`, `astro.config.mjs` — 各種設定

## microCMS 設定について

`src/lib/microcms.ts` の中身は次のようになっており、`import.meta.env` で値を読み込みます:

```ts
serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
apiKey: import.meta.env.MICROCMS_API_KEY,
```

API キーはビルド時／サーバー側での使用を想定して安全に管理してください。必要に応じて公開キー（公開コンテンツ用）と非公開キーを使い分けてください。

## デプロイ

cloudflare

### Vercel の手順（概要）

1. Git リポジトリを作成して push
2. Vercel でリポジトリをインポート
3. 環境変数 `MICROCMS_SERVICE_DOMAIN` / `MICROCMS_API_KEY` を設定

## 貢献

改善提案やバグ修正、UI の改良など歓迎します。プルリクエストを送ってください。

## ライセンス

適切なライセンスを選んで追加してください（例: MIT）。

---

要望があれば、英語版 README の追加、デプロイ手順のスクリーンショット追加、または microCMS のサンプルコンテンツの導入手順を追記します。

