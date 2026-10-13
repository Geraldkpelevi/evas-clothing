import { Quote } from "lucide-react";

export default function TestimonialCard({ image, name, role, testimonial }) {
  return (
    <article className="flex w-full max-w-sm flex-col items-center text-center">
      <img
        src={image}
        alt={`Portrait of ${name}`}
        width="80"
        height="80"
        loading="lazy"
        className="mb-4 h-16 w-16 rounded-full object-cover sm:h-20 sm:w-20"
      />

      <h3 className="text-base font-bold uppercase tracking-wide text-gray-dark sm:text-lg">
        {name}
      </h3>

      <p className="mt-1 text-sm text-onyx sm:text-base">{role}</p>

      <Quote
        aria-hidden="true"
        className="my-3 h-7 w-7 fill-[#ff8798] text-[#ff8798] sm:my-4 sm:h-8 sm:w-8"
      />

      <p className="max-w-full text-sm leading-7 text-muted sm:text-base sm:leading-[1.7]">
        {testimonial}
      </p>
    </article>
  );
}
