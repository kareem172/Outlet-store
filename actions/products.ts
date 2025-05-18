"use server";
import { auth } from "@/auth";
import products from "@/db/products.json";
import { Product } from "@/types";
import fs from "fs";
export async function deleteProduct(id: string | number) {
  const session = await auth();
  if (!session) {
    return { message: "Unauthorized", status: 401 };
  }
  const productIndex = products.findIndex((product) => product.id === id);
  if (productIndex === -1) {
    return { message: "Product not found", status: 404 };
  }
  products.splice(productIndex, 1);
  fs.writeFileSync("db/products.json", JSON.stringify(products, null, 2));
  return { products, status: 200, message: "Product deleted successfully" };
}

export async function addProduct(product: Product) {
  const session = await auth();
  if (!session) {
    return { message: "Unauthorized", status: 401 };
  }
  products.push({
    ...product,
    sizes: product.sizes.map(size => size.toString())
  });
  fs.writeFileSync("db/products.json", JSON.stringify(products, null, 2));
  return { products, status: 200, message: "Product added successfully" };
}
