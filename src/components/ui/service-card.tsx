"use client"

import React, { ReactNode } from 'react';
import { Home, Building, Brush, Palette, Phone, Mail, Star, Heart, Shield } from 'lucide-react';

interface ServiceCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  variant?: 'default' | 'outlined' | 'gradient' | 'minimal' | 'elevated';
  size?: 'sm' | 'md' | 'lg';
  iconColor?: string;
  backgroundColor?: string;
  textAlign?: 'left' | 'center' | 'right';
  hoverEffect?: boolean;
  clickable?: boolean;
  onClick?: () => void;
  badge?: string;
  footer?: ReactNode;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  variant = 'default',
  size = 'md',
  iconColor = 'text-blue-600',
  backgroundColor = 'bg-white',
  textAlign = 'left',
  hoverEffect = true,
  clickable = false,
  onClick,
  badge,
  footer,
  className = ''
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'p-4';
      case 'lg':
        return 'p-10';
      default:
        return 'p-6 md:p-8';
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'outlined':
        return 'bg-transparent border-2 border-gray-200 hover:border-blue-300';
      case 'gradient':
        return 'bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200';
      case 'minimal':
        return 'bg-transparent hover:bg-gray-50';
      case 'elevated':
        return `${backgroundColor} shadow-xl border border-gray-100`;
      default:
        return `${backgroundColor} shadow-lg hover:shadow-xl border border-gray-100`;
    }
  };

  const getTextAlignClass = () => {
    switch (textAlign) {
      case 'center':
        return 'text-center';
      case 'right':
        return 'text-right';
      default:
        return 'text-left';
    }
  };

  const getIconSize = () => {
    switch (size) {
      case 'sm':
        return 'w-6 h-6';
      case 'lg':
        return 'w-10 h-10';
      default:
        return 'w-8 h-8';
    }
  };

  const getTitleSize = () => {
    switch (size) {
      case 'sm':
        return 'text-lg';
      case 'lg':
        return 'text-2xl';
      default:
        return 'text-xl';
    }
  };

  const baseClasses = `
    rounded-xl transition-all duration-300 relative overflow-hidden group
    ${getSizeClasses()}
    ${getVariantClasses()}
    ${getTextAlignClass()}
    ${hoverEffect ? 'transform hover:-translate-y-2' : ''}
    ${clickable ? 'cursor-pointer hover:scale-105' : ''}
    ${className}
  `;

  const handleClick = () => {
    if (clickable && onClick) {
      onClick();
    }
  };

  return (
    <div className={baseClasses} onClick={handleClick}>
      {/* Badge */}
      {badge && (
        <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
          {badge}
        </div>
      )}

      {/* Icon */}
      {icon && (
        <div className={`${iconColor} mb-4 ${hoverEffect ? 'group-hover:scale-110 transition-transform' : ''} ${textAlign === 'center' ? 'flex justify-center' : textAlign === 'right' ? 'flex justify-end' : ''}`}>
          <div className={getIconSize()}>
            {icon}
          </div>
        </div>
      )}

      {/* Title */}
      <h3 className={`${getTitleSize()} font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors`}>
        {title}
      </h3>

      {/* Description */}
      <p className={`text-gray-600 leading-relaxed ${size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : 'text-base'}`}>
        {description}
      </p>

      {/* Footer */}
      {footer && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          {footer}
        </div>
      )}

      {/* Hover overlay for gradient effect */}
      {hoverEffect && variant === 'default' && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
      )}
    </div>
  );
};