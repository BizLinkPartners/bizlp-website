# ファイル別詳細役割説明

## 🎯 ページファイル（画面表示）

### `pages/index.tsx` - ホームページ
**役割**: サイトのトップページ
- **表示内容**: ヒーローセクション、最新ニュース5件、CTAボタン
- **データ取得**: `fetchNewsList(5, 0)` で最新5件のニュースを取得
- **SEO**: タイトル「BizLP | ホーム」、説明文設定
- **ナビゲーション**: ニュース一覧、会社概要へのリンク

### `pages/news/index.tsx` - ニュース一覧
**役割**: 全ニュース記事の一覧表示
- **表示内容**: 記事タイトル、説明、公開日、ページネーション
- **データ取得**: `getNews()` で全記事を取得
- **フィルタリング**: カテゴリ別、日付別での絞り込み機能
- **SEO**: タイトル「ニュース一覧」

### `pages/news/[id].tsx` - ニュース詳細
**役割**: 個別記事の詳細表示
- **表示内容**: 記事タイトル、本文、公開日、関連記事
- **データ取得**: `getDetail(contentId)` で記事詳細を取得
- **動的ルーティング**: URLパラメータから記事IDを取得
- **SEO**: 記事タイトルをページタイトルに設定

### `pages/company.tsx` - 会社概要
**役割**: 企業情報の表示
- **表示内容**: 会社名、沿革、理念、所在地、連絡先
- **静的コンテンツ**: ハードコードされた企業情報
- **SEO**: タイトル「会社概要」

### `pages/contact.tsx` - お問い合わせ
**役割**: 問い合わせフォーム
- **表示内容**: 名前、メール、内容の入力フォーム
- **機能**: フォーム送信、送信完了メッセージ表示
- **状態管理**: `useState` で送信状態を管理
- **SEO**: タイトル「お問い合わせ」

### `pages/privacy.tsx` - プライバシーポリシー
**役割**: 個人情報保護方針の表示
- **表示内容**: 法的文書、個人情報の取り扱いについて
- **静的コンテンツ**: ハードコードされた法的文書
- **SEO**: タイトル「プライバシーポリシー」

### `pages/terms.tsx` - 利用規約
**役割**: サイト利用規約の表示
- **表示内容**: 利用規約、免責事項、禁止事項
- **静的コンテンツ**: ハードコードされた規約文書
- **SEO**: タイトル「利用規約」

### `pages/_app.tsx` - アプリケーションラッパー
**役割**: 全ページ共通の設定
- **機能**: グローバルスタイルの適用、全ページ共通の初期化処理
- **重要度**: Next.jsの必須ファイル

---

## 🧩 コンポーネント

### `components/Layout.tsx` - 共通レイアウト
**役割**: 全ページ共通のUI構造
- **ヘッダー**: ロゴ、ナビゲーションメニュー（Home, News, Company, Contact）
- **フッター**: コピーライト、プライバシーポリシー・利用規約へのリンク
- **SEO設定**: ページタイトル、メタディスクリプション、viewport設定
- **レスポンシブ**: モバイル用ハンバーガーメニュー
- **Props**: `title`, `description`, `children` を受け取り

---

## 🔧 ライブラリ・API

### `lib/microcms.ts` - API通信クライアント
**役割**: microCMSとの通信を担当
- **型定義**: `News` 型（id, title, description, body, eventDate, publishedAt等）
- **クライアント初期化**: 環境変数からサービスドメイン・APIキーを取得
- **関数**:
  - `getNews()`: 全ニュース一覧取得
  - `fetchNewsList(limit, offset)`: ページネーション対応のニュース取得
  - `getDetail(contentId)`: 個別記事詳細取得
- **エラーハンドリング**: try-catch文でAPI通信エラーをキャッチ
- **デバッグ**: コンソールログでAPI通信状況を確認

---

## 🎨 スタイリング

### `styles/globals.css` - グローバルCSS
**役割**: サイト全体のスタイル定義
- **Tailwind CSS**: `@tailwind` ディレクティブでTailwindを読み込み
- **ベーススタイル**: html, body, #__next の高さ設定
- **カスタムクラス**:
  - `.container-responsive`: レスポンシブコンテナ
  - `.heading-1`, `.heading-2`, `.heading-3`: タイポグラフィスケール
  - `.prose-basic`: 記事本文用スタイル
- **アンチエイリアス**: `antialiased` でフォントの滑らかさ向上

---

## ⚙️ 設定ファイル

### `next.config.js` - Next.js設定
**役割**: Next.jsの動作設定
- **React Strict Mode**: 開発時の厳密なチェックを有効化
- **画像最適化**: microCMSの画像ドメイン（images.microcms-assets.io）を許可
- **ビルド設定**: 本番環境での最適化設定

### `tsconfig.json` - TypeScript設定
**役割**: TypeScriptのコンパイル設定
- **ターゲット**: ES2020でコンパイル
- **パスエイリアス**: `@/components/*`, `@/lib/*` でインポートパスを短縮
- **厳密な型チェック**: `strict: true`, `noUncheckedIndexedAccess: true`
- **JSX**: React用のJSX設定

### `tailwind.config.js` - Tailwind CSS設定
**役割**: Tailwind CSSのカスタマイズ
- **コンテンツパス**: pages/, components/ フォルダを監視
- **カスタムカラー**: brand色パレット（50-900の9段階）
- **プラグイン**: @tailwindcss/typography で記事本文のスタイリング

### `postcss.config.js` - PostCSS設定
**役割**: CSS処理の設定
- **Tailwind CSS**: Tailwind CSSの処理
- **Autoprefixer**: ベンダープレフィックスの自動追加

### `package.json` - 依存関係管理
**役割**: プロジェクトの依存関係とスクリプト管理
- **依存関係**: Next.js, React, microcms-js-sdk, Tailwind CSS等
- **開発依存関係**: TypeScript, ESLint, 各種型定義
- **スクリプト**: dev, build, start, lint コマンド
- **エンジン**: Node.js >=18.17.0, npm >=9 を要求

### `.gitignore` - Git除外設定
**役割**: バージョン管理から除外するファイルの指定
- **除外対象**: node_modules/, .next/, .env.local, ログファイル等
- **目的**: 不要なファイルをリポジトリに含めない

---

## 📦 依存関係（node_modules/）

### 主要ライブラリ
- **Next.js**: Reactフレームワーク、SSG/SSR、ルーティング
- **React**: UIライブラリ、コンポーネント、状態管理
- **microcms-js-sdk**: microCMS APIクライアント
- **Tailwind CSS**: ユーティリティファーストCSSフレームワーク

### 開発ツール
- **TypeScript**: 型安全性、開発体験向上
- **ESLint**: コード品質チェック
- **PostCSS**: CSS処理・最適化
- **Autoprefixer**: CSSベンダープレフィックス自動追加

---

## 🔄 ファイル間の連携

### データフロー
1. **microCMS** → `lib/microcms.ts` → `pages/*.tsx` → `components/Layout.tsx`
2. **設定ファイル** → ビルドプロセス → 最終的なWebサイト

### インポート関係
- ページファイル → Layoutコンポーネント
- ページファイル → microcms API関数
- Layout → Next.jsのHeadコンポーネント
- 全ファイル → グローバルCSS

この構造により、保守性が高く、拡張しやすいWebサイトが構築されています。

