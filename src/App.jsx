import { useState } from "react";
import "./App.css";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const items = [
    {
      title: "ASISTENCIA",
      description: "Cada bombero podrá registrar su entrada y salida del cuartel",
      imgSrc: "/bombero.png",
    },
    {
      title: "ENTRENAMIENTO",
      description: "Detalles sobre el entrenamiento de bomberos",
      imgSrc: "/bombero.png",
    },
    {
      title: "EQUIPAMIENTO",
      description: "Información sobre el equipamiento utilizado",
      imgSrc: "/bombero.png",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
    setDropdownOpen(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="bg-black text-white h-screen flex flex-col">
      <main className="flex-grow">
        <section className="relative flex flex-col items-center">
          <div className="relative w-full overflow-hidden">
            {/* Carrusel para escritorio */}
            <div
              className="hidden sm:flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {items.map((item, index) => (
                <div
                  key={index}
                  className="min-w-full flex justify-center items-center space-x-4 p-6"
                >
                  <div className="flex flex-col gap-4">
                    <div className="degradado w-full sm:w-44 h-32 bg-yellow-300 rounded-2xl p-4">
                      <h4 className="text-white text-center bg-black rounded-2xl mb-2">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm">{item.description}</p>
                    </div>
                  </div>
                  <img
                    className="h-32 w-32 sm:h-5/6 sm:w-2/12"
                    src={item.imgSrc}
                    alt=""
                  />
                </div>
              ))}
            </div>
            {/* Carrusel para móvil */}
            <div className="flex sm:hidden flex-col items-center space-y-4">
              <img
                className="h-32 w-32"
                src={items[currentIndex].imgSrc}
                alt=""
              />
              <div className="w-full px-4">
                <button
                  className="text-white text-center bg-yellow-300 rounded-2xl w-full flex items-center justify-between p-4"
                  onClick={toggleDropdown}
                >
                  <span>{items[currentIndex].title}</span>
                  <i
                    className={`fas ${
                      dropdownOpen ? "fa-chevron-up" : "fa-chevron-down"
                    }`}
                  ></i>
                </button>
                {dropdownOpen && (
                  <div className="text-xs sm:text-sm bg-yellow-300 p-4 mt-2 rounded-2xl">
                    {items[currentIndex].description}
                  </div>
                )}
              </div>
            </div>
            {/* Botones de navegación */}
            <div className="flex justify-between w-full px-4 mt-4">
              <button
                className="bg-gray-600 text-white p-2 rounded-lg"
                onClick={handlePrev}
              >
                &lt;
              </button>
              <button
                className="bg-gray-600 text-white p-2 rounded-lg"
                onClick={handleNext}
              >
                &gt;
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
