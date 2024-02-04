// CarritoContext.js

import React, { createContext, useContext, useState } from 'react';

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [cantidadEnCarrito, setCantidadEnCarrito] = useState(5); // Establecer el valor fijo para la prueba pero ya realizo el codigo para que se actualice si cambio este valor

  const aumentarCantidad = () => {
    setCantidadEnCarrito(cantidadEnCarrito + 1);
  };

  const disminuirCantidad = () => {
    setCantidadEnCarrito(cantidadEnCarrito - 1);
  };

  return (
    <CarritoContext.Provider
      value={{ cantidadEnCarrito, aumentarCantidad, disminuirCantidad }}
    >
    {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => {
  return useContext(CarritoContext);
};
