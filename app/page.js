import Hero from "@/Components/Hero";
import Partners from "@/Components/Partners";
import People from "@/Components/People";
import Result from "@/Components/Result";
import Service from "@/Components/Service";
import ParallaxCard from "@/Components/parrallax";
import Image from "next/image";


export default function Home() {
  return (
    <main >
      <Hero />
      <Partners />
      <Service />
      <Result />
      <section className="relative bg-white z-10">
        <h2 className="text-3xl font-bold p-[1rem] text-center text-gray-800 mb-4">Case Studies</h2>
        <p className="text-center mb-[3rem]">Here are the best features that makes margin the most powerful, fast and user-friendly platform.</p>
        <div className="grid md:grid-cols-3 gap-4 px-[2rem] pb-[3rem] ">
          <ParallaxCard />
          <ParallaxCard />
          <ParallaxCard />
        </div>
      </section>
      <People />
    </main>
  );
}
