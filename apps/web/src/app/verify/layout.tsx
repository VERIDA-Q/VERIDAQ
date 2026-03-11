import type { ReactNode } from "react";
import { Providers } from "@/components/verify/providers";

export default function VerifyLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <Providers>{children}</Providers>;
}
