# メール送信機能セットアップガイド

お問い合わせフォームのメール送信機能を有効にするための手順です。

---

## 必要なもの

1. **Resendアカウント**（無料プランあり）
2. **メールを受信するアドレス**（お問い合わせ内容を受け取るアドレス）

---

## セットアップ手順

### 1. Resendアカウントの作成

1. [Resend](https://resend.com/) にアクセス
2. **Sign Up** をクリックして無料アカウントを作成
3. メール認証を完了

### 2. APIキーの取得

1. Resendダッシュボードにログイン
2. 左メニューから **API Keys** を選択
3. **Create API Key** ボタンをクリック
4. 名前を入力（例: `bizlp-production`）
5. **Full access** を選択（または **Sending access** のみでもOK）
6. 生成されたAPIキーをコピー（後で使用します）

   ```
   re_xxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

   ⚠️ **重要**: このAPIキーは一度しか表示されないので、必ず保存してください。

### 3. ドメインの認証（オプション・推奨）

独自ドメインからメールを送信する場合：

1. Resendダッシュボードで **Domains** を選択
2. **Add Domain** をクリック
3. あなたのドメイン（例: `yourdomain.com`）を入力
4. 表示されるDNSレコードを、ドメインのDNS設定に追加
5. 認証完了を確認

**テスト目的の場合**: `onboarding@resend.dev` をそのまま使用できます（ドメイン認証不要）

### 4. 環境変数の設定

プロジェクトルートに `.env.local` ファイルを作成します。

#### 4-1. `.env.local` ファイルを作成

プロジェクトルート（`C:\github\bizlp-website\`）に `.env.local` ファイルを作成してください。

#### 4-2. 以下の内容をコピーして貼り付け

```env
# microCMS API設定（既存）
MICROCMS_SERVICE_DOMAIN=あなたのmicroCMSサービスドメイン
MICROCMS_API_KEY=あなたのmicroCMS APIキー

# Resend メール送信設定
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx
RESEND_FROM_EMAIL=onboarding@resend.dev
CONTACT_RECIPIENT_EMAIL=your-email@example.com
```

#### 4-3. 各項目を編集

| 環境変数 | 説明 | 例 |
|---------|------|-----|
| `RESEND_API_KEY` | 手順2で取得したAPIキー | `re_abc123...` |
| `RESEND_FROM_EMAIL` | メール送信元アドレス | `noreply@yourdomain.com` または `onboarding@resend.dev` |
| `CONTACT_RECIPIENT_EMAIL` | お問い合わせを受け取るメールアドレス | `info@yourdomain.com` |

**例**:
```env
# Resend メール送信設定
RESEND_API_KEY=re_3Kd8Jm9LpQ2nR5tY7wX1zA4bC6eF8hG
RESEND_FROM_EMAIL=onboarding@resend.dev
CONTACT_RECIPIENT_EMAIL=horii@example.com
```

### 5. 開発サーバーを再起動

環境変数を読み込むため、開発サーバーを再起動します。

```bash
# Ctrl+C で停止
npm run dev
```

### 6. 動作確認

1. http://localhost:3000/contact にアクセス
2. お問い合わせフォームを入力して送信
3. `CONTACT_RECIPIENT_EMAIL` に設定したメールアドレスに届くか確認

---

## トラブルシューティング

### メールが届かない

1. **APIキーを確認**
   - `.env.local` の `RESEND_API_KEY` が正しいか確認
   - Resendダッシュボードで APIキーが有効か確認

2. **メールアドレスを確認**
   - `CONTACT_RECIPIENT_EMAIL` が正しく設定されているか確認
   - スパムフォルダを確認

3. **送信元アドレスを確認**
   - 独自ドメインを使っている場合、ドメイン認証が完了しているか確認
   - テストの場合は `onboarding@resend.dev` を使用

4. **ログを確認**
   - ターミナルにエラーが表示されていないか確認
   - Resendダッシュボードの **Logs** で送信履歴を確認

### 開発環境でのみテストしたい

開発環境では、実際にメールを送信せずにコンソールにログ出力されます。
`pages/api/contact.ts` の 48-54行目を確認してください。

---

## Vercelへのデプロイ時の設定

Vercelにデプロイする場合、環境変数を設定する必要があります。

1. Vercelダッシュボードでプロジェクトを選択
2. **Settings** → **Environment Variables** を開く
3. 以下の環境変数を追加:
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL`
   - `CONTACT_RECIPIENT_EMAIL`
4. **Redeploy** して変更を反映

---

## 料金について

### Resend 無料プラン

- **月間送信数**: 3,000通まで無料
- **API制限**: 100リクエスト/秒
- **サポート**: コミュニティサポート

お問い合わせフォームの用途であれば、無料プランで十分です。

詳細: https://resend.com/pricing

---

## セキュリティ注意事項

⚠️ **絶対にしてはいけないこと**:

1. `.env.local` ファイルを Git にコミットしない
2. APIキーを公開リポジトリに含めない
3. APIキーをフロントエンドのコードに書かない

✅ `.gitignore` に `.env.local` が含まれていることを確認してください（デフォルトで含まれています）。

---

## サポート

問題が解決しない場合:
- [Resend ドキュメント](https://resend.com/docs)
- [Resend Discord](https://resend.com/discord)
- Claude Code に質問（このチャット）

---

以上でセットアップ完了です！
