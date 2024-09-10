import React from "react";

export const Servicios = () => {
  return (
    <>
      <div className="flex w-8/12 mx-auto gap-10 text-center items-end">
        <div>
          <img
            className="p-3 border-2 rounded-xl border-black hover:border-red-600"
            src="./images/alerta.png"
            alt=""
          />
          <h4 className="mt-4">Alerta</h4>
        </div>
        <div>
          <img
            className="p-3 border-2 rounded-xl border-black hover:border-red-600"
            src="./images/asistencia.png"
            alt=""
          />
          <h4 className="mt-4">Asistencia</h4>
        </div>
        <div>
          <img
            className="p-3 border-2 rounded-xl border-black hover:border-red-600"
            src="./images/chat.png"
            alt=""
          />
          <h4 className="mt-4">Tareas</h4>
        </div>
        <div>
          <img
            className="p-3 border-2 rounded-xl border-black hover:border-red-600"
            src="./images/mantenimiento.png"
            alt=""
          />
          <h4 className="mt-4">Mantenimiento</h4>
        </div>
        <div>
          <img
            className="p-3 border-2 rounded-xl border-black hover:border-red-600"
            src="./images/mapainciendios.png"
            alt=""
          />
          <h4 className="mt-4">Mapa</h4>
        </div>
        <div>
          <img
            className="p-3 border-2 rounded-xl border-black hover:border-red-600"
            src="./images/siniestros.png"
            alt=""
          />
          <h4 className="mt-4">Siniestros</h4>
        </div>
        <div>
          <img
            className="p-3 border-2 rounded-xl border-black hover:border-red-600"
            src="./images/checklist.png"
            alt=""
          />
          <h4 className="mt-4">Control Stock</h4>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center">
        <img src="./bombero.png" alt="" />
      </div>
    </>
  );
};
