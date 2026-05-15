import { stack } from '@/data/content';

export function Stack() {
  return (
    <section
      aria-label="Stack técnico"
      className="border-t border-border/40 bg-card/30 py-12"
    >
      <div className="container">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Trabajamos con
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-2">
            {stack.map((tool) => (
              <li
                key={tool}
                className="rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs text-muted-foreground"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
