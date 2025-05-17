import { NextRequest, NextResponse } from "next/server";
import products from "@/db/products.json";
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const product = products.find((product) => product.id === Number(id));
  return NextResponse.json(product);
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const product = products.find((product) => product.id === Number(id));
  if (!product) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }
  const data = await req.json();
  Object.assign(product, data);
  return NextResponse.json(product);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const productIndex = products.findIndex(
    (product) => product.id === Number(id)
  );
  if (productIndex === -1) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }
  products.splice(productIndex, 1);
  return NextResponse.json({ message: "Product deleted successfully" });
}
