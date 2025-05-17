import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Heart, ShoppingCart } from "lucide-react";

export default function ProductCard() {
  return (
    <Link
      href={"/"}
      className="pt-40 relative rounded-xl overflow-clip isolate group"
    >
      <Image src={"/images/men.png"} alt="name" fill className="object-cover" />
      <div className="relative z-10 p-5 bg-gradient-to-t from-background via-background/80 to-transparent">
        <div className="grid gap-3 translate-y-[80%] group-hover:translate-y-0 group-focus-within:translate-y-0 transition-transform duration-500 delay-300">
          <h1
            className="text-xl relative font-semibold text-shadow-2xs w-max mb-4
          after:content-[''] after:absolute after:w-[calc(100%+var(--spacing)*5)] 
          after:h-1 after:bg-primary after:-bottom-2 after:-left-[calc(var(--spacing)*5)] 
          after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-500
          after:origin-left"
          >
            Product Name
          </h1>
          <div className="flex justify-between items-start w-full">
            <span className="inline-block">Brand</span>
            <span className="inline-block text-3xl font-bold text-primary/90">
              23$
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
