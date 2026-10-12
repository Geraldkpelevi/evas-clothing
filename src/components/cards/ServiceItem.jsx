
export default function ServiceItem({
  icon: Icon,
  title,
  description,
}) {
  return (
    <div className="flex items-center gap-4 py-4">
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center
          rounded-lg bg-amber-50 text-amber-600"
      >
        <Icon size={23} strokeWidth={1.7} aria-hidden="true" />
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-800">
          {title}
        </h3>

        <p className="mt-1 text-xs leading-5 text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
}
