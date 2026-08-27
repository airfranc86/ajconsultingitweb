import Image from 'next/image';

export function Sobre() {
  return (
    <section id="sobre" className="border-t border-border/40 py-24">
      <div className="container">
        <div className="mx-auto grid max-w-4xl items-center gap-10 md:grid-cols-[minmax(0,220px)_1fr] md:gap-12">
          <div className="mx-auto w-40 shrink-0 overflow-hidden rounded-2xl border border-border/60 md:w-full">
            <Image
              src="/team/francisco.jpg"
              alt="Francisco, socio de A&J Consulting IT"
              width={440}
              height={565}
              className="h-full w-full object-cover"
              sizes="(min-width: 768px) 220px, 160px"
            />
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              No vendemos horas. Vendemos que dejes de perder tiempo.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Trabajamos con vos, no para una carpeta de venta. Entendemos tu proceso antes de
              tocar una línea de código, y cuando terminamos, el sistema queda funcionando — y
              es tuyo.
            </p>
            <div className="mt-6 inline-block rounded-md border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
              El código y los datos siempre son tuyos
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
