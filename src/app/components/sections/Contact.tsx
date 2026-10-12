
"use client";

const email = "karannzk09@gmail.com";

const subject = "Let's Work Together";

const body = `Hi Karan,

I came across your portfolio and would like to connect with you regarding a potential opportunity.

I'd love to discuss the details with you.

Looking forward to hearing from you.

Best regards,`;

const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  email
)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export default function Contact() {
  return (
    <section id="contact" className="border-t border-neutral-900">
      <div className="max-w-3xl mx-auto px-6 py-32 text-center">
        <h3 className="text-4xl font-semibold mb-6">
          Let&apos;s work together.
        </h3>

        <p className="text-neutral-400 mb-10">
          Open to remote opportunities, collaborations, and building meaningful
          digital products.
        </p>

        <a
          href={gmailUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}