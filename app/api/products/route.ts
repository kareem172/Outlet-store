import { NextRequest, NextResponse } from "next/server";
import products from "@/db/products.json";
export function GET(req: NextRequest) {
  const pageSize = 12;
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");
  const offset = page ? (Number(page) - 1) * pageSize : 0;
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  const filteredProducts = products
    .filter((product) => {
      if (category && product.category !== category) return false;
      if (search && !product.name.toLowerCase().includes(search.toLowerCase()))
        return false;
      return true;
    })
    .slice(offset, offset + pageSize);
  return NextResponse.json({
    products: filteredProducts,
    total: products.length,
  });
}

export async function POST(req: NextRequest) {
  const newProduct = await req.json();
  products.push(newProduct);
  return NextResponse.json(newProduct);
}
