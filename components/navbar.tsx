import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="">
      <Link href="/">
        <h1 className="text-3xl font-extrabold text-primary">Logo</h1>
      </Link>

      <ul>
        <li>
          <Link href={"/products"}>Products</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact us</Link>
        </li>
        <li>
          <Link href={"/about"}></Link>About us
        </li>
      </ul>
    </nav>
  );
}
