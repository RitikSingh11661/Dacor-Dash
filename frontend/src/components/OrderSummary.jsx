import { Box, Button, Divider, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const OrderSummary = ({ totalItem, sum, couponDiscount }) => {
  const discount = Math.floor(sum / 5) + couponDiscount;
  const GT = sum - discount - couponDiscount;
  const location = useLocation();
  let path = "";
  if (location.pathname === "/cart") {
    path = "/checkout";
  } else if (location.pathname === "/checkout") {
    path = "/payment";
  }
  return (
    <Box
      w={"70%"}
      m={"auto"}
      mt={"1rem"}
      p={"1rem"}
      fontFamily={`"Mr Eaves XL Modern",sans-serif`}
    >
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box color={"#222222"} fontSize="1rem">
          <Text>Cart Total ({totalItem} items)</Text>
          <Text>Discounts</Text>
          <Text>Shipping</Text>
        </Box>
        <Box textAlign={"right"} color="#606060">
          <Text>₹{sum}</Text>
          <Text>₹{discount}</Text>
          <Text fontWeight="bold" color={"#359D40"}>
            FREE
          </Text>
        </Box>
      </Box>
      <Divider />
      <Box display={"flex"} mt={"1rem"} justifyContent={"space-between"}>
        <Box>
          <Text >
            Total Payable Amount 
          </Text>
          <Text mt="1rem" color="#606060" fontWeight={"bold"}>
          Booking Amount (Pay Now)
          </Text>
        </Box>
        <Box textAlign={"right"}>
          <Text>₹{GT}</Text>
          <Text fontWeight={"medium"} color="#606060" mt="1rem">₹{GT}</Text>
        </Box>
      </Box>
      {/* <Link to={path}>
        {location.pathname !== "/payment" ? (
          <Button
            bg={"green.500"}
            variant={"link"}
            h={"3rem"}
            w={"100%"}
            color={"white"}
          >
            CHECKOUT
          </Button>
        ) : null}
      </Link> */}
      <HStack spacing="5">
      <Button
        fontWeight="none"
        borderRadius="none"
        color="#ED7745"
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
      </HStack>
    </Box>
  );
};

export default OrderSummary;
