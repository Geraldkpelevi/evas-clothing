
import { Quote } from "lucide-react";

export default function TestimonialCard({
  image,
  name,
  role,
  testimonial,
}) {
  return (
    <article className="flex flex-col items-center text-center">
      <img
        src={image}
        alt={`Portrait of ${name}`}
        width="80"
        height="80"
        loading="lazy"
        className="mb-4 h-20 w-20 rounded-full object-cover"
      />

      <h3 className="text-base font-semibold text-gray-800">
        {name}
      </h3>

      <p className="mt-1 text-sm text-gray-500">
        {role}
      </p>

      <Quote
        aria-hidden="true"
        className="my-5 h-7 w-7 fill-amber-100 text-amber-600"
      />

      <p className="max-w-sm text-sm leading-7 text-gray-600">
        {testimonial}
      </p>
    </article>
  );
}
