import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/Components/Nav";
import AOS from "aos";
import 'aos/dist/aos.css';
import { Suspense } from 'react';
import Loader from "@/Components/Loader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bridal Growth - Your Premier Bridal Experience",
  description: "Discover the ultimate bridal experience with Bridal Growth. From wedding planning tips to the latest bridal fashion trends, we provide everything you need to make your special day unforgettable. Join our community for exclusive insights and inspiration.",
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
