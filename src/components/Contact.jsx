import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const contactInfo = [
    {
      title: "Location",
      value: "Ariadaha, Dakshineswar",
      subtext: "West Bengal, India",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "Phone",
      value: "+91 98316 54230",
      subtext: "Mon – Sat, 9am – 7pm",
      href: "tel:+919831654230",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      title: "Email",
      value: "saji53392@gmail.com",
      subtext: "Send me an email anytime",
      href: "mailto:saji53392@gmail.com",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-brand-light py-24">
      {/* Background accents */}
      <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-orange-200/40 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-80 w-80 rounded-full bg-yellow-200/40 blur-3xl" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold tracking-wide text-brand-primary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand-primary" />
            GET IN TOUCH
          </div>

          <h2 className="mb-4 text-3xl font-extrabold text-brand-dark md:text-4xl lg:text-5xl">
            Ready to Start <span className="text-gradient">Learning?</span>
          </h2>

          <p className="mx-auto max-w-xl text-lg text-gray-500">
            Have questions or want to discuss your child’s learning needs? I’m
            here to help.
          </p>
        </div>

        {/* Main content */}
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
          {/* Info cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href || undefined}
                className={`group block rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  !info.href ? "pointer-events-none" : ""
                }`}
              >
                <div className="flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary text-white shadow-lg transition-transform group-hover:scale-105">
                    {info.icon}
                  </div>
                  <div>
                    <p className="mb-1 text-sm text-gray-500">{info.title}</p>
                    <p className="text-xl font-bold text-brand-dark group-hover:text-brand-primary transition-colors">
                      {info.value}
                    </p>
                    <p className="mt-1 text-sm text-gray-400">{info.subtext}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Quick contact */}
          <div className="relative flex flex-col justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-brand-primary to-brand-secondary p-10 text-white shadow-xl">
            <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-white/10" />
            <div className="absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-white/10" />

            <h4 className="relative z-10 mb-2 text-xl font-bold">
              Prefer Quick Contact?
            </h4>
            <p className="relative z-10 mb-8 text-white/80">
              Reach out directly via call or WhatsApp
            </p>

            <div className="relative z-10 flex flex-wrap gap-4">
              <a
                href="tel:+919831654230"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-bold text-brand-primary shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/919831654230"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-green-500 px-6 py-3 font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-green-400 hover:shadow-xl"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
