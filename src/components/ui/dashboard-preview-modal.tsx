'use client';

import { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { EtlDashboardDemo } from '@/components/ui/etl-dashboard-demo';

/**
 * Botón + modal lightbox con un dashboard financiero interactivo (datos de
 * ejemplo) como prueba visual del servicio. Pensado para usar dentro de la
 * card del 6° proyecto (Pipeline ETL Contable), que no expone datos reales
 * del cliente.
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
      <DialogContent className="max-h-[85vh] max-w-3xl overflow-y-auto p-0 sm:rounded-xl">
        <DialogTitle className="sr-only">
          Demo del dashboard ejecutivo Pipeline ETL Contable
        </DialogTitle>
        <DialogDescription className="sr-only">
          Dashboard financiero interactivo con datos de ejemplo: KPIs de
          ventas, utilidad, margen y EBIT, evolución mensual y distribución
          de gastos.
        </DialogDescription>
        <EtlDashboardDemo />
      </DialogContent>
    </Dialog>
  );
}
