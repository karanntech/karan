
export default function About() {
  return (
    <section id="about" className="border-t border-neutral-900">
      <div className="max-w-4xl mx-auto px-6 py-28 grid md:grid-cols-3 gap-12">
        <h3 className="text-xl font-semibold">About</h3>

        <div className="md:col-span-2 space-y-5 text-neutral-400 leading-relaxed text-lg">
          <p>
            I&apos;m a full-stack developer focused on building practical,
            scalable web applications and AI-powered products. My experience
            spans React, Next.js, TypeScript, Node.js, and REST APIs, with
            hands-on work across both frontend interfaces and backend services.
          </p>

          <p>
            I&apos;ve built AI-powered recruiting workflows using the Gemini
            API, developed backend services for PDF generation, and created
            responsive e-commerce components for production platforms. I enjoy
            solving engineering problems, improving existing systems, and
            turning ideas into reliable software.
          </p>
        </div>
      </div>
    </section>
  );
}