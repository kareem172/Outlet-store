import { redirect } from "next/navigation";
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

export default async function Page() {
  const res = await fetch("http://localhost:3000/api/products");
  if (!res.ok) {
    toast.error("Failed to fetch products");
    redirect("/");
  }
  const { products }: { products: Product[] } = await res.json();
  return (
    <Table>
      <TableCaption>A list of your Products.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Price</TableHead>
          <TableHead className="text-right">Brand</TableHead>
          <TableHead></TableHead>
          <TableHead></TableHead>
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
              <DeleteProductButton id={product.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
