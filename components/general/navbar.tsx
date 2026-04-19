"use client";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import ToggleTheme from "./toggleTheme";

export function Navbar() {
  return (
    <nav className="flex gap-3 items-center justify-between py-2">
      <Link href="/">
        <h1 className="text-3xl font-bold">
          Next<span className="text-blue-700">PRO</span>
        </h1>
      </Link>
      <div className="flex gap-6 justify-center">
        <Link className={buttonVariants({ variant: "ghost" })} href="/">
          Home
        </Link>
        <Link className={buttonVariants({ variant: "ghost" })} href="/blog">
          Blog
        </Link>
        <Link className={buttonVariants({ variant: "ghost" })} href="/create">
          Create
        </Link>
      </div>
      <div className="flex gap-3">
        <ToggleTheme />
        <Link className={buttonVariants()} href="/auth/login">
          Login
        </Link>
        <Link
          className={buttonVariants({ variant: "secondary" })}
          href="/auth/sign-up"
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
}
