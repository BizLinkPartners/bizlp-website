import Layout from '@/components/Layout';
import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Layout title="お問い合わせ">
      <div className="container-responsive py-12">
        <h1 className="heading-2 mb-6">お問い合わせ</h1>
        {!submitted ? (
          <form
            className="max-w-xl space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div>
              <label className="block text-sm font-medium mb-1">お名前</label>
              <input className="w-full border rounded-md px-3 py-2" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">メールアドレス</label>
              <input type="email" className="w-full border rounded-md px-3 py-2" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">内容</label>
              <textarea className="w-full border rounded-md px-3 py-2 h-32" required />
            </div>
            <button className="inline-flex items-center px-5 py-2 rounded-md bg-brand-600 text-white hover:bg-brand-700">送信</button>
          </form>
        ) : (
          <div className="p-4 border rounded-md bg-green-50 text-green-700">送信ありがとうございます。担当者よりご連絡いたします。</div>
        )}
      </div>
    </Layout>
  );
}


