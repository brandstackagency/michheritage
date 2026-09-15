import { useState } from 'react';
import { WHATSAPP_LINK } from '@/mocks/fashionData';

const FORM_URL = 'https://readdy.ai/api/form/da9qqj9tacug2b80sueg';

const serviceOptions = [
  'Bespoke Asoebi & Custom Pieces',
  'Bridal & Wedding Ensembles',
  'Event & Occasion Dressing',
  'Virtual Consultation & Measurement',
  'Wardrobe Curation & Personal Styling',
  'Fabric & Colour Consultation',
];

export default function BookingForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    const honeypot = (form.elements.namedItem('website_alt') as HTMLInputElement | null)?.value.trim();
    if (honeypot) {
      setStatus('success');
      setErrorMessage('');
      form.reset();
      return;
    }

    const formData = new FormData(form);
    formData.delete('website_alt');

    setStatus('idle');
    setErrorMessage('');

    try {
      const res = await fetch(FORM_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      const responseText = await res.text();
      let parsed: { code?: string; meta?: { message?: string; detail?: string } } = {};
      try {
        parsed = JSON.parse(responseText);
      } catch {
        parsed = {};
      }

      const serverMessage = parsed?.meta?.message || parsed?.meta?.detail || responseText;

      if (res.ok && parsed?.code === 'OK') {
        setStatus('success');
        setErrorMessage('');
        form.reset();
      } else {
        setStatus('error');
        setErrorMessage(
          typeof serverMessage === 'string' && serverMessage && !serverMessage.toLowerCase().includes('spam')
            ? serverMessage
            : 'Something went wrong. Please try again or reach out on WhatsApp.'
        );
      }
    } catch {
      setStatus('error');
      setErrorMessage('Unable to submit right now. Please try again or reach out on WhatsApp.');
    }
  }

  return (
    <section id="book" className="bg-background-50 py-16 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div data-reveal>
            <p className="font-script text-primary-700 text-3xl mb-3">By Appointment Only</p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground-950 mb-4 leading-tight">
              Your bespoke journey begins here
            </h2>
            <p className="text-foreground-700 leading-relaxed mb-6">
              Every creation starts with a conversation. Fill out the form below and we will be in touch within 24 hours to confirm your appointment. You deserve to be seen, heard, and dressed exactly as you envisioned.
            </p>

            <ul className="space-y-4 text-sm text-foreground-700 mb-8">
              <li className="flex items-center gap-3">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-primary-100 text-primary-700">
                  <i className="ri-time-line" aria-hidden="true"></i>
                </span>
                <span>Response within 24 hours</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-primary-100 text-primary-700">
                  <i className="ri-global-line" aria-hidden="true"></i>
                </span>
                <span>In-person in Lagos or virtual, worldwide</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-primary-100 text-primary-700">
                  <i className="ri-scissors-line" aria-hidden="true"></i>
                </span>
                <span>Meticulously crafted, exclusively for you</span>
              </li>
            </ul>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer nofollow"
              className="inline-flex items-center gap-2 bg-primary-700 hover:bg-primary-800 text-background-50 font-medium px-6 py-3 rounded-full whitespace-nowrap cursor-pointer transition-colors"
            >
              <i className="ri-whatsapp-line" aria-hidden="true"></i>
              Enquire on WhatsApp
            </a>
          </div>

          <form
            id="booking-form"
            data-readdy-form
            data-reveal
            onSubmit={handleSubmit}
            className="bg-background-100 rounded-lg p-6 md:p-8 border border-background-200/70"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground-800 mb-1.5">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full text-sm rounded-md border border-background-300 bg-background-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground-800 mb-1.5">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full text-sm rounded-md border border-background-300 bg-background-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground-800 mb-1.5">Phone / WhatsApp</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="0810 005 9982"
                  className="w-full text-sm rounded-md border border-background-300 bg-background-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400"
                />
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-foreground-800 mb-1.5">Country</label>
                <input
                  id="country"
                  name="country"
                  type="text"
                  required
                  placeholder="e.g. Nigeria, UK, USA"
                  className="w-full text-sm rounded-md border border-background-300 bg-background-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-foreground-800 mb-1.5">Service</label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full text-sm rounded-md border border-background-300 bg-background-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400"
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="preferred_date" className="block text-sm font-medium text-foreground-800 mb-1.5">Preferred Date</label>
                <input
                  id="preferred_date"
                  name="preferred_date"
                  type="date"
                  className="w-full text-sm rounded-md border border-background-300 bg-background-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-foreground-800 mb-1.5">Tell us about your vision</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={500}
                  placeholder="What occasion, fabric preference, or design ideas do you have in mind?"
                  className="w-full text-sm rounded-md border border-background-300 bg-background-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 resize-none"
                ></textarea>
              </div>

              <input
                type="text"
                name="website_alt"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                readOnly
                className="website-alt-field"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-primary-700 hover:bg-primary-800 text-background-50 font-medium px-6 py-3.5 rounded-full whitespace-nowrap cursor-pointer transition-colors"
            >
              Request Your Appointment
            </button>

            {status === 'success' && (
              <p className="mt-4 text-sm text-primary-700 bg-primary-50 rounded-md px-4 py-3 text-center">
                Thank you. Your request has been received. We will be in touch within 24 hours to begin your bespoke journey.
              </p>
            )}
            {status === 'error' && (
              <p className="mt-4 text-sm text-foreground-700 bg-background-200 rounded-md px-4 py-3 text-center">
                {errorMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}