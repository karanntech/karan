"use client";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-neutral-900">
      <div className="max-w-3xl mx-auto px-6 py-32 text-center">
        <h3 className="text-4xl font-semibold mb-6">Let&apos;s work together.</h3>
        <p className="text-neutral-400 mb-10">
          Open to remote opportunities, collaborations, and building meaningful
          digital products.
        </p>
        <a
          href="mailto:your@email.com"
          className="inline-block px-10 py-4 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}