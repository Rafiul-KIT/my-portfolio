import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  image: StaticImageData;
};

export default function ProjectCard({ title, description, tags, href, image }: ProjectCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white shadow-lg shadow-slate-200/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-xl hover:shadow-indigo-500/15 active:scale-95 dark:border-white/10 dark:bg-slate-900/95 dark:shadow-black/25 dark:hover:border-cyan-400/30 dark:hover:shadow-cyan-500/10">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          placeholder="blur"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 767px) calc(100vw - 3rem), (max-width: 1023px) 45vw, (max-width: 1280px) 30vw, 380px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 dark:from-slate-950/80 via-slate-900/20 dark:via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="relative space-y-5 p-8 text-center">
        <h2 className="text-xl font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-cyan-300 transition-colors line-clamp-1">{title}</h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm line-clamp-2">{description}</p>
        <div className="flex flex-wrap justify-center gap-2">
          {tags.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-full bg-slate-50 dark:bg-white/5 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-white/10">
              {tag}
            </span>
          ))}
        </div>
        <div className="pt-2">
          <Link href={href} className="inline-flex min-h-[3rem] w-full items-center justify-center rounded-xl bg-indigo-600 dark:bg-gradient-to-r dark:from-cyan-500 dark:to-indigo-500 px-6 py-2 text-sm font-bold text-white transition-all hover:bg-indigo-700 dark:hover:brightness-110 hover:scale-[1.02] shadow-md shadow-indigo-100 dark:shadow-cyan-500/20 border-2 border-indigo-400 dark:border-transparent">
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
