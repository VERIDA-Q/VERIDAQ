import type { ReactNode } from "react";
import { Providers } from "@/components/portal/providers";

export default function PortalLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <Providers>{children}</Providers>;
}
