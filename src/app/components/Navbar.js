import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="absolute flex w-full justify-center px-4 sm:px-20 py-4 text-white">
      <nav className="animate-slide-down 3xl:text-lg flex w-full place-items-center justify-between rounded-full bg-[#23D1AE] px-5 py-2 text-xs shadow-lg">
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
        <div className="mr-42 flex gap-10 h-full place-items-center">
          <Link
            href="#"
            className="relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 hover:scale-110 hover:mb-2"
          >
            Home
          </Link>
          <Link href="#">Services</Link>
          <Link href="#">Partners</Link>
          <Link href="#">About Us</Link>
        </div>
        <div>
          <Link
            href="#"
            className="flex place-items-center rounded-full bg-white px-5 py-2 font-medium text-[#23D1AE]"
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
      </nav>
    </div>
  );
}
