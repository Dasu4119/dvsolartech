import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { usePageSEO } from '../hooks/usePageSEO';

export function ContactPage() {
  usePageSEO({
    title: 'Contact DV Solar Tech | Free Solar Consultation Andhra Pradesh',
    description: 'Get a free solar consultation and site survey from DV Solar Tech. Call +91 91829 28154, WhatsApp us, or fill out the form. We respond within 2 hours. Mon-Sat 9AM-7PM.',
    keywords: 'contact DV Solar Tech, solar consultation AP, free solar survey, solar installer phone number',
    canonical: '/contact',
  });
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Replace these with your actual EmailJS Service ID, Template ID, and Public Key
    // You can also use environment variables: import.meta.env.VITE_EMAILJS_SERVICE_ID, etc.
    const YOUR_SERVICE_ID = 'service_nd384sr';
    const YOUR_TEMPLATE_ID = 'template_fg8bobg';
    const YOUR_PUBLIC_KEY = '0ldxakPocLbI_Pic-';

    emailjs
      .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, formRef.current, {
        publicKey: YOUR_PUBLIC_KEY,
      })
      .then(
        () => {
          setSubmitStatus('success');
          setIsSubmitting(false);
          formRef.current?.reset();
        },
        (error) => {
          console.error('FAILED...', error.text);
          setSubmitStatus('error');
          setIsSubmitting(false);
        },
      );
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Header Banner */}
      <section className="relative bg-navy-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]">
          <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-brand-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-20 w-[300px] h-[300px] bg-accent-400 rounded-full blur-[80px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge bg-accent-500/15 text-accent-400 border-accent-500/25 mb-6">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-navy-300 max-w-2xl mx-auto leading-relaxed">
            Have questions about going solar? Get in touch with us for a free
            consultation and site visit.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-2xl font-extrabold text-navy-800 mb-3">
                  Get In Touch
                </h2>
                <p className="text-navy-500 leading-relaxed">
                  We are available Mon–Sat to answer your queries. Call us,
                  WhatsApp us, or visit our office.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="tel:+919182928154"
                  className="flex items-start p-5 bg-white rounded-2xl border border-gray-100/80 shadow-soft hover:shadow-soft-md hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <div className="bg-brand-50 p-3 rounded-xl mr-4 group-hover:bg-brand-500 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-brand-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="font-bold text-navy-800 text-sm">
                      Phone
                    </p>
                    <p className="text-navy-500 text-sm">+91 91829 28154</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/919182928154"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start p-5 bg-white rounded-2xl border border-gray-100/80 shadow-soft hover:shadow-soft-md hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <div className="bg-green-50 p-3 rounded-xl mr-4 group-hover:bg-[#25D366] transition-colors duration-300">
                    <MessageCircle className="w-5 h-5 text-[#25D366] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="font-bold text-navy-800 text-sm">
                      WhatsApp
                    </p>
                    <p className="text-navy-500 text-sm">Chat with us instantly</p>
                  </div>
                </a>

                <div className="flex items-start p-5 bg-white rounded-2xl border border-gray-100/80 shadow-soft">
                  <div className="bg-accent-50 p-3 rounded-xl mr-4">
                    <Mail className="w-5 h-5 text-accent-600" />
                  </div>
                  <div>
                    <p className="font-bold text-navy-800 text-sm">
                      Email
                    </p>
                    <a
                      href="mailto:info@dvsolartech.com"
                      className="text-navy-500 hover:text-brand-500 transition-colors text-sm"
                    >
                      info@dvsolartech.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start p-5 bg-white rounded-2xl border border-gray-100/80 shadow-soft">
                  <div className="bg-brand-50 p-3 rounded-xl mr-4">
                    <MapPin className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <p className="font-bold text-navy-800 text-sm">
                      Office Address
                    </p>
                    <p className="text-navy-500 text-sm leading-relaxed">
                      4-6 Near Old Police Station,
                      <br />
                      Edalapadu, Palnadu (D),
                      <br />
                      Andhra Pradesh
                    </p>
                  </div>
                </div>

                <div className="flex items-start p-5 bg-white rounded-2xl border border-gray-100/80 shadow-soft">
                  <div className="bg-accent-50 p-3 rounded-xl mr-4">
                    <Clock className="w-5 h-5 text-accent-600" />
                  </div>
                  <div>
                    <p className="font-bold text-navy-800 text-sm">
                      Business Hours
                    </p>
                    <p className="text-navy-500 text-sm">
                      Mon – Sat: 9:00 AM – 7:00 PM
                    </p>
                    <p className="text-navy-400 text-xs mt-0.5">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-soft-md border border-gray-100/80 p-8 md:p-12">
                <h2 className="text-2xl font-extrabold text-navy-800 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-navy-400 mb-10 text-sm">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>

                {submitStatus === 'success' ? (
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center animate-fade-in">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-800 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-navy-500 mb-6">
                      Thank you for contacting us. We will get back to you
                      shortly.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setSubmitStatus('idle')}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form
                    ref={formRef}
                    className="space-y-6"
                    onSubmit={sendEmail}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="user_name"
                          className="block text-sm font-semibold text-navy-700 mb-2.5"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="user_name"
                          id="user_name"
                          required
                          className="w-full px-5 py-3.5 bg-cream border border-gray-200 rounded-2xl focus:ring-2 focus:ring-brand-500/30 focus:border-brand-400 outline-none transition-all text-sm text-navy-700 placeholder:text-navy-300"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="user_phone"
                          className="block text-sm font-semibold text-navy-700 mb-2.5"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="user_phone"
                          id="user_phone"
                          required
                          className="w-full px-5 py-3.5 bg-cream border border-gray-200 rounded-2xl focus:ring-2 focus:ring-brand-500/30 focus:border-brand-400 outline-none transition-all text-sm text-navy-700 placeholder:text-navy-300"
                          placeholder="Your mobile number"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="user_email"
                        className="block text-sm font-semibold text-navy-700 mb-2.5"
                      >
                        Email Address{' '}
                        <span className="text-navy-300 font-normal">
                          (Optional)
                        </span>
                      </label>
                      <input
                        type="email"
                        name="user_email"
                        id="user_email"
                        className="w-full px-5 py-3.5 bg-cream border border-gray-200 rounded-2xl focus:ring-2 focus:ring-brand-500/30 focus:border-brand-400 outline-none transition-all text-sm text-navy-700 placeholder:text-navy-300"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-semibold text-navy-700 mb-2.5"
                      >
                        Interested In
                      </label>
                      <select
                        name="service"
                        id="service"
                        className="w-full px-5 py-3.5 bg-cream border border-gray-200 rounded-2xl focus:ring-2 focus:ring-brand-500/30 focus:border-brand-400 outline-none transition-all text-sm text-navy-700 appearance-none cursor-pointer"
                      >
                        <option>Residential Rooftop Solar</option>
                        <option>Commercial Solar System</option>
                        <option>Solar Water Pump</option>
                        <option>Maintenance / Service</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-navy-700 mb-2.5"
                      >
                        Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows={5}
                        required
                        className="w-full px-5 py-3.5 bg-cream border border-gray-200 rounded-2xl focus:ring-2 focus:ring-brand-500/30 focus:border-brand-400 outline-none transition-all text-sm resize-none text-navy-700 placeholder:text-navy-300"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    {submitStatus === 'error' && (
                      <div className="flex items-center text-red-600 bg-red-50 p-3 rounded-xl text-sm">
                        <AlertCircle className="w-4 h-4 mr-2" />
                        Something went wrong. Please try again or call us directly.
                      </div>
                    )}

                    <Button
                      variant="primary"
                      size="lg"
                      fullWidth
                      leftIcon={
                        isSubmitting ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <Send className="w-4 h-4" />
                        )
                      }
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>

                    <p className="text-xs text-navy-400 text-center">
                      By submitting this form, you agree to be contacted by the
                      DV Solar Tech team.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-16">
            <div className="bg-white rounded-3xl overflow-hidden shadow-soft-md border border-gray-100/80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.5!2d79.9!3d16.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDE4JzAwLjAiTiA3OcKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DV Solar Tech Location"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}