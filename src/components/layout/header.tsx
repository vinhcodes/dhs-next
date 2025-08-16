import React from "react";
import { Navigation } from "../ui/navigation";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  { 
    label: "Services", 
    href: "/services",
    hasDropdown: true,
    services: [
      { label: "Interior Painting", href: "/interior-painting" },
      { label: "Exterior Painting", href: "/exterior-painting" },
      { label: "Cabinet Makeover", href: "/cabinet-makeover" },
      { label: "Gutters Cleaning", href: "/gutters-cleaning" },
      { label: "Window Washing", href: "/window-washing" },
      { label: "Pressure Washing", href: "/pressure-washing" }
    ]
  },
  { label: "Contact", href: "/contact" }
];

const Header = () => {
  return (
    <div>
      <Navigation
        logo={{
          icon: <Image src="/images/logo_06.png" alt="logo" width={140} height={140} />,
          text: "(727) 256-4467",
          href: "tel:7272564467",
        }}
        navItems={navItems}
        phone={
          {number: '3522169869'}
        }
      />
    </div>
  );
};

export default Header;
