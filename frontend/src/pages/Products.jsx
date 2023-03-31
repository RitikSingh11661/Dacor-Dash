import { Box, Flex } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom';
import Filter_Sort from '../components/Filter_Sort';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../redux/Product/product.action';

export const Products = () => {

  const {products,activePage,loading,perPage} = useSelector((store)=>{
    return {
      products : store.ProductReducer.product,
      loading : store.ProductReducer.loading,
      perPage : store.ProductReducer.perPage,
      activePage : store.ProductReducer.activePage
    }
  },shallowEqual);
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();

  const location = useLocation();

  console.log(searchParams.getAll("filter"))
  useEffect(()=>{
    if(products.length===0 || location){
      const getProductsParams = {
        
      }
      dispatch(getProducts(getProductsParams))
    }
  },[location.search])

  return (
    <div >
      <Filter_Sort/>
     <Box m="auto" p={{base:"0 0",md:"0 0",lg:"0 15%"}} >
        <Flex flexWrap={"wrap"}  justifyContent={{base:"center",md:"center",lg:"center"}} gap={2} rowGap={"-14"} >
           {
            products?.length>0 &&
            products.map((prod)=>(
             <Box key={prod.id}>
               <ProductCard
               
               image={prod.img}
               desc={prod.description}
               brand={prod.brand}
               oriPrice={prod.originalPrice}
               category={prod.category}
               disPrice={prod.discountPrice}
              />
             </Box>
            ))
           }
        </Flex>
     </Box>

    </div>
  )
}
