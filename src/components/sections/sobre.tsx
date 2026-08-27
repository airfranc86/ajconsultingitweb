export function Sobre() {
  return (
    <section id="sobre" className="border-t border-border/40 py-24">
      {/* Foto corporativa/humana pendiente de aportar: agregar acá como <Image> cuando esté disponible. */}
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
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
    </section>
  );
}
