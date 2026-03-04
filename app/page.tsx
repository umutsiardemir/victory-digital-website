import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsChips from "@/components/StatsChips";
import ServicesRailSection from "@/components/sections/services-rail-section";
import Eligibility from "@/components/Eligibility";
import Process from "@/components/Process";
import ScenarioCards from "@/components/ScenarioCards";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen text-zinc-100" style={{ overflowX: "hidden" }}>
      <Navbar />
      <main className="mx-auto d-flex flex-column gap-10 gap-md-20 px-3 px-sm-4 pb-4 pt-3 max-w-6xl" style={{ paddingTop: '2rem' }}>
        <section id="hero" className="pt-3 pt-md-4">
          <Hero />
          <div className="mt-4">
            <StatsChips />
          </div>
        </section>

        <ServicesRailSection />
        <Eligibility />
        <Process />
        <ScenarioCards />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
