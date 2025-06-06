import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ThemeToggler } from "./themeToggler";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import GoogleButton from "./googleButton";
import { auth } from "@/auth";
import { logout } from "@/actions/auth";

export default function Navbar() {
  return (
    <nav className=" absolute top-0 z-50 w-full">
      <div className="container flex items-baseline gap-10">
        <Link href="/">
          <h1 className="text-3xl font-extrabold text-primary">Outlet</h1>
        </Link>
        <div className={"flex items-baseLine gap-3 flex-1 justify-end"}>
          <NavbarContent className="hidden md:flex" />
          <NavActions className="hidden md:flex" />
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
}

async function NavbarContent({ className }: { className?: string }) {
  const session = await auth();

  return (
    <ul
      className={cn(
        "flex flex-col md:flex-row items-center gap-3 flex-1 font-semibold",
        className
      )}
    >
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/products"}>Products</Link>
      </li>
      <li>
        <Link href={"/about"}>About us</Link>
      </li>
      {session && (
        <li>
          <Link href={"/dashboard"}>Dashboard</Link>
        </li>
      )}
    </ul>
  );
}
async function NavActions({ className }: { className?: string }) {
  const session = await auth();
  return (
    <div className={cn("flex text-foreground items-center gap-3", className)}>
      <ThemeToggler />
      {session ? (
        <Button variant={"outline"} onClick={logout}>
          Logout
        </Button>
      ) : (
        <GoogleButton />
      )}
    </div>
  );
}

function MobileNavbar() {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="outline">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-3xl font-black ">Outlet</SheetTitle>
        </SheetHeader>
        <NavbarContent />
        <SheetFooter>
          <SheetClose asChild>
            <NavActions className=" justify-between" />
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
