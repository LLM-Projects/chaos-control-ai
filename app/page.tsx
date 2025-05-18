import Hero from "@/components/hero";
import WhatWeOffer from "@/components/what-we-offer";
// import TeamLead from "@/components/team-lead";
// import InThePress from "@/components/in-the-press";
import OurWorks from "@/components/our-works";
import Testimonials from "@/components/testimonials";
import Consultation from "@/components/consultation";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <WhatWeOffer />
      {/* <WhoWeWorkWith /> */}
      {/* <TeamLead />
      <InThePress /> */}
      <OurWorks />
      <Testimonials />
      <Consultation />
      <Contact />
    </main>
  );
}
