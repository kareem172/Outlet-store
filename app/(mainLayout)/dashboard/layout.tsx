import { ReactNode } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="container">
      <h1 className="text-3xl font-extrabold text-primary mb-10">Dashboard</h1>
      <Tabs defaultValue="products" className="w-full">
        <TabsList className="w-full">
          <Link className="w-full inline-block *:w-full" href="products">
            <TabsTrigger value="products">Products</TabsTrigger>
          </Link>
          <Link className="w-full inline-block *:w-full" href="product-form">
            <TabsTrigger value="add">Add Product</TabsTrigger>
          </Link>
        </TabsList>
      </Tabs>
      <section className="my-5">{children}</section>
    </main>
  );
}
