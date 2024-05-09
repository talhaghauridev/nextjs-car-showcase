import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from ".";

const Navbar = () => {
  return (
    <header className="w-full  absolute z-10" id="navbar">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        <Button variants={"outline"}>Sign in</Button>
      </nav>
    </header>
  );
};

export default Navbar;
