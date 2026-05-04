type ProjectCardProps = {
  id: string;
  title: string;
  description: string;
  stack: string;
  link: string;
};

export default function ProjectCard({
  id,
  title,
  description,
  stack,
  link,
}: ProjectCardProps) {
  return (
    <div className="grid md:grid-cols-4 gap-8 group">
      <p className="text-neutral-500 text-sm">{id}</p>

      <div className="md:col-span-3">
        <h4 className="text-2xl font-semibold mb-3">{title}</h4>
        <p className="text-neutral-400 leading-relaxed mb-4">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <p className="text-sm text-neutral-500">{stack}</p>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-400 hover:text-white transition duration-300"
          >
            View Project →
          </a>
        </div>
      </div>
    </div>
  );
}