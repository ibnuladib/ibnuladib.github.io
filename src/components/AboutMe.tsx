import type { FavoriteCategory, FavoriteItem } from "../data/aboutMeData";

type AboutMeProps = {
  categories: FavoriteCategory[];
};

function FavoriteCard({ item }: { item: FavoriteItem }) {
  return (
    <article className="group min-w-0 font-mono">
      <div className="relative mb-3 aspect-[2/3] overflow-hidden border border-paper bg-paper shadow-[0_18px_40px_rgb(0_0_0/0.10)] transition-transform duration-200 group-hover:-translate-y-1">
        <div className="absolute inset-0 grid place-items-center bg-paper px-3 text-center">
          <span className="text-sm font-bold leading-tight text-chalk">{item.title}</span>
        </div>
        <img
          src={item.posterUrl}
          alt={`${item.title} poster`}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="relative h-full w-full object-cover opacity-95 transition duration-200 group-hover:opacity-100"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      </div>
      <div className="flex items-baseline gap-2">
        <h4 className="min-w-0 flex-1 truncate text-sm font-bold text-chalk">{item.title}</h4>
        <span className="text-xs text-accent">{item.year}</span>
      </div>
    </article>
  );
}

function FavoriteShelf({ category }: { category: FavoriteCategory }) {
  return (
    <section className="border-t border-paper py-6">
      <div className="mb-4 flex items-baseline gap-3">
        <h3 className="font-mono text-xl font-bold text-chalk">{category.title}</h3>
        <span className="font-mono text-sm text-graphite">{category.command}</span>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4">
        {category.items.map((item) => (
          <FavoriteCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

export default function AboutMe({ categories }: AboutMeProps) {
  return (
    <section aria-labelledby="about-heading" className="flex flex-col gap-2">
      <div className="mb-4 flex items-baseline gap-3">
        <h2 id="about-heading" className="font-mono text-2xl font-bold text-chalk">
          ~/about-me
        </h2>
        <span className="font-mono text-sm text-graphite">open favorites</span>
      </div>

      <div className="border-t border-paper py-6 font-mono text-graphite">
        <p className="max-w-prose font-sans leading-relaxed">
          <span className="mr-2 text-accent">-&gt;</span>
          a small shelf of things that shaped my taste, stole my weekends, or stayed in my head longer than expected.
        </p>
      </div>

      {categories.map((category) => (
        <FavoriteShelf key={category.id} category={category} />
      ))}
    </section>
  );
}
