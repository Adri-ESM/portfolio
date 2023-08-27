import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "../src/components/navigation/navigation";
import Footer from "@/src/components/footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>portfolio</title>
      </head>
      <body className={inter.className}>
        <Navigation />
        <Footer />
        {children}
      </body>
    </html>
  );
}
