"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute flex w-full justify-center px-4 py-4 text-white sm:px-20">
      <div className="animate-slide-down 3xl:text-sm flex w-full place-items-center justify-between rounded-full bg-[#23D1AE] px-5 py-2 text-xs shadow-lg">
        <div className="flex place-items-center gap-2">
          <Image
            src="/kudungga.png"
            width={30}
            height={30}
            alt="PT Kudungga Teknologi Indonesia"
          />
          <h1 className="font-bold">
            PT Kudungga Teknologi <br />
            Indonesia
          </h1>
        </div>

        <nav className="mr-12 xl:mr-42 hidden h-full place-items-center gap-10 lg:flex">
          <Link
            href="#hero"
            className="relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:mb-2 hover:scale-110 hover:after:scale-x-100"
          >
            Home
          </Link>
          <Link href="#" className="relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:mb-2 hover:scale-110 hover:after:scale-x-100">Services</Link>
          <Link href="#">Partners</Link>
          <Link href="#">About Us</Link>
        </nav>

        <div className="flex gap-2">
          <button
            onClick={() => setOpen(!open)}
            className="relative flex rounded-full place-items-center bg-white px-7 py-1 text-[#23D1AE] lg:hidden"
          >
            <p>Menu</p>
            <Image
              src="/hamburger.svg"
              width={30}
              height={30}
              alt="Contact Us"
              className="ml-2 h-4 w-4 fill-[#23D1AE]"
            />
          </button>
          <Link
            href="#"
            className="hidden place-items-center rounded-full bg-white px-5 py-2 font-medium text-[#23D1AE] sm:flex"
          >
            <p>Contact</p>
            <Image
              src="/contact.svg"
              width={30}
              height={30}
              alt="Contact Us"
              className="ml-2 h-4 w-4"
            />
          </Link>
        </div>

        <div className="absolute">
          {open && <div className="translate-y-1.5 bg-amber-300 px-10">1</div>}
        </div>
      </div>
    </div>
  );
}
