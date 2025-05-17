import Navbar from "@/components/navbar";
import { ReactNode } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main className="flex flex-col">
      <Navbar />
      <section className="flex-1">{children}</section>
    </main>
  );
}
