import { experience } from "@/app/components/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-neutral-900">
      <div className="max-w-4xl mx-auto px-6 py-28 grid md:grid-cols-3 gap-12">
        <h3 className="text-xl font-semibold">Experience</h3>
        <div className="md:col-span-2">
          <h4 className="text-lg font-medium">
            {experience.role} — {experience.company}
          </h4>
          <p className="text-neutral-500 text-sm mb-4">{experience.period}</p>
          <p className="text-neutral-400 leading-relaxed">
            {experience.description}
          </p>
        </div>
      </div>
    </section>
  );
}