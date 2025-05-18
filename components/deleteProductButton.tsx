"use client";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";
import { deleteProduct } from "@/actions/products";

export default function DeleteProductButton({ id }: { id: string | number }) {
  const handleDelete = async () => {
    const res = deleteProduct(id);
    toast.promise(res);
    const { status, message } = await res;
    if (status === 200) {
      toast.success(message);
    } else {
      toast.error(message);
    }
  };
  return (
    <Button variant={"destructive"} size={"icon"} onClick={handleDelete}>
      <Trash className="h-4 w-4" />
    </Button>
  );
}
