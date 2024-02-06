import React from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useCarrito } from "./CarritoContext";
import { Badge, IconButton } from "@mui/material";

const CartWidget = () => {
  const { cantidadEnCarrito } = useCarrito();

  return (
    <div>
      <IconButton color="inherit">
        <Badge badgeContent={cantidadEnCarrito} color="error">
          <LocalMallIcon /> {/* Icono de carrito de compras */}
        </Badge>
      </IconButton>
    </div>
  );
};

export default CartWidget;
