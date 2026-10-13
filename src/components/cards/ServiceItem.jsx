export default function ServiceItem({ icon: Icon, title, description }) {
  return (
    <div className="flex items-start gap-3 sm:gap-4">
      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center text-[#ff8798] sm:h-10 sm:w-10">
        <Icon size={30} strokeWidth={1.7} aria-hidden="true" />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="text-sm font-semibold leading-6 text-gray-dark sm:text-base">
          {title}
        </h3>

        <p className="mt-0.5 text-xs leading-5 text-muted sm:text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}
