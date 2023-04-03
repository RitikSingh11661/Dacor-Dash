import React, { useEffect } from 'react'
import { Badge, Box, Button, Container, Flex, HStack, Heading, Image, List, ListItem, SimpleGrid, Skeleton, Stack, StackDivider, Text, VStack, useColorModeValue } from '@chakra-ui/react';
import { MdLocalShipping } from "react-icons/md"
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProductData } from '../redux/SingleProduct/SProduct.action';
import { FiHeart } from "react-icons/fi"
import { MdCompare } from "react-icons/md"
import { SiAdguard } from "react-icons/si"
import { GoLocation } from 'react-icons/go';
import { AiOutlineDown } from 'react-icons/ai';
import jwtDecode from "jwt-decode";
import { addCart } from '../redux/Cart/cart.action';

export const SingleProduct = () => {
    const { id } = useParams();
    const loading = useSelector((store) => store.SingleProductReducer.loading);

    const dispatch = useDispatch();

    const data = useSelector((store) => store.SingleProductReducer.singleProductData);

    const { image, category, name, brand, originalPrice, discountPrice } = data;

    useEffect(() => {
        dispatch(getSingleProductData(id))
    }, []);
    let token;
    try {
        token = jwtDecode(localStorage.getItem('token'));
    } catch (error) {
        console.log(error.message)
    }

    const addCartItems = async () => {
        if (token?.userId) {
            let payload = {
                userId: token?.userId,
                prodId: id,
                image,
                category,
                name,
                brand,
                originalPrice,
                discountPrice,
                quantity: 1
            }
            dispatch(addCart(payload))

        }

    }

    return (
        <Container maxW={"5xl"} >
            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 18, md: 24 }}

            >
                <Flex
                    direction={"column"}
                    rowGap="3"
                    w={{ base: "", md: "", lg: "600px" }}

                >
                    <Heading fontSize="1.5rem" color="#2f4858">
                        {name}
                    </Heading>
                    <HStack>
                        <Text>{brand}</Text>
                        <Badge borderRadius="30px">Best Seller</Badge>
                    </HStack>
                    <Image
                        rounded={"md"}
                        alt={"product image"}
                        src={
                            image[0]
                        }
                        fit={"cover"}
                        align={"center"}
                        w={"65"}
                        h={{ base: "100%", sm: "300px", lg: "300px" }}
                    />
                    <HStack spacing="3" mt="">
                        <Image
                            rounded={"md"}
                            borderRadius="md"
                            alt={"product image"}
                            src={
                                image[1]
                            }
                            fit={"cover"}
                            align={"center"}
                            w={"4rem"}
                            h={{ base: "2rem", sm: "2rem", lg: "2rem" }}
                        />
                        <Image
                            rounded={"md"}
                            alt={"product image"}
                            borderRadius="md"
                            src={
                                image[2]
                            }
                            fit={"cover"}
                            align={"center"}
                            w={"4rem"}
                            h={{ base: "2rem", sm: "2rem", lg: "2rem" }}
                        />
                        <Image
                            rounded={"md"}
                            borderRadius="md"
                            alt={"product image"}
                            src={
                                image[3]
                            }
                            fit={"cover"}
                            align={"center"}
                            w={"4rem"}
                            h={{ base: "2rem", sm: "2rem", lg: "2rem" }}
                        />
                        <Image
                            rounded={"md"}
                            borderRadius="md"
                            alt={"product image"}
                            src={
                                image[0]
                            }
                            fit={"cover"}
                            align={"center"}
                            w={"4rem"}
                            h={{ base: "2rem", sm: "2rem", lg: "2rem" }}
                        />
                    </HStack>
                    <Box>
                        <Text
                            fontSize={{ base: "16px", lg: "18px" }}
                            color={"#ED7745"}
                            fontWeight={"500"}
                            textTransform={"uppercase"}
                            mb={"4"}
                        >
                            Product Details
                        </Text>

                        <List spacing={2}>
                            <ListItem>
                                <Text as={"span"} fontWeight={"bold"}>
                                    Category:
                                </Text>{" "}
                                {category}
                            </ListItem>
                            <ListItem>
                                <Text as={"span"} fontWeight={"bold"}>
                                    Bracelet:
                                </Text>{" "}
                                leather strap
                            </ListItem>
                            <ListItem>
                                <Text as={"span"} fontWeight={"bold"}>
                                    Case:
                                </Text>{" "}
                                Steel
                            </ListItem>
                            <ListItem>
                                <Text as={"span"} fontWeight={"bold"}>
                                    Case diameter:
                                </Text>{" "}
                                42 mm
                            </ListItem>
                            <ListItem>
                                <Text as={"span"} fontWeight={"bold"}>
                                    Dial color:
                                </Text>{" "}
                                Black
                            </ListItem>
                            <ListItem>
                                <Text as={"span"} fontWeight={"bold"}>
                                    Crystal:
                                </Text>{" "}
                                Domed, scratch‑resistant sapphire crystal with
                                anti‑reflective treatment inside
                            </ListItem>
                            <ListItem>
                                <Text as={"span"} fontWeight={"bold"}>
                                    Water resistance:
                                </Text>{" "}
                                5 bar (50 metres / 167 feet){" "}
                            </ListItem>
                        </List>
                    </Box>
                </Flex>
                <Stack
                    w={{ base: "", md: "", lg: "65%" }}
                    ml={{ base: "", md: "", lg: "120px" }}
                    spacing={{ base: 6, md: 10, lg: 3 }}
                >
                    <HStack>
                        <Button
                            fontWeight="none"
                            borderRadius="none"
                            color="#fD7745"
                            fontSize="0.7rem"
                            px="10px"
                            bg="none"
                        >
                            {" "}
                            <FiHeart color="#fD7745" size="25px" />
                            Add To Wishlist
                        </Button>
                        <Text>|</Text>
                        <Button
                            fontWeight="none"
                            borderRadius="none"
                            color="#fD7745"
                            fontSize="0.7rem"
                            px="10px"
                            bg="none"
                        >
                            {" "}
                            <MdCompare color="#fD7745" size="25px" />
                            ADD TO COMPARE
                        </Button>
                    </HStack>
                    <VStack>
                        <HStack
                            w="100%"
                            p="0.4rem"
                            justifyContent="space-between"
                            bg="RGBA(0, 0, 0, 0.10)"
                        >
                            <Heading size="lg">42% off</Heading>
                            <Box
                                bgColor={"black"}
                                p="1.2rem"
                                color="#ffffff"
                                size="xl"
                                fontWeight="bold"
                            >
                                SALE
                            </Box>
                        </HStack>
                        <Text fontSize="0.8rem" textAlign="left">
                            * All discounts are dynamic and can change at any time.
                        </Text>
                    </VStack>
                    <HStack p="1.5rem" justifyContent="space-around">
                        <Text color={"#969696"} textDecoration="line-through">
                            MRP₹{originalPrice}
                        </Text>
                        <VStack>
                            <Text>₹{discountPrice}</Text>
                            <Text color={"#969696"} fontSize="0.7rem">
                                (inclusive of all taxes)
                            </Text>
                        </VStack>
                    </HStack>

                    <Link to="/cart">
                        <Button
                            rounded={"none"}
                            borderRadius="5px"
                            w={"full"}
                            onClick={addCartItems}
                            size={"lg"}
                            py={"7"}
                            bg={"#ED7745"}
                            color={useColorModeValue("white", "gray.900")}
                            textTransform={"uppercase"}
                            _hover={{
                                transform: "translateY(2px)",
                                boxShadow: "lg",
                            }}
                        >
                            Add to cart
                        </Button>
                    </Link>
                    <Box border="1px solid #D69E2E">
                        <HStack gap="10" p="1" alignItems="flex-start">
                            <HStack>
                                <SiAdguard size="30" />
                                <VStack>
                                    <HStack>
                                        <Text color="blackAlpha.800" fontWeight="bold">36 month warranty</Text>
                                        <Text >
                                            on this product
                                        </Text>
                                    </HStack>
                                    <Text textDecoration="underline" color="#ED7745">Know More</Text>
                                </VStack>
                            </HStack>

                        </HStack>
                    </Box>
                    <Box border="1px solid #D69E2E" p="2.5">
                        <HStack justifyContent="space-around">
                            <HStack>
                                <GoLocation />
                                <Text> Nagpur - 440023</Text>
                            </HStack>
                            <Text
                                color="#fD7745"
                                textDecoration={"underline"}
                                textDecorationColor={"blackAlpha.400"}
                            >
                                Change
                            </Text>
                        </HStack>
                    </Box>

                    <Box border="1px solid #D69E2E" p="2.5">
                        <HStack>

                            <MdLocalShipping />
                            <Text>Delivery Between </Text>
                            <Text color="blackAlpha.800" fontWeight="bold">Apr 8 - Apr 10</Text>

                        </HStack>
                    </Box>
                    <Box bg={"#FEFCBF"} border="1px solid #D69E2E" p="0.6rem">
                        <Text as={"li"} fontSize="0.8rem" color={"#969696"}>
                            You can cancel your order before shipped, and a full refund will be initiated.
                        </Text>
                    </Box>
                    <Button
                        rounded={"none"}
                        borderRadius="5px"
                        w={"full"}

                        size={"lg"}
                        py={"7"}
                        border="2px solid #ED7745"
                        color=" #ED7745"

                        textTransform={"uppercase"}
                        _hover={{
                            transform: "translateY(2px)",
                            boxShadow: "lg",
                            bg: "#ED7745",
                            color: "#ffffff"
                        }}
                    >
                        Explore Sets
                        <AiOutlineDown color="#fD7745" _hover={{ color: "#ffffff" }} />
                    </Button>
                </Stack>
            </SimpleGrid>
        </Container>
    );
}
