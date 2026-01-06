export default function Section({ id, title, children }) {
  return (
    <section id={id} className="py-20 px-5 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">
        {title}
      </h2>
      {children}
    </section>
  );
}
