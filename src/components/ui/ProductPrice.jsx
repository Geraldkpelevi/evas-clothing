export default function ProductPrice({ price, originalPrice, className = "" }) {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <p className="font-semibold text-ink">${Number(price).toFixed(2)}</p>

      {originalPrice != null && (
        <del className="text-sm text-gray-medium">
          ${Number(originalPrice).toFixed(2)}
        </del>
      )}
    </div>
  );
}
