import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';
import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    privacyConsent: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // プライバシーポリシー同意チェック
    if (!formData.privacyConsent) {
      setError('プライバシーポリシーへの同意が必要です。');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // レスポンスが存在し、JSONとしてパース可能か確認
      let data: any = null;
      try {
        // Content-Typeがapplication/jsonか確認
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          data = await response.json();
        } else {
          // JSON以外のレスポンスの場合
          const text = await response.text();
          console.error('Non-JSON response:', text);
        }
      } catch (jsonError) {
        console.error('JSON parse error:', jsonError);
        // JSONパースエラーの場合、レスポンスが空か不正な形式
        throw new Error('サーバーからの応答が正しくありません。時間をおいて再度お試しください。');
      }

      if (!response.ok) {
        // エラーレスポンスの場合、dataからエラーメッセージを取得
        throw new Error(data?.error || 'お問い合わせの送信に失敗しました。');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'エラーが発生しました。時間をおいて再度お試しください。');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setFormData({
      ...formData,
      [target.name]: value
    });
  };

  return (
    <Layout title="Contact | BizLP" description="Get in touch with us">
      <div className="min-h-screen bg-white">
        <div className="container-responsive py-24">
          <ScrollAnimation>
            <h1 className="heading-2 text-center mb-20 text-black">
              Contact
            </h1>
          </ScrollAnimation>
          
          <div className="max-w-2xl mx-auto">
            {!submitted ? (
              <ScrollAnimation delay={0.2}>
                {error && (
                  <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded text-red-600 text-sm">
                    {error}
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-12">
                  <div>
                    <label className="block small-text text-gray-500 mb-4">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block small-text text-gray-500 mb-4">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block small-text text-gray-500 mb-4">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-textarea"
                      placeholder="Your message"
                      rows={6}
                      required
                    />
                  </div>

                  {/* 個人情報の取扱いに関する説明 */}
                  <div className="bg-gray-50 p-6 rounded border border-gray-200">
                    <p className="text-sm md:text-base font-light leading-relaxed text-gray-700 mb-4">
                      当社は、お問い合わせ内容への回答およびご連絡のために、お名前・メールアドレス等の個人情報を利用いたします。詳細は
                      <Link href="/privacy" className="text-black underline hover:text-gray-600 transition-colors">
                        プライバシーポリシー
                      </Link>
                      をご確認ください。
                    </p>

                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        name="privacyConsent"
                        id="privacyConsent"
                        checked={formData.privacyConsent}
                        onChange={handleChange}
                        className="mt-1 mr-3 w-4 h-4 cursor-pointer"
                        required
                      />
                      <label htmlFor="privacyConsent" className="text-sm md:text-base font-light leading-relaxed text-gray-700 cursor-pointer">
                        プライバシーポリシーに同意します
                      </label>
                    </div>
                    <p className="text-xs md:text-sm font-light leading-relaxed text-gray-500 mt-2 ml-7">
                      利用者は、当社のプライバシーポリシーを確認のうえ、当社が問い合わせ内容への回答・連絡等の目的で個人情報を利用することに同意します。
                    </p>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn-primary"
                      disabled={loading || !formData.privacyConsent}
                    >
                      {loading ? '送信中...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </ScrollAnimation>
            ) : (
              <ScrollAnimation delay={0.2}>
                <div className="text-center">
                  <h2 className="heading-3 mb-8 text-black">Thank You</h2>
                  <p className="body-text text-gray-500 mb-12">
                    お問い合わせありがとうございます。<br />
                    担当者よりご連絡いたします。
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', message: '', privacyConsent: false });
                    }}
                    className="text-black border-b border-gray-300 pb-1 hover:border-black transition-colors font-light tracking-wide"
                  >
                    Send Another Message
                  </button>
                </div>
              </ScrollAnimation>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}


