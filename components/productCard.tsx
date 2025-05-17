import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={"/product/" + product.id}
      className="pt-40 relative rounded-xl overflow-clip isolate group"
    >
      <Image src={product.images[0]} alt="name" fill className="object-cover" />
      <div className="relative z-10 p-5 bg-gradient-to-t from-background via-background/80 to-transparent">
        <div className="grid gap-3 sm:translate-y-[80%] group-hover:translate-y-0 group-focus-within:translate-y-0 transition-transform duration-500 max-w-full">
          <h1 className="relative font-bold text-shadow-2xs w-max mb-4 line-clamp-1 max-w-42">
            {product.name}
          </h1>
          <div className="flex justify-between items-start w-full">
            <span className="inline-block text-sm">{product.brand}</span>
            <span className="inline-block text-3xl font-bold text-primary/90">
              {product.price}$
            </span>
          </div>
          <div className="flex gap-3">
            <Button variant={"outline"} size={"sm"}>
              <Heart />
            </Button>
            <Button size={"sm"} className="flex-1">
              <ShoppingCart />
              <span>Add to cart</span>
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}
