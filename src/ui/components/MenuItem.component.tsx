import React from 'react';


interface MenuItemcomponentsProps {
    href: string;
    text: string;
    svgIcon: JSX.Element;
    isActive: boolean;
  }

const MenuItemComponent: React.FC<MenuItemcomponentsProps> = ({
    href, text, svgIcon, isActive
 }) => {
  // Définir la classe dynamique selon si l'élément est actif ou non
  const borderClass = isActive ? 'border-l-[.3rem] border-[#F2901D]' : 'border-l-[.3rem] border-transparent';
  const textClass = isActive ? 'text-[#F2901D]' : 'text-white hover:text-[#F2901D]';

  return (
    <li className={`px-6 flex items-center mb-4 ${borderClass}`}>
      {/* SVG Icon */}
      {svgIcon}
      {/* Lien */}
      <a
        href={href}
        className={`text-lg py-3 font-bold block ml-3 ${textClass}`}
      >
        {text}
      </a>
    </li>
  );
};

export default MenuItemComponent;
