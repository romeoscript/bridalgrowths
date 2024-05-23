"use client";
import { useEffect, Suspense, lazy } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// Lazy load components
const Hero = lazy(() => import("@/Components/Hero"));
const Partners = lazy(() => import("@/Components/Partners"));
const People = lazy(() => import("@/Components/People"));
const Result = lazy(() => import("@/Components/Result"));
const ParallaxCard = lazy(() => import("@/Components/parrallax"));
const Service = lazy(() => import("@/Components/Service"));

// Import assets
import { amazon, wallmart, google } from "@/public/Assets";

export default function Home() {
  useEffect(() => {
    if (!Aos.initialized) {
      Aos.init({
        duration: 800,
        once: false,
      });
      Aos.initialized = true;
    }
  }, []);

  return (
    <main>
      <Suspense>
        <Hero />
      </Suspense>
      <Suspense>
        <Partners />
      </Suspense>
      <Suspense>
        <Service />
      </Suspense>
      <Suspense>
        <Result />
      </Suspense>
      <section className="relative bg-white z-10">
        <h2 className="text-3xl font-bold p-[1rem] text-center text-gray-800 mb-4">
          Case Studies
        </h2>
        <p className="text-center mb-[3rem] w-4/5 m-auto">
          Here are the best features that makes margin the most powerful, fast and user-friendly platform.
        </p>
        <div className="grid md:grid-cols-3 gap-4 md:px-[2rem] px-[1rem] pb-[3rem]">
          <Suspense>
            <ParallaxCard
              Image={amazon.src}
              title="AMAZON Inc."
              text="Amazon Inc. Was struggling to attract customers and increase revenue. During the dot-come boom of the 1990s, the
              company posted larger losses, financed by investors funds that came pouring in. but the mood of the market turned abruptly
              in 2000, catching many companies off guard. So, a big question, how did Amazon survive the burst? They implemented the
              search engine optimization and email marketing strategies, including keyword research, technical SEO, on and off-page
              optimization, content marketing strategy development, and email campaign design. The result? A 70% increase in website
              traffic and a 40% increase in sales within just 6 months!"
            />
          </Suspense>
          <Suspense>
            <ParallaxCard
              Image={wallmart.src}
              title="WALMART CORPORATION"
              text="Walmart Corporation was facing stiff competition in their industry and needed a way to stand out. They developed a
              comprehensive SEO and email marketing strategy that included targeted keyword research, technical SEO, and email
              campaign design. The result? A 30% increase in website traffic and a 25% increase in conversions within just 3 months!"
            />
          </Suspense>
          <Suspense>
            <ParallaxCard
              Image={google.src}
              title="GOOGLE LLC"
              text="Google LLC was looking to increase their market share and needed a way to attract new customers. They implemented a 
              strategic development plan that included a unique value proposition, a target audience analysis, and a comprehensive marketing"
            />
          </Suspense>
        </div>
      </section>
      <Suspense>
        <People />
      </Suspense>
    </main>
  );
}
