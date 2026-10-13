import { ChevronDown, X } from "lucide-react";
import { useEffect, useState } from "react";
// import SocialLinks from "../../ui/SocialLinks";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { navigation, socialLinks } from "../../../data/navigation";

const socialIcons = {
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  Twitter: FaXTwitter,
  LinkedIn: FaLinkedinIn,
};

export default function MobileNavigation({ open, onClose }) {
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function toggleCategory(label) {
    setExpanded((current) => (current === label ? null : label));
  }

  return (
    <>
      {open && (
        <button
          type="button"
          aria-label="Close navigation backdrop"
          onClick={onClose}
          className="fixed inset-0 z-50 cursor-default bg-brand/50 lg:hidden"
        />
      )}

      <aside
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-y-0 left-0 z-[60] flex w-[min(320px,85vw)] flex-col overflow-y-auto bg-surface shadow-2xl transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="text-lg font-bold text-ink">Menu</h2>

          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="rounded-full p-2 transition hover:bg-brand-light"
          >
            <X size={21} />
          </button>
        </div>

        <nav className="flex-1 px-5 py-3">
          <ul className="divide-y divide-border">
            {navigation.map((item) => {
              const children = item.megaMenu
                ? item.megaMenu.map((group) => ({
                    label: group.title,
                    href: group.href,
                  }))
                : item.items;

              const isExpanded = expanded === item.label;

              return (
                <li key={item.label} className="py-1">
                  {children ? (
                    <>
                      <div className="flex items-center justify-between">
                        <a
                          href={item.href}
                          onClick={onClose}
                          className="py-3 text-sm font-medium text-ink"
                        >
                          {item.label}
                        </a>

                        <button
                          type="button"
                          aria-label={`${isExpanded ? "Collapse" : "Expand"} ${item.label}`}
                          aria-expanded={isExpanded}
                          onClick={() => toggleCategory(item.label)}
                          className="rounded-md p-2 hover:bg-brand-light"
                        >
                          <ChevronDown
                            size={17}
                            className={`transition-transform ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>

                      {isExpanded && (
                        <ul className="mb-2 ml-3 space-y-1 border-l border-border pl-4">
                          {children.map((child) => (
                            <li key={child.href}>
                              <a
                                href={child.href}
                                onClick={onClose}
                                className="block py-2 text-sm text-muted hover:text-brand"
                              >
                                {child.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      onClick={onClose}
                      className="block py-3 text-sm font-medium text-ink hover:text-brand"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-6 border-t border-border pt-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
              Preferences
            </p>

            <label className="mb-3 flex items-center justify-between gap-3 text-sm text-ink">
              Language
              <select
                defaultValue="en-US"
                className="max-w-32 rounded-md border border-border bg-surface p-2"
              >
                <option value="en-US">English</option>
                <option value="es-ES">Español</option>
                <option value="fr">Français</option>
              </select>
            </label>

            <label className="flex items-center justify-between gap-3 text-sm text-ink">
              Currency
              <select
                defaultValue="usd"
                className="max-w-32 rounded-md border border-border bg-surface p-2"
              >
                <option value="usd">USD $</option>
                <option value="eur">EUR €</option>
              </select>
            </label>
          </div>
        </nav>

        <div className="flex items-center gap-4 border-t border-border px-5 py-5">
          {socialLinks.map(({ label, href }) => {
            const Icon = socialIcons[label];

            return (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-muted hover:text-brand"
              >
                <Icon size={19} />
              </a>
            );
          })}
        </div>
      </aside>
    </>
  );
}
