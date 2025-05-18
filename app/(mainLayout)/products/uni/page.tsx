import ProductCard from "@/components/productCard";
import { Product } from "@/types";
import React from "react";

export default async function Page() {
  const res = await fetch(`http://localhost:3000/api/products?category=uni`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { products } = await res.json();
  return (
    <section className="container">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
        Browse Unisex Products
      </h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(250px,100%),1fr))] gap-6 my-10">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
