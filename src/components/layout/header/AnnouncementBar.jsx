import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { socialLinks } from "../../../data/navigation";

const socialIcons = {
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  Twitter: FaXTwitter,
  LinkedIn: FaLinkedinIn,
};

export default function AnnouncementBar() {
  return (
    <div className="border-b border-neutral-200 bg-neutral-50">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-4 py-2 text-xs sm:px-6 lg:flex-nowrap lg:justify-between lg:px-8">
        <div className="hidden items-center gap-3 lg:flex">
          {socialLinks.map(({ label, href }) => {
            const Icon = socialIcons[label];

            return (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-neutral-600 transition hover:text-black"
              >
                <Icon size={15} />
              </a>
            );
          })}
        </div>

        <p className="text-center text-neutral-700">
          <strong className="font-semibold text-red-600">
            Free Shipping
          </strong>{" "}
          This week on orders over $35
        </p>

        <div className="hidden items-center gap-2 lg:flex">
          <label>
            <span className="sr-only">Currency</span>
            <select
              name="currency"
              defaultValue="usd"
              className="cursor-pointer bg-transparent py-1 outline-none"
            >
              <option value="usd">USD $</option>
              <option value="eur">EUR €</option>
              <option value="kwd">Kwd د. ك</option>
            </select>
          </label>

          <label>
            <span className="sr-only">Language</span>
            <select
              name="language"
              defaultValue="en-US"
              className="cursor-pointer bg-transparent py-1 outline-none"
            >
              <option value="en-US">English</option>
              <option value="es-ES">Español</option>
              <option value="fr">Français</option>
              <option value="fr">Arabic</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
}
