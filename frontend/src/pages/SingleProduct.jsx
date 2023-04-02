import React, { useEffect } from 'react'
import { Badge, Box, Button, Container, Flex, HStack, Heading, Image, List, ListItem, SimpleGrid, Skeleton, Stack, StackDivider, Text, VStack, useColorModeValue } from '@chakra-ui/react';
import {MdLocalShipping} from "react-icons/md"
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProductData } from '../redux/SingleProduct/SProduct.action';

export const SingleProduct = () => {
    const {id} =useParams();
    const loading = useSelector((store)=>store.SingleProductReducer.loading);
  
  const dispatch = useDispatch();

  const data = useSelector((store)=>store.SingleProductReducer.singleProductData);
console.log(data)
 
  useEffect(() => {
    if(data){
        dispatch(getSingleProductData(id))
    }
}, []);

    return (
        <Container maxW={'5xl'}>
            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 18, md: 24 }}
                border="1px solid red"
                >
                <Flex direction={"column"} rowGap="3" w={{base:"",md:"",lg:"600px"}} border="1px solid red">
                    <Heading fontSize="1.5rem" color="#2f4858">Arabia Solid Wood 6 Seater Dining Table</Heading>
                    <HStack>
                       <Text>By Urban Ladder</Text>
                       <Badge borderRadius="30px">Best Seller</Badge>
                    </HStack>
                    <Image
                        rounded={'md'}
                        alt={'product image'}
                        src={"https://www.ulcdn.net/images/products/312895/slide/666x363/Arabia_Dining_Table_TK_1.jpg?1609230336"}
                        fit={'cover'}
                        align={'center'}
                        w={'100%'}
                        h={{ base: '100%', sm: '300px', lg: '300px' }}
                    />
                    <HStack>

                    <Image
                        rounded={'md'}
                        alt={'product image'}
                        src={"https://www.ulcdn.net/images/products/312898/slide_thumb/Arabia_Dining_Table_TK_4.jpg?1609230340"}
                        fit={'cover'}
                        align={'center'}
                        w={'100%'}
                        h={{ base: '100%', sm: '300px', lg: '300px' }}
                    />
                    <Image
                        rounded={'md'}
                        alt={'product image'}
                        src={"https://www.ulcdn.net/images/products/312898/slide_thumb/Arabia_Dining_Table_TK_4.jpg?1609230340"}
                        fit={'cover'}
                        align={'center'}
                        w={'100%'}
                        h={{ base: '100%', sm: '300px', lg: '300px' }}
                    />
                    <Image
                        rounded={'md'}
                        alt={'product image'}
                        src={"https://www.ulcdn.net/images/products/312898/slide_thumb/Arabia_Dining_Table_TK_4.jpg?1609230340"}
                        fit={'cover'}
                        align={'center'}
                        w={'100%'}
                        h={{ base: '100%', sm: '300px', lg: '300px' }}
                    />
                    <Image
                        rounded={'md'}
                        alt={'product image'}
                        src={"https://www.ulcdn.net/images/products/312898/slide_thumb/Arabia_Dining_Table_TK_4.jpg?1609230340"}
                        fit={'cover'}
                        align={'center'}
                        w={'5%'}
                        h={{ base: '5%', sm: '300px', lg: '300px' }}
                    />

                    </HStack>
        
                </Flex>
                <Stack w={{base:"",md:"",lg:"65%"}} ml={{base:"",md:"",lg:"120px"}} spacing={{ base: 6, md: 10 }}>
                    <Box as={'header'}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>     
                        </Heading>
                        <Text
                            color={useColorModeValue('gray.900', 'gray.400')}
                            fontWeight={300}
                            fontSize={'2xl'}>
                            $1000
                        </Text>
                    </Box>

                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={'column'}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue('gray.200', 'gray.600')}
                            />
                        }>
                        <VStack spacing={{ base: 4, sm: 6 }}>
                            <Text
                                color={useColorModeValue('gray.500', 'gray.400')}
                                fontSize={'2xl'}
                                fontWeight={'300'}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                  maxime modi nam officiis porro, quae, quisquam quos
                  reprehenderit velit? Natus, totam.
                            </Text>
                            {/* <Text fontSize={'lg'}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                  maxime modi nam officiis porro, quae, quisquam quos
                  reprehenderit velit? Natus, totam.
                </Text> */}
                        </VStack>
                        <Box>
                            <Text
                                fontSize={{ base: '16px', lg: '18px' }}
                                color={useColorModeValue('yellow.500', 'yellow.300')}
                                fontWeight={'500'}
                                textTransform={'uppercase'}
                                mb={'4'}>
                                Features
                            </Text>

                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                                <List spacing={2}>
                                    <ListItem>Chronograph</ListItem>
                                    <ListItem>Master Chronometer Certified</ListItem>{' '}
                                    <ListItem>Tachymeter</ListItem>
                                </List>
                                <List spacing={2}>
                                    <ListItem>Anti‑magnetic</ListItem>
                                    <ListItem>Chronometer</ListItem>
                                    <ListItem>Small seconds</ListItem>
                                </List>
                            </SimpleGrid>
                        </Box>
                        <Box>
                            <Text
                                fontSize={{ base: '16px', lg: '18px' }}
                                color={useColorModeValue('yellow.500', 'yellow.300')}
                                fontWeight={'500'}
                                textTransform={'uppercase'}
                                mb={'4'}>
                                Product Details
                            </Text>

                            <List spacing={2}>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Category:
                                    </Text>{' '}
                                    Silver Brass Ring
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Bracelet:
                                    </Text>{' '}
                                    leather strap
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Case:
                                    </Text>{' '}
                                    Steel
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Case diameter:
                                    </Text>{' '}
                                    42 mm
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Dial color:
                                    </Text>{' '}
                                    Black
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Crystal:
                                    </Text>{' '}
                                    Domed, scratch‑resistant sapphire crystal with anti‑reflective
                                    treatment inside
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Water resistance:
                                    </Text>{' '}
                                    5 bar (50 metres / 167 feet){' '}
                                </ListItem>
                            </List>
                        </Box>
                    </Stack>

                    <Button
              
                        rounded={'none'}
                        borderRadius="5px"
                        w={'full'}
                        mt={8}
                        size={'lg'}
                        py={'7'}
                        bg={"green.500"}
                        color={useColorModeValue('white', 'gray.900')}
                        textTransform={'uppercase'}
                        _hover={{
                            transform: 'translateY(2px)',
                            boxShadow: 'lg',
                        }}>
                        Add to cart
                    </Button>

                    <Stack direction="row" alignItems="center" justifyContent={'center'}>
                        <MdLocalShipping />
                        <Text>2-3 business days delivery</Text>
                    </Stack>
                </Stack>
            </SimpleGrid>
        </Container>
  )
}
