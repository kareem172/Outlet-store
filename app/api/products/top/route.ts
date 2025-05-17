import { NextResponse } from "next/server";
import products from "@/db/products.json";

export async function GET() {
  const topProducts = products
    .slice()
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return NextResponse.json(topProducts);
}
