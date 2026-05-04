'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

/**
 * Botón + modal lightbox que muestra el screenshot del dashboard ETL
 * Contable como prueba visual del servicio. Pensado para usar dentro
 * de la card del 6° proyecto (Pipeline ETL Contable).
 */
export function DashboardPreviewModal(): JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="mt-auto inline-flex items-center gap-1.5 self-start rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-sm font-medium text-primary transition-colors hover:border-primary/60 hover:bg-primary/10"
          aria-label="Ver demo del dashboard ejecutivo"
        >
          <Maximize2 className="h-3.5 w-3.5" />
          Ver dashboard demo
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-6xl overflow-hidden p-0 sm:rounded-xl">
        <DialogTitle className="sr-only">
          Demo del dashboard ejecutivo Pipeline ETL Contable
        </DialogTitle>
        <DialogDescription className="sr-only">
          Captura del panel de Estado financiero generado por el pipeline:
          KPIs de ventas, utilidad, margen y EBIT, con evolución mensual y
          distribución de gastos.
        </DialogDescription>
        <div className="relative h-[80vh] w-full">
          <Image
            src="/projects/etl-dashboard.png"
            alt="Dashboard de Estado financiero generado por el pipeline ETL contable: KPIs (ventas netas, utilidad bruta, margen, EBIT), evolución mensual de ventas/CMV/EBIT y distribución de gastos."
            fill
            sizes="(min-width: 1280px) 1100px, 95vw"
            className="object-contain"
            priority={open}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
