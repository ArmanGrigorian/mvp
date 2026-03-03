import { Hero, ServiceCards, Testimonials } from "@/components";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ServiceCards />
      <Testimonials />
    </div>
  );
}
