import { ImageViewer } from "@/components/imageViewer";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";
import { Heart, ShoppingCart } from "lucide-react";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const res = await fetch(`http://localhost:3000/api/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const product: Product = await res.json();

  return (
    <main className="container grid grid-cols-2 gap-6 my-10">
      <ImageViewer images={product.images} alt={product.name} />
      <section className="flex flex-col gap-2">
        <span className="text-secondary font-bold capitalize">
          {product.gender}
        </span>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <span className="ml-auto">{product.brand}</span>
        <div>
          <h3 className="font-semibold">Overview</h3>
          <p className="text-foreground/80">{product.description}</p>
        </div>
        <div className="space-y-3">
          <h3 className="font-semibold">Colors</h3>
          <div className="flex gap-3 flex-wrap">
            {product.colors.map((color, index) => (
              <span
                key={color + index}
                className={`size-7 inline-block rounded-full ring ring-offset-foreground`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="font-semibold">Sizes</h3>
          <div className="flex gap-3 flex-wrap">
            {product.sizes.map((size, index) => (
              <span
                key={index}
                className={`text-sm rounded bg-background-200 p-2 aspect-square h-full flex justify-center items-center`}
              >
                {size}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-3 flex-1  items-end">
          <Button variant={"outline"} size={"lg"}>
            <Heart />
          </Button>
          <Button size={"lg"} className="flex-1">
            <ShoppingCart />
            <span>Add to cart</span>
          </Button>
        </div>
      </section>
    </main>
  );
}
