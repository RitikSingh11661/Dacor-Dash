import { Box, Flex } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom';
import Filter_Sort from '../components/Filter_Sort';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../redux/Product/product.action';

export const Products = () => {

    const { products, activePage, loading, perPage } = useSelector((store) => {
        return {
            products: store.ProductReducer.product,
            loading: store.ProductReducer.loading,
            perPage: store.ProductReducer.perPage,
            activePage: store.ProductReducer.activePage
        }
    }, shallowEqual);
    const dispatch = useDispatch();
    
    const [searchParams] = useSearchParams();

    const location = useLocation();
    console.log(products)
    useEffect(() => {
        if (products?.length === 0 || location) {
            const getProductsParams = {
                params: {
                    category: searchParams.getAll("category"),
                    brand:searchParams.getAll("brand"),
                    sort: "originalPrice",
                    orderBy: searchParams.get("orderBy"),
                }
            }
            dispatch(getProducts(getProductsParams))
        }
    }, [location.search])

    return (
        <div>
            <Filter_Sort />
            <Box m="auto" p="0 14%" >
                <Flex flexWrap={"wrap"} justifyContent="center" gap={2} rowGap={"-14"} >
                    {
                        products?.length > 0 &&
                        products?.map((prod) => (
                            <Box key={prod.id}>
                                <ProductCard
                                    id={prod.id}
                                    image={prod.image[0]}
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
