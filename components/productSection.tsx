"use client";
import { Product } from "@/types";
import Image from "next/image";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function ProductSection({ product }: { product: Product }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const [sizeIndex, setSizeIndex] = useState(0);
  const [quantity, setQuantity] = useState(0);

  return (
    <>
      <div>
        <div className="product-path">
          <p className="text-gray-400 ml-6 w-3/4 capitalize">{`Product > ${product.gender} > ${product.category}`}</p>
        </div>
        <div className="product-details-container w-full my-auto mb-12 px-5 py-3 md:flex">
          <div className="images-container md:h-[calc(100vh-66px)] float-right md:w-1/2 flex item-center justify-center mb-3">
            <div className="small-image flex-col justify-center items-center px-1 w-1/4">
              {product.images.map((img, index) => {
                return (
                  <Image
                    key={index}
                    alt=""
                    className={
                      "rounded-xl h-1/6 flex-shrink-0 my-3 mx-auto " +
                      (index === imageIndex
                        ? "border-2 border-primary animate-pulse "
                        : " ")
                    }
                    src={img}
                    onMouseEnter={() => setImageIndex(index)}
                  />
                );
              })}
            </div>
            <div className="main-image flex flex-shrink-0  mb-5 w-3/4 ">
              <Image
                className="rounded-lg h-5/6 lg:h-4/6 md:h-4/6 xl:h-5/6 transition-all"
                src={product.images[imageIndex]}
                alt=""
              />
            </div>
          </div>

          <div className="details md:float-left md:w-1/2 px-6  text-primary">
            <div className="">
              <h1 className="text-2xl font-bold tracking-tight ">
                {product.name}
              </h1>
              <h1 className="font-bold mt-2 text-gray-400"> {product.brand}</h1>
              <div className="md:p-5">
                <div className="rating">
                  <div className="flex items-center space-x-1">
                    {/* <RatingStars rating={product.rating} /> */}
                  </div>
                </div>
                <div className="price my-5">
                  <h1 className="md:text-6xl text-3xl font-semibold tracking-tight flex items-center">
                    {product.price}$
                  </h1>
                </div>

                <div className="quantity flex my-4 flex-col">
                  <h3 className="mr-6 mb-3">Color </h3>
                  <div>
                    {product.colors.map((color, index) => {
                      return (
                        <Button
                          key={index}
                          className={
                            "rounded-full border-2 border-gray-500 w-10 h-10 mx-2 " +
                            (index === colorIndex
                              ? "border-yellow-light border-4 opacity-75"
                              : "")
                          }
                          value={color}
                          onClick={() => setColorIndex(index)}
                          style={{ backgroundColor: color }}
                        ></Button>
                      );
                    })}
                  </div>
                </div>
                <div className="quantity flex my-4 flex-col">
                  <h3 className="mr-6 mb-3">size </h3>
                  <div className="">
                    {product.sizes.map((size, index) => {
                      return (
                        <Button
                          key={index}
                          className={
                            "bg-secondary w-16 h-10 rounded mx-3 font-bold mb-3 " +
                            (index === sizeIndex
                              ? "border-primary border-2 opacity-75"
                              : "")
                          }
                          onClick={() => setSizeIndex(index)}
                          value={size}
                        >
                          {size}
                        </Button>
                      );
                    })}
                  </div>
                  <a
                    className="text-xs font-bold underline-offset-1 underline w-16"
                    href="#"
                  >
                    size chart
                  </a>
                </div>
                <div className="quantity flex my-8">
                  <h3 className="mr-6">Quantity</h3>
                  <Input
                    className="px-1 rounded text-primary border-2 border-primary w-12 text-center focus:outline-yellow-light"
                    type="number"
                    onChange={(e) => {
                      setQuantity(Number(e.target.value));
                    }}
                    value={quantity}
                    style={{ caretColor: "transparent" }}
                    min={1}
                  />
                </div>
                <div className="flex justify-start my-5">
                  <Button className="bg-primary text-secondary rounded-lg py-3 px-5 mr-3 w-2/3 flex justify-center items-center transition-transform hover:scale-95">
                    <div className="w-8 h-8 inline-block mr-2">
                      {/* <CartIcon color={"#f2f0ea"} /> */}
                    </div>
                    Add To Cart
                  </Button>

                  {/* <WishBtn product={product} iconSize={8} py={2} px={3} /> */}
                </div>
              </div>
              <div className="my-5">
                <h4 className="mb-2">Details </h4>
                <p className="text-gray-400 ml-6 w-3/4">
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-6">
        <div>
          <p className="text-gray-400 ml-6 w-3/4">More Like </p>
        </div>
      </div>
    </>
  );
}
