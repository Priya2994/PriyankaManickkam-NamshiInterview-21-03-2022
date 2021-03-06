import React, { useEffect, useState } from "react";
import useFetch from "use-http";
import { Box, Grid, Typography } from '@mui/material';
import ProductLists from '../components/checkout/product-lists';

const Checkout = () => {
  const [productList, setProductList] = useState([]);
  const { get, response, loading } = useFetch("https://fakestoreapi.com");
 
  useEffect(() => {
    async function getProducts() {
        const products = await get('/products?limit=5')
        if (response.ok) setProductList(products)
      }
    getProducts();
    // eslint-disable-next-line
  }, [response, get]);


  if(productList.lenth > 0 && loading) { return }

  return (
      <Box p={3}>
          <Typography variant="h3">All Items</Typography>
          <Grid container spacing={5}>
            {productList.map((list)=> <Grid item xs={12}><ProductLists key={`products_${list.id}`} products={list} /></Grid>)}
          </Grid>
      </Box>
  );
};

export default Checkout;
