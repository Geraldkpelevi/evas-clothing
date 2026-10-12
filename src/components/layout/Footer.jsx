
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const brandCategories = [
  {
    title: "Fashion",
    links: [
      "T-Shirt",
      "Shirts",
      "Shorts & Jeans",
      "Jacket",
      "Dress & Frock",
      "Innerwear",
      "Hosiery",
    ],
  },
  {
    title: "Footwear",
    links: [
      "Sport",
      "Formal",
      "Boots",
      "Casual",
      "Cowboy Shoes",
      "Safety Shoes",
      "Party Wear Shoes",
      "Branded",
      "Firstcopy",
      "Long Shoes",
    ],
  },
  {
    title: "Jewellery",
    links: [
      "Necklace",
      "Earrings",
      "Couple Rings",
      "Pendant",
      "Crystal",
      "Bangles",
      "Bracelets",
      "Nosepin",
      "Chain",
    ],
  },
  {
    title: "Cosmetics",
    links: [
      "Shampoo",
      "Bodywash",
      "Facewash",
      "Makeup Kit",
      "Liner",
      "Lipstick",
      "Perfume",
      "Body Soap",
      "Scrub",
      "Hair Gel",
      "Hair Colors",
      "Hair Dye",
      "Sunscreen",
      "Skin Lotion",
    ],
  },
];

const footerNavigation = [
  {
    title: "Popular Categories",
    links: [
      "Fashion",
      "Electronic",
      "Cosmetic",
      "Health",
      "Watches",
    ],
  },
  {
    title: "Products",
    links: [
      "Fashion",
      "Electronic",
      "Cosmetic",
      "Health",
      "Watches",
    ],
  },
  {
    title: "Our Company",
    links: [
      "Delivery",
      "Legal Notice",
      "Terms and Conditions",
      "About Us",
      "Secure Payment",
    ],
  },
  {
    title: "Services",
    links: [
      "Prices Drop",
      "New Products",
      "Best Sales",
      "Contact Us",
      "Sitemap",
    ],
  },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    Icon: FaFacebookF,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/",
    Icon: FaTwitter,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    Icon: FaLinkedinIn,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    Icon: FaInstagram,
  },
];

function FooterLink({ children, href = "#" }) {
  return (
    <a
      href={href}
      className="text-sm text-gray-400 transition-colors duration-200 hover:text-orange-500"
    >
      {children}
    </a>
  );
}

function BrandDirectory() {
  return (
    <section className="border-b border-gray-700 bg-gray-900 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 text-lg font-semibold text-white">
          Brand Directory
        </h2>

        <div className="space-y-5">
          {brandCategories.map((category) => (
            <div
              key={category.title}
              className="flex flex-col gap-2 sm:flex-row sm:items-start"
            >
              <h3 className="shrink-0 text-sm font-semibold text-gray-200">
                {category.title}:
              </h3>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                {category.links.map((link) => (
                  <FooterLink key={link}>
                    {link}
                  </FooterLink>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FooterNavigation() {
  return (
    <div className="bg-gray-950 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        {footerNavigation.map((section) => (
          <nav
            key={section.title}
            aria-label={section.title}
          >
            <h2 className="mb-5 border-b border-gray-700 pb-3 text-sm font-bold uppercase tracking-wider text-white">
              {section.title}
            </h2>

            <ul className="space-y-3">
              {section.links.map((link) => (
                <li key={link}>
                  <FooterLink>{link}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <section aria-labelledby="footer-contact">
          <h2
            id="footer-contact"
            className="mb-5 border-b border-gray-700 pb-3 text-sm font-bold uppercase tracking-wider text-white"
          >
            Contact
          </h2>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin
                size={18}
                className="mt-1 shrink-0 text-orange-500"
                aria-hidden="true"
              />

              <address className="text-sm not-italic leading-6 text-gray-400">
                419 State 414 Rte Beaver Dams,
                New York (NY), 14812, USA
              </address>
            </li>

            <li className="flex items-center gap-3">
              <Phone
                size={18}
                className="shrink-0 text-orange-500"
                aria-hidden="true"
              />

              <a
                href="tel:+16079368058"
                className="text-sm text-gray-400 transition-colors hover:text-orange-500"
              >
                (607) 936-8058
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Mail
                size={18}
                className="shrink-0 text-orange-500"
                aria-hidden="true"
              />

              <a
                href="mailto:example@gmail.com"
                className="break-all text-sm text-gray-400 transition-colors hover:text-orange-500"
              >
                example@gmail.com
              </a>
            </li>
          </ul>
        </section>

        <section aria-labelledby="footer-social">
          <h2
            id="footer-social"
            className="mb-5 border-b border-gray-700 pb-3 text-sm font-bold uppercase tracking-wider text-white"
          >
            Follow Us
          </h2>

          <ul className="flex flex-wrap gap-3">
            {socialLinks.map(({ name, href, Icon }) => (
              <li key={name}>
                <a
                  href={href}
                  aria-label={name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-800 text-gray-300 transition-colors hover:bg-orange-500 hover:text-white"
                >
                  <Icon size={17} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

function FooterBottom() {
  return (
    <div className="border-t border-gray-700 bg-gray-950 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 sm:flex-row sm:justify-between">
        <img
          src="https://i.postimg.cc/43GKnVFF/payment.png"
          alt="Accepted payment methods"
          loading="lazy"
          className="h-auto max-w-full object-contain"
        />

        <p className="text-center text-sm text-gray-400">
          Copyright © {new Date().getFullYear()}{" "}
          <a
            href="/"
            className="font-semibold text-white transition-colors hover:text-orange-500"
          >
            Anon
          </a>
          . All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="font-sans">
      <BrandDirectory />
      <FooterNavigation />
      <FooterBottom />
    </footer>
  );
}
