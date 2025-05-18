import React from "react";

export default function Loading() {
  return (
    <div>
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
        Loading...
      </h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(250px,100%),1fr))] gap-6 my-10">
        {Array.from({ length: 10 }, (_, index) => (
          <div
            key={index}
            className="animate-pulse bg-gray-200 h-64 rounded-lg"
          ></div>
        ))}
      </div>
    </div>
  );
}
