type ProjectCardProps = {
  id: string;
  title: string;
  description: string;
  stack: string;
};

export default function ProjectCard({ id, title, description, stack }: ProjectCardProps) {
  return (
    <div className="grid md:grid-cols-4 gap-8">
      <p className="text-neutral-500 text-sm">{id}</p>
      <div className="md:col-span-3">
        <h4 className="text-2xl font-semibold mb-3">{title}</h4>
        <p className="text-neutral-400 leading-relaxed mb-4">{description}</p>
        <p className="text-sm text-neutral-500">{stack}</p>
      </div>
    </div>
  );
}