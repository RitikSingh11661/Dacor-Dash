import React from 'react'
import {
  Box,
  Center,
  useColorModeValue,
  Text,
  Stack,
  Image,
  Flex,
  Icon,
  Tooltip,
  chakra,
  HStack,
  Button,
  Divider,
  Select,
  VStack,
 
} from '@chakra-ui/react';
import { FiHeart } from 'react-icons/fi';
import {GoLocation} from "react-icons/go"
import { Link } from 'react-router-dom';
import {RxCross2} from "react-icons/rx"
import CartAccordion from '../components/CartAccordion';
import OrderSummary from '../components/OrderSummary';
export const Cart = () => {

  return (
    <div>
      <Box p="0 15%" mt="20px" fontFamily={`"Mr Eaves XL Modern",sans-serif`}>
        <Box h="100%">
          <Box>
            <HStack justifyContent="space-between">
              <Box></Box>
              <Box border="1px solid #D69E2E" p="2.5">
                <HStack justifyContent="space-around" gap="10">
                  <HStack>
                    <GoLocation />
                    <Text> Bangalore - 440023</Text>
                  </HStack>
                  <Text
                    color="#fD7745"
                    textDecoration={"underline"}
                    textDecorationColor={"black"}
                  >
                    Change Pincode
                  </Text>
                </HStack>
              </Box>
              <Box p="2">
                <Button
                  fontWeight="none"
                  borderRadius="none"
                  color="#fD7745"
                  fontSize="0.7rem"
                  px="10px"
                  bg="none"
                >
                  CONTINUE SHOPPING
                </Button>
                <Button
                  fontSize="0.7rem"
                  borderRadius="none"
                  colorScheme="orange"
                  px="10"
                >
                  CHECKOUT
                </Button>
              </Box>
            </HStack>
          </Box>
          <Box>
            <Divider />
            <Box display={{base:"none",md:"none",lg:"block"}}>
            <HStack fontSize="14px"   justifyContent="space-between" p="2.5" >
              <Box w="23%">
              <Text >PRODUCTS</Text>
              </Box>
              <Text>DELIVERY DATE</Text>
              <Text >QUANTITY</Text>
              <Text>TOTAL</Text>
            </HStack>
            </Box>
            <Divider />
            <Box w="100%" h="max-content"  mt="10px">
              <HStack justifyContent="space-around">
                <Box width="35%" h="100%" >
                 <HStack >
                 <VStack  >
                    <Image shadow={"lg"}
                      w="85%"
                      src="https://www.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw84402156/productimages/1O541210.jpg?sw=140&sh=175&sfrm=jpg"
                     
                      alt=""
                    ></Image>
                    <Button
                      fontWeight="none"
                      borderRadius="10px"
                      color="#ffffff"
                      fontSize="0.6rem"
                      px="0.6rem"
                      bg="#fD7745"
                    >
                      {" "}
                      <FiHeart color="#ffffff" size="25px" />
                      Add To Wishlist
                    </Button>
                  </VStack>
                  <VStack
                      textAlign="left"
                      p="3px"
                      color="#444444"
                      w="70%"
                      h="100%"
                      mt="-30px"

                    >
                      <Text fontSize="14px" color="#222222">
                      Babylon Solid Wood Bookshelf in Walnut Finish
                      </Text>
                      <Text fotSize="13px" textAlign="left" color="#999999">
                      Finish: Walnut
                      </Text>
                     

                        <Text fontSize="11px">
                            You can cancel your order before shipped, and a full refund will be initiated.
                        </Text>
                  
                    </VStack>
                 </HStack>
                </Box>
                <Box w="65%">
                  <HStack justifyContent="space-around" >
                  <Text fontSize="14px"  color="#000000">By 5th Apr, 2023</Text>
              
                  <Box ml="50px">
                  <Select placeholder="Q">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                      </Select>
                    
                  </Box >
                     <Stack border="1px solid red" justifyContent="flex-end" >
                     <HStack>
                     <VStack  >
                      <Text color={"#999999"} textDecoration="line-through">$15.00</Text>
                      <Text   textAlign="right">$14.00</Text>
                      </VStack>
                      <Box>
                        <RxCross2/>
                      </Box>
                     </HStack>
                     </Stack>
                   
                  </HStack>
                </Box>
              </HStack>
            </Box>
            <Divider />
          </Box>
        </Box>
        <HStack justifyContent="space-between" alignItems={"flex-start"} p="10px">
          <Stack flexDirection="row" p="2px 5px 2px 7px" spacing="" gap="3">
              <Image w="3rem" h="1.3rem" src="https://www.ulcdn.net/assets/spree/frontend/paymentMode/VISA-verified-gray-071bc1fbd8561b3bf044e3ac3037eca5.png" alt="" />
              <Image w="3rem" h="1.3rem" src="https://www.ulcdn.net/assets/spree/frontend/paymentMode/mastercard-gray-ada104aa6eb18055113b049ae1994f11.png" alt="" />
              <Image w="3rem" h="1.3rem" src="https://www.ulcdn.net/assets/spree/frontend/paymentMode/norton-secured-gray-9525120b9e171ac18de6eb9dd6143106.png" alt="" />
              <Image w="3rem" h="1.3rem" src="https://www.ulcdn.net/assets/spree/frontend/paymentMode/amex-safekey-gray-66917d54dd2e4f3ce9ac62fd8f6a9e6e.png" alt="" />
              <Image w="3rem" h="1.3rem" src="https://www.ulcdn.net/assets/spree/frontend/paymentMode/rupay-gray-d3669859faa810034818f90a821ccbf2.png" alt="" />
              <Image w="3rem" h="1.3rem" src="https://www.ulcdn.net/assets/spree/frontend/paymentMode/Bhim-upi-gray-52fb6904f152e87013c3da2352997f90.png" alt="" />
          </Stack>
          <Box
          w={{ md: "50%" }}
          h={{ md: "25rem" }}
        >
          <CartAccordion />
          <OrderSummary
            
          />
        </Box>
        </HStack>
      </Box>
    </div>
  );
}
