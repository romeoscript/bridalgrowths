
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/Components/Nav";
import AOS from "aos";
import 'aos/dist/aos.css';
import { Suspense } from 'react'
import Loader from "@/Components/Loader";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Nav />
      <body className={inter.className}>
        <div className="center-max-width">
          <div className="content-container">
            <Suspense fallback={<Loader />}>
              {children}
            </Suspense>
          </div>
        </div>
      </body>
    </html>
  );
}
