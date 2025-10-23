import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';
import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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
                  
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn-primary"
                    >
                      Send Message
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
                      setFormData({ name: '', email: '', message: '' });
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


