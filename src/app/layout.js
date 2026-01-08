import { Inter, Noto_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({
  subsets:["latin"],
  variable: "--font-inter"
})

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto"
})

export const metadata = {
  title: "PT Kudungga Teknologi Indonesia",
  description: "As Kaspersky Partner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${notoSans.variable} antialiased`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
