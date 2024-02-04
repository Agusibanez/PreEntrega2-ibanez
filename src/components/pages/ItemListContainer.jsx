
import React from 'react';
import { Container, Typography, capitalize } from '@mui/material';
// import ProductCard from "../common/ProductCard";


const ItemListContainer = ({ greeting }) => {
  return (
    <div style={{textAlign:"-webkit-center"}}>
      <h2 style={{backgroundColor:"lightblue", width:"26rem", fontFamily:"monospace"}}>{greeting}</h2>
      {/* <ProductCard/> */}
    </div>
  );
};

export default ItemListContainer;