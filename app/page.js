"use client";
import { useEffect } from "react";
import Hero from "@/Components/Hero";
import Partners from "@/Components/Partners";
import People from "@/Components/People";
import Result from "@/Components/Result";
import ParallaxCard from "@/Components/parrallax";
import Service from "@/Components/Service";
import AOS from 'aos';
import 'aos/dist/aos.css';




// Import assets
import { amazon, wallmart, google } from "@/public/Assets";
import Loader from "@/Components/Loader";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, [])
  return (

    <main>
     <div data-aos="fade-up">
     <Hero />
     </div>
      <Partners />
      <Service />
      <Result />
      <section className="relative bg-white z-10">
        <h2 className="text-3xl font-bold p-[1rem] text-center text-gray-800 mb-4">
          Case Studies
        </h2>
        <p className="text-center mb-[3rem] w-4/5 m-auto">
          Here are the best features that makes margin the most powerful, fast and user-friendly platform.
        </p>
        <div className="grid md:grid-cols-3 gap-4 md:px-[2rem] px-[1rem] pb-[3rem]">
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
          <ParallaxCard
            Image={wallmart.src}
            title="WALMART CORPORATION"
            text="Walmart Corporation was facing stiff competition in their industry and needed a way to stand out. They developed a
              comprehensive SEO and email marketing strategy that included targeted keyword research, technical SEO, and email
              campaign design. The result? A 30% increase in website traffic and a 25% increase in conversions within just 3 months!"
          />
          <ParallaxCard
            Image={google.src}
            title="GOOGLE LLC"
            text="Google LLC was looking to increase their market share and needed a way to attract new customers. They implemented a 
              strategic development plan that included a unique value proposition, a target audience analysis, and a comprehensive marketing"
          />
        </div>
      </section>
      <People />
    </main>

  );
}
