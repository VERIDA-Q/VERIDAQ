import type { ReactNode } from "react";
import { Providers } from "@/components/console/providers";

export default function ConsoleLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <Providers>{children}</Providers>;
}
