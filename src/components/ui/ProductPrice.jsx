
export default function ProductPrice({
  price,
  originalPrice,
  className = "",
}) {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <p className="font-semibold text-gray-900">
        ${Number(price).toFixed(2)}
      </p>

      {originalPrice != null && (
        <del className="text-sm text-gray-400">
          ${Number(originalPrice).toFixed(2)}
        </del>
      )}
    </div>
  );
}
