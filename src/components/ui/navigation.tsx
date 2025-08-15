"use client"

import React, { useState, useRef, useEffect } from 'react';
import { PhoneIcon, Menu, ChevronDown } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

interface ServiceItem {
  label: string;
  href: string;
}

interface NavigationItem {
  label: string;
  href: string;
  onClick?: () => void;
  hasDropdown?: boolean;
  services?: ServiceItem[];
}

interface NavigationProps {
  logo: {
    icon?: React.ReactNode;
    text: string;
    href?: string;
    onClick?: () => void;
  };
  navItems: NavigationItem[];
  phone?: {
    number: string;
    display?: boolean;
  };
  variant?: 'fixed' | 'static' | 'transparent';
  background?: string;
  textColor?: string;
  hoverColor?: string;
  className?: string;
  showPhoneOnMobile?: boolean;
  customButton?: React.ReactNode;
}

export const Navigation: React.FC<NavigationProps> = ({
  logo = { text: "DHS Services", href: "/" },
  navItems = [],
  phone,
  variant = 'fixed',
  background = 'bg-white/95',
  textColor = 'text-gray-700',
  hoverColor = 'hover:text-orange-500',
  className = '',
  showPhoneOnMobile = true,
  customButton
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [currentServices, setCurrentServices] = useState<ServiceItem[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const getVariantClasses = () => {
    switch (variant) {
      case 'static':
        return 'relative';
      case 'transparent':
        return 'fixed top-0 w-full bg-transparent';
      default:
        return 'fixed top-0 w-full backdrop-blur-sm shadow-sm';
    }
  };

  const handleNavClick = (item: NavigationItem) => {
    if (item.onClick) {
      item.onClick();
    } else if (item.href.startsWith('#')) {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = item.href;
    }
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (index: number, event?: React.MouseEvent) => {
    event?.preventDefault();
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleLogoClick = () => {
    if (logo?.onClick) {
      logo.onClick();
    } else if (logo?.href) {
      if (logo.href.startsWith('#')) {
        const element = document.querySelector(logo.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.location.href = logo.href;
      }
    }
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleServiceClick = (serviceHref: string) => {
    window.location.href = serviceHref;
    setActiveDropdown(null);
    setIsMenuOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <nav className={`${getVariantClasses()} ${background} z-50 ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2 cursor-pointer">
              {logo?.icon && <div className="text-orange-500">{logo.icon}</div>}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8" ref={dropdownRef}>
              {navItems.map((item, index) => (
                <div key={index} className="relative flex">
                  {item.hasDropdown && item.services ? (
                    <div className="relative my-auto">
                      <button
                        onClick={(e) => handleDropdownToggle(index, e)}
                        onMouseEnter={() => setActiveDropdown(index)}
                        className={`${textColor} ${hoverColor} transition-colors cursor-pointer uppercase font-medium  flex items-center gap-1`}
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === index ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {/* Desktop Dropdown */}
                      {activeDropdown === index && (
                        <div 
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          {item.services.map((service, serviceIndex) => (
                            <a
                              key={serviceIndex}
                              href={service.href}
                              onClick={(e) => {
                                e.preventDefault();
                                handleServiceClick(service.href);
                              }}
                              className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                            >
                              {service.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item)}
                      className={`${textColor} ${hoverColor} transition-colors cursor-pointer uppercase font-medium my-auto`}
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
              
              {/* Company Logo/Name in Center */}
              <div onClick={handleLogoClick}>
                <span className="flex gap-2 text-md font-bold text-white hover:bg-orange-500 bg-orange-400 py-2 px-4 rounded-lg cursor-pointer">
                  <PhoneIcon className="my-auto" size={20} /> {logo?.text || "DHS Services"}
                </span>
              </div>
            </div>

            {/* Desktop Right Side */}
            <div className="hidden md:flex items-center space-x-4">
              {phone?.display && phone.number && (
                <div className="flex items-center space-x-2">
                  <PhoneIcon className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-900 font-medium">
                    {phone.number}
                  </span>
                </div>
              )}
              {customButton}
            </div>

            {/* Mobile Menu - Using Sheet */}
            <div className="md:hidden">
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <button
                    className="p-2"
                    aria-label="Toggle menu"
                  >
                    <Menu className="w-6 h-6 text-gray-600" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80 p-0">
                  <SheetHeader className="p-6 bg-orange-400 text-white">
                    <SheetTitle className="text-white text-left">Diverse Home Solution</SheetTitle>
                    <SheetDescription className="text-orange-100 text-left">
                    Tampa Bay's Experts for Interior and Exterior House Painting
                    </SheetDescription>
                  </SheetHeader>
                  
                  {/* Mobile Menu Content */}
                  <div className="p-6 space-y-4">
                    {navItems.map((item, index) => (
                      <div key={index}>
                        {item.hasDropdown && item.services ? (
                          <div className="space-y-2">
                            <div className="font-medium text-gray-900 py-2 border-b border-gray-200">
                              {item.label}
                            </div>
                            <div className="pl-4 space-y-1">
                              {item.services.map((service, serviceIndex) => (
                                <a
                                  key={serviceIndex}
                                  href={service.href}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleServiceClick(service.href);
                                  }}
                                  className="block py-2 text-gray-600 hover:text-orange-600 transition-colors"
                                >
                                  {service.label}
                                </a>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <button
                            onClick={() => handleNavClick(item)}
                            className={`w-full text-left py-3 ${textColor} ${hoverColor} transition-colors cursor-pointer flex items-center justify-between border-b border-gray-100 last:border-b-0`}
                          >
                            <span className="font-medium">{item.label}</span>
                          </button>
                        )}
                      </div>
                    ))}

                    {/* Mobile Company Name */}
                    <div className="pt-4 border-t border-gray-200">
                      <div onClick={handleLogoClick}>
                        <span className="flex gap-2 text-md font-bold text-white hover:bg-orange-500 bg-orange-400 py-3 px-4 rounded-lg cursor-pointer w-fit">
                          <PhoneIcon className="my-auto" size={20} /> {logo?.text || "DHS Services"}
                        </span>
                      </div>
                    </div>

                    {/* Mobile Phone & Custom Button */}
                    {(phone?.display && phone.number && showPhoneOnMobile) || customButton ? (
                      <div className="pt-4 border-t border-gray-200 space-y-4">
                        {phone?.display && phone.number && showPhoneOnMobile && (
                          <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                            <PhoneIcon className="w-5 h-5 text-blue-600" />
                            <span className="text-gray-900 font-medium">{phone.number}</span>
                          </div>
                        )}
                        {customButton && (
                          <div className="w-full">
                            {customButton}
                          </div>
                        )}
                      </div>
                    ) : null}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};


export default Navigation;

