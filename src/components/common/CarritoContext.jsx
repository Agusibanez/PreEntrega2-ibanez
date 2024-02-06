// CarritoContext.js

import React, { createContext, useContext, useState } from "react";

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [cantidadEnCarrito] = useState(5); // Establecer el valor fijo para la prueba pero ya realizo el codigo para que se actualice si cambio este valor

  return (
    <CarritoContext.Provider value={{ cantidadEnCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => {
  return useContext(CarritoContext);
};
