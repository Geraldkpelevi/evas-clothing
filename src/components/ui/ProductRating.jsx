import { Star } from "lucide-react";

export default function ProductRating({ rating = 5, outOf = 5 }) {
  return (
    <div
      className="flex items-center gap-0.5 text-rating"
      role="img"
      aria-label={`${rating} out of ${outOf} stars`}
    >
      {Array.from({ length: outOf }, (_, index) => (
        <Star
          key={index}
          size={14}
          strokeWidth={1.5}
          fill={index < rating ? "currentColor" : "none"}
          className={index < rating ? "text-rating" : "text-gray-light"}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
