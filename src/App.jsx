import { useState } from "react";
import "./App.css";
import { Nav } from "./components/Nav";

function App() {
  const [currentIndex, setCurrentIndex] = useState(1); // Iniciar en el primer índice "visible"
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const items = [
    {
      title: "ASISTENCIA",
      descriptions: [
        "Cada bombero podrá registrar su entrada y salida del cuartel",
        "Otra descripción sobre asistencia",
        "Otra descripción sobre entrenamiento",
      ],
      imgSrc: "/bombero.png",
    },
    {
      title: "ENTRENAMIENTO",
      descriptions: [
        "Detalles sobre el entrenamiento de bomberos",
        "Otra descripción sobre entrenamiento",
        "Otra descripción sobre entrenamiento",
      ],
      imgSrc: "/bombero.png",
    },
    {
      title: "EQUIPAMIENTO",
      descriptions: [
        "Información sobre el equipamiento utilizado",
        "Otra descripción sobre equipamiento",
        "Otra descripción sobre entrenamiento",
      ],
      imgSrc: "/bombero.png",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 1 ? items.length : prevIndex - 1
    );
    setDropdownOpen(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length ? 1 : prevIndex + 1
    );
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <Nav></Nav>
      <div className="bg-black text-white h-screen flex flex-col items-center justify-center">
        <main className="flex-grow">
          <section className="relative flex flex-col items-center">
            <div className="relative w-full max-w-4xl overflow-hidden">
              {/* Carrusel para escritorio */}
              <div
                className="hidden sm:flex transition-transform duration-1000"
                style={{
                  transform: `translateX(-${(currentIndex - 1) * 100}%)`,
                }}
              >
                {[items[items.length - 1], ...items, items[0]].map(
                  (item, index) => (
                    <div
                      key={index}
                      className="min-w-full flex items-center justify-center space-x-4 p-6"
                    >
                      <button
                        className="bg-gray-600 text-white p-2 rounded-lg hidden sm:block"
                        onClick={handlePrev}
                      >
                        &lt;
                      </button>
                      <div className="flex flex-col gap-4">
                        <div className="degradado w-full sm:w-44 h-32 bg-yellow-300 rounded-2xl p-4">
                          <h4 className="text-white text-center bg-black rounded-2xl mb-2">
                            {item.title}
                          </h4>
                          <p className="text-xs sm:text-sm">
                            {item.descriptions[0]}{" "}
                            {/* Mostrar la primera descripción */}
                          </p>
                        </div>
                      </div>
                      <img
                        className="h-32 w-32 sm:h-5/6 sm:w-4/12"
                        src={item.imgSrc}
                        alt={item.title}
                      />
                      <div className="flex flex-col gap-4">
                        {item.descriptions
                          .slice(1)
                          .map((description, descIndex) => (
                            <div
                              key={descIndex}
                              className="degradado w-full sm:w-44 h-32 bg-yellow-300 rounded-2xl p-4"
                            >
                              <h4 className="text-white text-center bg-black rounded-2xl mb-2">
                                {item.title}
                              </h4>
                              <p className="text-xs sm:text-sm">
                                {description}
                              </p>
                            </div>
                          ))}
                      </div>
                      <button
                        className="bg-gray-600 text-white p-2 rounded-lg hidden sm:block"
                        onClick={handleNext}
                      >
                        &gt;
                      </button>
                    </div>
                  )
                )}
              </div>
              {/* Carrusel para móvil */}
              <div className="sm:hidden flex flex-col items-center space-y-4 justify-center">
                <div className="flex items-center space-x-4 justify-center">
                  <button
                    className="bg-gray-600 text-white py-2 px-3 rounded-xl"
                    onClick={handlePrev}
                  >
                    &lt;
                  </button>
                  <img
                    className="h-3/4 w-2/4 mx-auto"
                    src={items[currentIndex - 1].imgSrc}
                    alt={items[currentIndex - 1].title}
                  />
                  <button
                    className="bg-gray-600 text-white py-2 px-3 rounded-xl"
                    onClick={handleNext}
                  >
                    &gt;
                  </button>
                </div>
                <div className="w-full px-4">
                  <button
                    className="text-white font-bold text-center degradado rounded-2xl w-full flex items-center p-4 justify-center mx-auto "
                    onClick={toggleDropdown}
                  >
                    <span>{items[currentIndex - 1].title}</span>
                    <i
                      className={`fas ${
                        dropdownOpen ? "fa-chevron-up" : "fa-chevron-down"
                      }`}
                    ></i>
                  </button>

                  {dropdownOpen && (
                    <div className="degradado p-4 mt-2 rounded-2xl mx-auto text-black">
                      {items[currentIndex - 1].descriptions.map(
                        (description, index) => (
                          <div
                            key={index}
                            className="p-4 mb-2 rounded-2xl  mx-auto"
                          >
                            <p className="text-xs sm:text-sm">{description}</p>
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
