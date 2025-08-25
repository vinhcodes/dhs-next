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
      { label: "Pool Painting", href: "/pool-painting" },
      { label: "Fence Painting", href: "/fence-painting" },
      { label: "Garage Floor Painting", href: "/garage-floor-painting" }
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
          text: "DHS Services",
          href: "/",
        }}
        navItems={navItems}
        phone={
          {number: '7276145087'}
        }
      />
    </div>
  );
};

export default Header;
