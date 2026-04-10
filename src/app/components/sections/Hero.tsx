"use client";

const focusAreas = [
  "UI Systems",
  "AI Dashboards",
  "Frontend Architecture",
  "UX Implementation",
];

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-44 pb-32 grid md:grid-cols-2 gap-16 items-center">
      <div>
        <p className="uppercase text-xs tracking-[0.3em] text-neutral-500 mb-6">
          Frontend Developer · UI Engineer
        </p>
        <h2 className="text-6xl font-bold leading-[1.05] mb-8">
          Crafting Digital
          <br />
          Products With
          <br />
          Precision.
        </h2>
        <p className="text-neutral-400 max-w-md leading-relaxed mb-10">
          I design and engineer modern web interfaces focused on usability,
          performance, and scalable frontend architecture.
        </p>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-7 py-3 bg-white text-black rounded-full font-medium hover:bg-neutral-200 transition"
          >
            Explore Work
          </a>
          <a
            href="https://drive.google.com/file/d/1UISMltVsRygV3cEYYE8mmy8YfxGb0WoJ/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="px-7 py-3 border border-neutral-700 rounded-full hover:border-neutral-400 transition"
          >
            Resume
          </a>
        </div>
      </div>

      <div className="border border-neutral-800 rounded-3xl p-10 bg-neutral-900">
        <p className="text-neutral-500 text-sm mb-6">Focus Areas</p>
        <ul className="space-y-4 text-xl">
          {focusAreas.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}