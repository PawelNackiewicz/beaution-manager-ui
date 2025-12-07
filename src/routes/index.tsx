import { createFileRoute } from "@tanstack/react-router";
import { format } from "date-fns";
import { pl } from "date-fns/locale";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { PageHeader } from "@/components/layout/PageHeader";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const today = format(new Date(), "EEEE, d MMMM", { locale: pl });

  return (
    <DashboardLayout>
      <PageHeader
        title="Kalendarz wizyt"
        description={`${today} • Zarządzaj wizytami i harmonogramem`}
      />
    </DashboardLayout>
  );
}
