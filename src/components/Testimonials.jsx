import { useState } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Agnita Ma'am explains topics in such a simple way. My child's confidence in English has improved tremendously.",
      name: "Parent of Class 7 Student",
      rating: 5,
      avatar: "👩",
    },
    {
      quote: "Very caring and patient teacher. She takes extra time to clarify doubts and ensure complete understanding.",
      name: "Parent of Class 5 Student",
      rating: 5,
      avatar: "👨",
    },
    {
      quote: "The personalized attention my son receives has made all the difference. His grades have improved significantly.",
      name: "Parent of Class 8 Student",
      rating: 5,
      avatar: "👩‍🦱",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="py-24 bg-brand-light relative overflow-hidden" id="reviews">
      {/* Background */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-orange-200/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-200/40 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-brand-primary font-semibold text-xs mb-6 tracking-wide">
            <span className="w-2 h-2 rounded-full bg-brand-primary"></span>
            TESTIMONIALS
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-dark mb-4">
            What Parents <span className="text-gradient">Say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div 
              key={index} 
              className={`relative p-8 rounded-3xl transition-all duration-500 cursor-pointer ${
                activeIndex === index 
                  ? "bg-gradient-to-br from-brand-primary to-brand-secondary text-white shadow-2xl scale-105" 
                  : "bg-white text-brand-dark hover:shadow-xl card-hover"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {/* Glow for Active */}
              {activeIndex === index && (
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-3xl blur-xl opacity-40 -z-10"></div>
              )}
              
              {/* Quote Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                activeIndex === index ? "bg-white/20" : "bg-orange-100"
              }`}>
                <svg className={`w-6 h-6 ${activeIndex === index ? "text-white" : "text-brand-primary"}`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <svg key={i} className={`w-5 h-5 ${activeIndex === index ? "text-yellow-300" : "text-brand-secondary"}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className={`leading-relaxed mb-6 ${
                activeIndex === index ? "text-white/90" : "text-gray-600"
              }`}>
                "{item.quote}"
              </blockquote>

              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
                  activeIndex === index ? "bg-white/20" : "bg-orange-100"
                }`}>
                  {item.avatar}
                </div>
                <p className={`font-semibold ${activeIndex === index ? "text-white" : "text-brand-dark"}`}>
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index 
                  ? "bg-brand-primary w-8" 
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
