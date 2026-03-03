import { Hero, ServiceCards } from "@/components";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ServiceCards />
    </div>
  );
}
