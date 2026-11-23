import Image from "next/image";

export default function ProjectCard({
  index,
  title,
  description,
  image,
  year,
  stack,
}: Readonly<{
  index: number;
  title: string;
  description: string;
  image: string;
  year: string;
  stack: string[];
}>) {
  return (
    <article className="group flex flex-col gap-5">
      <div className="relative aspect-16/10 overflow-hidden rounded-md border border-line bg-surface">
        <Image
          src={image}
          alt={`Tampilan ${title}`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-top grayscale-35 transition duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
        />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-baseline justify-between font-mono text-xs text-faint">
          <span>{String(index).padStart(2, "0")}</span>
          <span>{year}</span>
        </div>
        <h3 className="font-display text-2xl font-semibold tracking-tight text-fg md:text-3xl">
          {title}
        </h3>
        <p className="max-w-md text-sm leading-relaxed text-dim">{description}</p>
        <ul className="mt-1 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-wider text-faint">
          {stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
