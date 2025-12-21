import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

// フォームデータの型定義
type ContactFormData = {
  name: string;
  email: string;
  message: string;
  website?: string; // honeypot フィールド
  privacyConsent?: boolean; // プライバシーポリシー同意
};

// レスポンスデータの型定義
type ResponseData = {
  ok: boolean;
  error?: string;
};

// バリデーション定数
const VALIDATION = {
  NAME_MIN: 1,
  NAME_MAX: 100,
  EMAIL_MAX: 254,
  MESSAGE_MIN: 1,
  MESSAGE_MAX: 5000,
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
} as const;

/**
 * お問い合わせフォーム送信API
 * Resend を使ってメール送信を行う
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // POSTメソッドのみ許可
  if (req.method !== 'POST') {
    return res.status(405).json({
      ok: false,
      error: 'Method not allowed'
    });
  }

  try {
    const { name, email, message, website, privacyConsent }: ContactFormData = req.body;

    // スパム対策：honeypot チェック
    // website フィールドに値が入っている場合はbotと判断
    if (website) {
      // スパムとして200を返す（攻撃者にエラーと悟られないため）
      return res.status(200).json({
        ok: true
      });
    }

    // プライバシーポリシー同意チェック
    if (privacyConsent !== true) {
      return res.status(400).json({
        ok: false,
        error: 'プライバシーポリシーへの同意が必要です。'
      });
    }

    // 必須項目チェック
    if (!name || !email || !message) {
      return res.status(400).json({
        ok: false,
        error: '全ての項目を入力してください。'
      });
    }

    // 型チェック（文字列であることを確認）
    if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
      return res.status(400).json({
        ok: false,
        error: '入力内容が正しくありません。'
      });
    }

    // 名前のバリデーション
    const trimmedName = name.trim();
    if (trimmedName.length < VALIDATION.NAME_MIN || trimmedName.length > VALIDATION.NAME_MAX) {
      return res.status(400).json({
        ok: false,
        error: `お名前は${VALIDATION.NAME_MIN}文字以上${VALIDATION.NAME_MAX}文字以内で入力してください。`
      });
    }

    // メールアドレスのバリデーション
    const trimmedEmail = email.trim().toLowerCase();
    if (!VALIDATION.EMAIL_REGEX.test(trimmedEmail) || trimmedEmail.length > VALIDATION.EMAIL_MAX) {
      return res.status(400).json({
        ok: false,
        error: '有効なメールアドレスを入力してください。'
      });
    }

    // メッセージのバリデーション
    const trimmedMessage = message.trim();
    if (trimmedMessage.length < VALIDATION.MESSAGE_MIN || trimmedMessage.length > VALIDATION.MESSAGE_MAX) {
      return res.status(400).json({
        ok: false,
        error: `メッセージは${VALIDATION.MESSAGE_MIN}文字以上${VALIDATION.MESSAGE_MAX}文字以内で入力してください。`
      });
    }

    // 環境変数チェック
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL;
    const fromEmail = process.env.RESEND_FROM_EMAIL;

    if (!resendApiKey || !recipientEmail || !fromEmail) {
      console.error('環境変数が設定されていません:', {
        hasApiKey: !!resendApiKey,
        hasRecipient: !!recipientEmail,
        hasFrom: !!fromEmail,
      });
      return res.status(500).json({
        ok: false,
        error: 'サーバー設定エラーが発生しました。管理者にお問い合わせください。'
      });
    }

    // リクエスト情報の取得
    const userAgent = req.headers['user-agent'] || 'Unknown';
    const ipAddress =
      (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
      (req.headers['x-real-ip'] as string) ||
      req.socket.remoteAddress ||
      'Unknown';
    const submittedAt = new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' });

    // 開発環境ではコンソールにログ出力
    if (process.env.NODE_ENV === 'development') {
      console.log('=== Contact Form Submission ===');
      console.log('Name:', trimmedName);
      console.log('Email:', trimmedEmail);
      console.log('Message:', trimmedMessage);
      console.log('IP:', ipAddress);
      console.log('User-Agent:', userAgent);
      console.log('==============================');
    }

    // メール本文（テキスト形式）
    const textContent = `新しいお問い合わせがありました。

━━━━━━━━━━━━━━━━━━━━━━

お名前: ${trimmedName}
メールアドレス: ${trimmedEmail}

メッセージ:
${trimmedMessage}

━━━━━━━━━━━━━━━━━━━━━━

送信日時: ${submittedAt}
IPアドレス: ${ipAddress}
User-Agent: ${userAgent}

━━━━━━━━━━━━━━━━━━━━━━

このメールは bizlp.co.jp のお問い合わせフォームから自動送信されました。
`;

    // メール本文（HTML形式）
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="ja">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Hiragino Sans', sans-serif;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">

          <h2 style="color: #000000; border-bottom: 2px solid #000000; padding-bottom: 12px; margin-bottom: 24px; font-weight: 400; font-size: 20px;">
            新しいお問い合わせ
          </h2>

          <div style="margin: 24px 0; background-color: #f9f9f9; padding: 20px; border-left: 3px solid #000000;">
            <p style="margin: 0 0 16px 0;">
              <strong style="color: #666666; font-size: 13px; font-weight: 600;">お名前</strong><br>
              <span style="color: #000000; font-size: 15px;">${trimmedName}</span>
            </p>

            <p style="margin: 0 0 16px 0;">
              <strong style="color: #666666; font-size: 13px; font-weight: 600;">メールアドレス</strong><br>
              <a href="mailto:${trimmedEmail}" style="color: #000000; font-size: 15px; text-decoration: underline;">${trimmedEmail}</a>
            </p>

            <p style="margin: 0;">
              <strong style="color: #666666; font-size: 13px; font-weight: 600;">メッセージ</strong><br>
              <span style="color: #000000; font-size: 15px; white-space: pre-wrap; display: block; margin-top: 8px;">${trimmedMessage}</span>
            </p>
          </div>

          <div style="margin: 24px 0; padding: 16px; background-color: #fafafa; border: 1px solid #e0e0e0;">
            <p style="margin: 0 0 8px 0; font-size: 13px; color: #666666;">
              <strong>送信日時:</strong> ${submittedAt}
            </p>
            <p style="margin: 0 0 8px 0; font-size: 13px; color: #666666;">
              <strong>IPアドレス:</strong> ${ipAddress}
            </p>
            <p style="margin: 0; font-size: 13px; color: #666666;">
              <strong>User-Agent:</strong> ${userAgent}
            </p>
          </div>

          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 24px 0;">

          <p style="color: #999999; font-size: 12px; margin: 0; text-align: center;">
            このメールは <strong>bizlp.co.jp</strong> のお問い合わせフォームから自動送信されました。
          </p>

        </div>
      </body>
      </html>
    `;

    // Resend クライアントの初期化
    const resend = new Resend(resendApiKey);

    // メール送信
    try {
      const { data, error } = await resend.emails.send({
        from: fromEmail,
        to: recipientEmail,
        replyTo: trimmedEmail, // 送信者のメールアドレスを返信先に設定
        subject: `[bizlp.co.jp] お問い合わせ: ${trimmedName}`,
        text: textContent,
        html: htmlContent,
      });

      if (error) {
        console.error('Resend エラー:', error);
        return res.status(500).json({
          ok: false,
          error: 'メールの送信に失敗しました。時間をおいて再度お試しください。'
        });
      }

      // 成功時のログ出力（本番環境でも最小限の情報を記録）
      console.log('お問い合わせメール送信成功:', {
        emailId: data?.id,
        recipient: recipientEmail,
        timestamp: submittedAt,
      });

      // 成功レスポンス
      return res.status(200).json({
        ok: true
      });

    } catch (emailError) {
      console.error('メール送信エラー:', emailError);
      return res.status(500).json({
        ok: false,
        error: 'メールの送信に失敗しました。時間をおいて再度お試しください。'
      });
    }

  } catch (error) {
    // 機密情報を含まないエラーログ
    console.error('お問い合わせフォームエラー:', error instanceof Error ? error.message : 'Unknown error');
    return res.status(500).json({
      ok: false,
      error: 'お問い合わせの送信中にエラーが発生しました。時間をおいて再度お試しください。'
    });
  }
}
