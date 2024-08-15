import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/services";
import Work from "@/components/Work";
import Reviews from "@/components/Reviews";
import Cta from "@/components/Cta";
import ScrollSection from "@/components/ScrollSection";

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Services/>
      <Work/>
      <ScrollSection/>
      <Reviews/>
      <Cta/>
    </main>
  );
}
