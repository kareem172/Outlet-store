import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ReactNode } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main className="flex flex-col min-h-dvh relative">
      <Navbar />
      <section className="flex-1 mt-20">{children}</section>
      <Footer />
    </main>
  );
}
