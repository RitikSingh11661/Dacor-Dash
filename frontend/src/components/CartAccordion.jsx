import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Image,
  Input,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useState } from "react";

const CartAccordion = ({ availCoupon }) => {
  const [coupon, setCoupon] = useState("");

  const getAvailCoupon = () => {
    availCoupon(coupon);
  };

  return (
    <Box w={"70%"} m={"auto"} fontFamily={`"Mr Eaves XL Modern",sans-serif`}>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton p={"0.5rem"}>
              <Box
                as="span"
                display={"flex"}
                gap={"1rem"}
                flex="1"
                textAlign="left" 
                color="#ED7745" 
                fontWeight="bold"
              >
                Apply Coupon/Vouchers
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Box
              display={"flex"}
              bg={"#f7f7f7"}
              h={"3rem"}
              color={"#ED7745"}
              alignItems={"center"}
              p={"1rem"}
            >
              <Input
                placeholder={" coupon code "}
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                border={"0"}
              />
              <Button onClick={getAvailCoupon} variant={"ghost"}>
                APPLY
              </Button>
            </Box>
          </AccordionPanel>
        </AccordionItem>

      </Accordion>
    </Box>
  );
};

export default CartAccordion;
