import React, { useState } from "react";
import { servicios, listaServicios } from "../datos.json";

export const Servicios = () => {
  const [selectedService, setSelectedService] = useState(servicios[0]);

  const handleClick = (id) => {
    const service = servicios.find((servicio) => servicio.id === id);
    setSelectedService(service);
  };

  return (
    <>
      <div className="flex gap-10 text-center items-end">
        {listaServicios.map((servicio) => (
          <div key={servicio.id} onClick={() => handleClick(servicio.id)}>
            <img
              className="p-5 border-2 rounded-xl border-black hover:border-red-600 cursor-pointer"
              src={`${servicio.srcImagen}`}
              alt={servicio.titulo}
            />
            <h4 className="mt-4">{servicio.titulo}</h4>
          </div>
        ))}
      </div>

      <div className="flex justify-around items-center mx-auto gap-32">
        <div className="flex flex-col gap-8">
          <h3 className="text-3xl text-red-600 font-bold">
            {selectedService.titulo}
          </h3>
          <p className="text-4xl">{selectedService.subtitulo}</p>
          <ul className="text-2xl list-disc pl-5 marker:text-red-600">
            {selectedService.lista.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <img
          className="w-1/3 rounded-full"
          src={selectedService.srcImagen}
          alt={selectedService.titulo}
        />
      </div>
    </>
  );
};
