
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

import { socialLinks } from "../../../data/navigation";

const socialIcons = {
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  Twitter: FaXTwitter,
  LinkedIn: FaLinkedinIn,
};

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      {socialLinks.map(({ label, href }) => {
        const Icon = socialIcons[label];

        return (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-neutral-600 transition-colors hover:text-black"
          >
            <Icon size={16} aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}
