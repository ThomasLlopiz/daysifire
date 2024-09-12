import { useState } from "react";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="z-50">
      <div className="flex justify-between items-center px-12 bg-red-900 bg-opacity-70 z-50 rounded-b-3xl">
        <img className="w-1/12" src="./logo.png" alt="" />
        <ul className="flex justify-between gap-6 text-2xl">
          <li>
            <a href="#" className="block hover:text-gray-600">
              Sobre Nosotros
            </a>
          </li>
          <li>
            <a href="#Servicios" className="block hover:text-gray-600">
              Servicios
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-gray-600">
              Contactos
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
