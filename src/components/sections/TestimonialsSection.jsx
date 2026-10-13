import { Headset, Rocket, RotateCcw, Ship, TicketPercent } from "lucide-react";

import ServiceItem from "../cards/ServiceItem";
import TestimonialCard from "../cards/TestimonialCard";
import SummerPromotion from "../promotions/SummerPromotion";

const services = [
  {
    icon: Ship,
    title: "Worldwide Delivery",
    description: "For orders over $100",
  },
  {
    icon: Rocket,
    title: "Next Day Delivery",
    description: "UK orders only",
  },
  {
    icon: Headset,
    title: "Best Online Support",
    description: "Hours: 8 AM – 11 PM",
  },
  {
    icon: RotateCcw,
    title: "Return Policy",
    description: "Easy and free returns",
  },
  {
    icon: TicketPercent,
    title: "30% Money Back",
    description: "For orders over $100",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-8 sm:py-10 lg:py-14">
      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-6 sm:gap-8 lg:grid-cols-[minmax(0,1fr)_2.05fr_minmax(0,1fr)] lg:gap-8">
          <section className="flex min-w-0 flex-col">
            <h2 className="mb-4 border-b border-border pb-3 text-base font-bold text-ink sm:mb-6 sm:text-lg">
              Testimonial
            </h2>

            <div className="flex flex-1 items-center justify-center rounded-xl border border-border px-4 py-6 sm:px-8 sm:py-8">
              <TestimonialCard
                image="https://i.postimg.cc/g27jxrvV/testimonial-1.jpg"
                name="Alan Doe"
                role="CEO & Founder Invision"
                testimonial="We put our trust in Anon and they delivered, making sure our needs were met."
              />
            </div>
          </section>

          <SummerPromotion />

          <section className="flex min-w-0 flex-col">
            <h2 className="mb-4 border-b border-border pb-3 text-base font-bold text-ink sm:mb-6 sm:text-lg">
              Our Services
            </h2>

            <div className="flex flex-1 flex-col justify-center gap-3 rounded-xl border border-border px-4 py-5 sm:gap-4 sm:px-8 sm:py-7">
              {services.map((service) => (
                <ServiceItem key={service.title} {...service} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
