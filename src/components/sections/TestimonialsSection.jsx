
import {
  Ship,
  Rocket,
  Headset,
  RotateCcw,
  TicketPercent,
} from "lucide-react";

import TestimonialCard from "../cards/TestimonialCard";
import ServiceItem from "../cards/ServiceItem";
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
    <section className="py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-8
          lg:grid-cols-3 lg:gap-6">

          {/* Customer testimonial */}
          <section className="rounded-xl border border-gray-200 p-6 sm:p-8">
            <h2 className="mb-8 text-lg font-bold text-gray-900">
              Testimonial
            </h2>

            <TestimonialCard
              image="https://i.postimg.cc/g27jxrvV/testimonial-1.jpg"
              name="Alan Doe"
              role="CEO & Founder, Invision"
              testimonial="We put our trust in Anon and they delivered, making sure our needs were met."
            />
          </section>

          {/* Summer collection promotion */}
          <SummerPromotion />

          {/* Customer services */}
          <section className="rounded-xl border border-gray-200 p-6 sm:p-8">
            <h2 className="mb-5 text-lg font-bold text-gray-900">
              Our Services
            </h2>

            <div className="divide-y divide-gray-100">
              {services.map((service) => (
                <ServiceItem
                  key={service.title}
                  {...service}
                />
              ))}
            </div>
          </section>

        </div>
      </div>
    </section>
  );
}
