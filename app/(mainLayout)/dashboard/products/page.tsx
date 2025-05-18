"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Product } from "@/types";
import DeleteProductButton from "@/components/deleteProductButton";

export default function Page() {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();
  useEffect(() => {
    fetch("/api/products")
      .then((res) => {
        if (!res.ok) {
          toast.error("Failed to fetch products");
          router.push("/");
          return;
        }
        return res.json();
      })
      .then((data) => data?.products && setProducts(data.products))
      .catch(() => {
        toast.error("Failed to fetch products");
        router.push("/");
      });
  }, [router]);

  const handleDelete = (id: string | number) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <Table>
      <TableCaption>A list of your Products.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Price</TableHead>
          <TableHead className="text-right">Brand</TableHead>
          <TableHead colSpan={2}></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium">{product.name}</TableCell>
            <TableCell className="capitalize">{product.gender}</TableCell>
            <TableCell>{product.price}$</TableCell>
            <TableCell className="text-right">{product.brand}</TableCell>
            <TableCell className="text-right">
              <DeleteProductButton id={product.id} onDelete={handleDelete} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
