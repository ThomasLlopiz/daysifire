import { useState } from "react";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full mx-auto md:w-4/4 lg:w-4/4 2xl:w-3/4 relative">
      <header className="text-white p-6 w-full mx-auto bg-red-900 bg-opacity-10 fixed  md:backdrop-blur-2xl md:rounded-b-3xl z-50 lg:flex lg:w-4/4 2xl:w-3/4 lg:mx-auto lg:justify-between">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#Inicio" className="text-3xl font-bold">
            DaisyFire
          </a>
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } w-full mt-4 lg:flex lg:space-x-6 lg:items-center lg:w-auto`}
        >
          <ul className="flex flex-col justify-around lg:flex-row lg:space-x-6 lg:gap-12 mr-6">
            <li>
              <a
                href="#"
                className="block py-2 hover:text-gray-300 whitespace-nowrap lg:py-0"
              >
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a
                href="#Servicios"
                className="block py-2 lg:py-0 hover:text-gray-300"
              >
                Servicios
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 lg:py-0 hover:text-gray-300">
                Contactos
              </a>
            </li>
          </ul>
          {/* <div className="flex flex-col mt-4 lg:mt-0 lg:flex-row lg:space-x-4 lg:items-center">
            <a
              href="#"
              className="bg-white text-blue-900 px-6 py-2 rounded-full text-center lg:rounded-xl whitespace-nowrap"
            >
              Registrate
            </a>
            <a
              href="#"
              className="flex items-center justify-center mt-2 px-4 py-2 rounded-full border-solid border border-gray-400 text-center xl:mt-0 xl:rounded-xl "
            >
              Ingresar
            </a>
          </div> */}
        </nav>
      </header>
    </nav>
  );
};
