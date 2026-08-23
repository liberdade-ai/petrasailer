import type { ReactNode } from "react";
import BackToTop from "./BackToTop";

export default function WebsiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <BackToTop />
    </>
  );
}
