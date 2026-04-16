import Link from "next/link";
import { buttonVariants } from "../ui/button";

export function Navbar() {
  return (
    <nav className="flex gap-3 items-center justify-around py-4">
      <Link href="/">
        <h1 className="text-3xl font-bold">
          Next <span className="text-blue-700">PRO</span>
        </h1>
      </Link>
      <div className="flex justify-center">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/create">Create blog</Link>
      </div>
      <div className="flex gap-2">
        <Link className={buttonVariants()} href="/login">
          Login
        </Link>
        <Link className={buttonVariants()} href="/register">
          Register
        </Link>
      </div>
    </nav>
  );
}
