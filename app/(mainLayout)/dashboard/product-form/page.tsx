"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import type { Product, Size, TextSize, NumericSize } from "@/types";
import { toast } from "sonner";
import { addProduct } from "@/actions/products";

const sizeOptions: (NumericSize | TextSize)[] = [
  41,
  42,
  43,
  44,
  45,
  "xs",
  "s",
  "m",
  "l",
  "xl",
];

const productFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  price: z
    .number()
    .min(0, "Price must be non-negative")
    .refine((value) => !isNaN(value), {
      message: "Price must be a number",
    }),
  description: z.string().min(1, "Description is required"),
  category: z.string().min(1, "Category is required"),
  brand: z.string().min(1, "Brand is required"),
  gender: z.enum(["male", "female", "uni"]),
  images: z.string().nonempty("At least one image URL is required"),
  colors: z.string().nonempty("At least one color is required"),
  rating: z.number().min(0).max(5),
  sizes: z
    .array(z.union([z.string(), z.number()]))
    .nonempty("Select at least one size"),
});

type ProductFormValues = z.infer<typeof productFormSchema>;

export default function Page() {
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      name: "",
      price: 0,
      description: "",
      category: "",
      brand: "",
      gender: "uni",
      images: "",
      colors: "",
      rating: 0,
      sizes: [],
    },
  });

  const onSubmit = async (data: ProductFormValues) => {
    const toastId = toast.loading("Adding product...");
    const newProduct: Product = {
      id: Date.now(),
      name: data.name,
      price: data.price,
      description: data.description,
      category: data.category,
      brand: data.brand,
      gender: data.gender,
      images: data.images.split(",").map((s) => s.trim()),
      colors: data.colors.split(",").map((s) => s.trim()),
      rating: data.rating,
      sizes: data.sizes as Size[],
    };
    console.log(newProduct);
    await addProduct(newProduct);
    toast.success("Product added successfully", {
      id: toastId,
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="py-4 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Product Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="0"
                    value={field.value}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="brand"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Brand</FormLabel>
                <FormControl>
                  <Input placeholder="Brand" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Input placeholder="Category" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gender</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="uni">Unisex</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Images (comma separated URLs)</FormLabel>
                <FormControl>
                  <Input placeholder="http://... , http://..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="colors"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Colors (comma separated)</FormLabel>
                <FormControl>
                  <Input placeholder="red, blue, green" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rating (0-5)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  step="0.1"
                  min="0"
                  max="5"
                  placeholder="0"
                  value={field.value}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="sizes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sizes</FormLabel>
              <FormControl>
                <div className="grid grid-cols-3 gap-2">
                  {sizeOptions.map((size) => (
                    <label
                      key={size}
                      className="inline-flex items-center space-x-2"
                    >
                      <Checkbox
                        checked={field.value.includes(size)}
                        onCheckedChange={(checked) => {
                          const newSizes = checked
                            ? [...field.value, size]
                            : field.value.filter((s) => s !== size);
                          field.onChange(newSizes);
                        }}
                      />
                      <span>{size}</span>
                    </label>
                  ))}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col md:flex-row justify-end gap-2">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit">Add Product</Button>
        </div>
      </form>
    </Form>
  );
}
