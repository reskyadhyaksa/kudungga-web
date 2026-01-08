import Image from "next/image";
import HeroSection from "./components/sections/hero";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <img src="/tesback.jpg" className="absolute inset-0 w-full h-full object-cover -z-10"/>
      <HeroSection/>
    </div>
  );
}
