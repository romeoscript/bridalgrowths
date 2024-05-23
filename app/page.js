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
      <div className="grid grid-cols-3 gap-4 p-[2rem] relative bg-white z-10">
        <ParallaxCard />
        <ParallaxCard />
        <ParallaxCard />
      </div>
      <People />
    </main>
  );
}
