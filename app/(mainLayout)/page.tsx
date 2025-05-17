import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProductCard from "@/components/productCard";

export default function Home() {
  return (
    <div className="flex flex-col -mt-20">
      <main className="flex-1">
        <HeroSection />
        <ShopByCategory />
        <NewArrival />
        <Newsletter />
      </main>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative mask-b-from-70%">
      <div className="relative h-dvh w-full overflow-hidden">
        <Image
          src="/images/Hero.png"
          alt="Hero image of models wearing the latest fashion"
          className="object-cover object-center"
          priority
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/0" />
        <div className="absolute inset-0 flex flex-col justify-center container">
          <div className="max-w-xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Summer Collection 2025
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Discover the latest trends and elevate your style with our new
              arrivals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg">Shop Women</Button>
              <Button size="lg" variant="outline">
                Shop Men
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background-200">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Join Our Newsletter
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg max-w-[600px]">
            Subscribe to get special offers, free giveaways, and
            once-in-a-lifetime deals.
          </p>
        </div>
        <div className="mx-auto flex max-w-md flex-col gap-2">
          <div className="flex gap-2">
            <Input placeholder="Enter your email" type="email" />
            <Button type="submit">Subscribe</Button>
          </div>
          <p className="text-xs text-muted-foreground text-center">
            By subscribing you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
}

function NewArrival() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background-100">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            New Arrivals
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg max-w-[700px]">
            The latest additions to our collection
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Casual Linen Shirt",
              price: "$49.99",
              image: "/placeholder.svg?height=600&width=400",
            },
            {
              name: "Summer Dress",
              price: "$59.99",
              image: "/placeholder.svg?height=600&width=400",
            },
            {
              name: "Classic Denim Jacket",
              price: "$89.99",
              image: "/placeholder.svg?height=600&width=400",
            },
            {
              name: "Cotton T-Shirt",
              price: "$29.99",
              image: "/placeholder.svg?height=600&width=400",
            },
          ].map((product, index) => (
            <ProductCard key={index} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button variant="outline" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}

function ShopByCategory() {
  return (
    <section className="container py-12 md:py-16 lg:py-20 my-10">
      <div className="flex flex-col items-center justify-center text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Shop by Category
        </h2>
        <p className="mt-4 text-muted-foreground md:text-lg max-w-[700px]">
          Browse our curated collections and find your perfect style
        </p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(350px,100%),1fr))] gap-6">
        {[
          { name: "women", image: "/images/Hero.png" },
          { name: "men", image: "/images/men.png" },
        ].map((category) => (
          <Link
            key={category.name}
            href={`products/${category.name}`}
            className="group relative overflow-hidden rounded-lg"
          >
            <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
              <Image
                src={category.image}
                alt={`${category.name} category`}
                className="object-cover transition-transform duration-300 group-hover:scale-105 object-top"
                fill
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-xl font-semibold capitalize">
                  {category.name}
                </h3>
                <span className="mt-1 inline-flex items-center text-sm font-medium">
                  Shop now <ChevronRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
