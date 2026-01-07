export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919831654230"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        inline-flex items-center gap-3
        rounded-full bg-green-500 px-5 py-3
        font-bold text-white
        shadow-xl
        transition-all duration-300
        hover:-translate-y-1 hover:bg-green-400 hover:shadow-2xl
        focus:outline-none focus:ring-4 focus:ring-green-300
      "
    >
      {/* Icon */}
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
        </svg>
      </span>

      {/* Label — now visible on mobile */}
      <span>WhatsApp</span>
    </a>
  );
}
