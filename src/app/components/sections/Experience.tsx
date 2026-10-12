
import { experience } from "@/app/components/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-neutral-900">
      <div className="max-w-4xl mx-auto px-6 py-28 grid md:grid-cols-3 gap-12">
        <h3 className="text-xl font-semibold">Experience</h3>

        <div className="md:col-span-2 space-y-10">
          {experience.map((job) => (
            <article key={job.id}>
              <h4 className="text-lg font-medium">
                {job.role} — {job.company}
              </h4>

              <p className="text-neutral-500 text-sm mt-1 mb-1">
                {job.period} · {job.location}
              </p>

              <p className="text-neutral-400 leading-relaxed">
                {job.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}