import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

type ResponseData = {
  message: string;
  error?: string;
};

// Resendクライアントの初期化
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // POSTメソッドのみ許可
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, message }: ContactFormData = req.body;

    // バリデーション
    if (!name || !email || !message) {
      return res.status(400).json({
        message: 'All fields are required',
        error: '全ての項目を入力してください。'
      });
    }

    // メールアドレスの簡易バリデーション
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: 'Invalid email format',
        error: '有効なメールアドレスを入力してください。'
      });
    }

    // 開発環境ではコンソールにログ出力
    if (process.env.NODE_ENV === 'development') {
      console.log('=== Contact Form Submission ===');
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
      console.log('==============================');
    }

    // Resendを使ってメール送信
    try {
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
        to: process.env.CONTACT_RECIPIENT_EMAIL || '',
        replyTo: email, // 送信者のメールアドレスを返信先に設定
        subject: `【お問い合わせ】${name}様より`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #000; padding-bottom: 10px;">
              新しいお問い合わせ
            </h2>

            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;">
                <strong style="color: #666;">お名前:</strong><br>
                <span style="color: #000;">${name}</span>
              </p>

              <p style="margin: 10px 0;">
                <strong style="color: #666;">メールアドレス:</strong><br>
                <a href="mailto:${email}" style="color: #000;">${email}</a>
              </p>

              <p style="margin: 10px 0;">
                <strong style="color: #666;">メッセージ:</strong><br>
                <span style="color: #000; white-space: pre-wrap;">${message}</span>
              </p>
            </div>

            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">

            <p style="color: #999; font-size: 12px;">
              このメールは BizLP お問い合わせフォームから自動送信されました。
            </p>
          </div>
        `,
      });

      // 成功レスポンス
      return res.status(200).json({
        message: 'Contact form submitted successfully'
      });
    } catch (emailError) {
      console.error('Email sending error:', emailError);

      // メール送信に失敗した場合もエラーを返す
      return res.status(500).json({
        message: 'Failed to send email',
        error: 'メールの送信に失敗しました。しばらく経ってから再度お試しください。'
      });
    }

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({
      message: 'Internal server error',
      error: 'お問い合わせの送信中にエラーが発生しました。しばらく経ってから再度お試しください。'
    });
  }
}
