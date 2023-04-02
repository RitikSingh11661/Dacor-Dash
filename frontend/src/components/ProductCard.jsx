import React, { useState } from "react";
import {
  Center,
  Skeleton,
  Box,
  Image,
  Icon,
  Stack,
  Text,
  Flex,
  chakra,
  Tooltip,
  HStack,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { FcLike } from "react-icons/fc";
import styles from "./ProductCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addWishlist } from "../redux/Wishlist/actions";

const ProductCard = ({ image, desc, brand, oriPrice, category, disPrice }) => {
  const loading = useSelector((store) => store.ProductReducer.loading);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleMouseEnter = () => {
    setShow(true);
  };

  const handleMouseLeave = () => {
    setShow(false);
  };
  const handleWish = () => {
    dispatch(addWishlist());
  };
  return (
    <div>
      <Center py={3}>
        <Skeleton isLoaded={!loading} borderRadius="md" fadeDuration={1}>
          <Box
            fontFamily={`"Mr Eaves XL Modern",sans-serif`}
            role={"group"}
            p={"0.6rem"}
            w={"322px"}
            h="max-content"
            pos="relative"
            cursor="pointer"
            _hover={{ boxShadow: "2xl" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link to={`/product/1`}>
              <Image
                w="304px"
                height={"300px"}
                objectFit={"cover"}
                src={image}
              />
            </Link>
            <Stack pt="2" spacing="0.5" fontSize="13px">
              <Text
                color={"#494848"}
                fontSize={"1rem"}
                textAlign="center"
                p="3.2px"
                opacity="0.9"
                lineHeight="tight"
                isTruncated
              >
                {desc}
              </Text>
              <Text
                color={"#999999"}
                textAlign="center"
                textTransform={"capitalize"}
              >
                ({category})
              </Text>
              <Text color={"#999999"} textAlign="center">
                {brand}
              </Text>
            </Stack>
            <HStack
              spacing={"0"}
              mt="1"
              justifyContent="center"
              fontSize={"15px"}
            >
              <Text color={"#999999"} textDecoration="line-through">
                ₹{disPrice}
              </Text>
              <Text>₹{oriPrice}</Text>
              <Text color={"#999999"}>|EMI From ₹504</Text>
      
            </HStack>
            {
              <HStack
                visibility={show ? "visible" : "hidden"}
                _hover={{ boxShadow: "2xl" }}
                mt="2"
                spacing="3"
                justifyContent={"center"}
              >
                <Button
                  fontWeight="none"
                  borderRadius="none"
                  color="#fD7745"
                  fontSize="0.7rem"
                  px="10px"
                  border={"3px solid #fD7745"}
                  bg="none"
                >
                  ADD TO COMPARE
                </Button>
                <Button
                  fontSize="0.7rem"
                  borderRadius="none"
                  colorScheme="orange"
                >
                  VIEW PRODUCT
                </Button>
              </HStack>
            }
            <HStack
              visibility={show ? "visible" : "hidden"}
              _hover={{ boxShadow: "2xl" }}
              mt="2"
              spacing="3"
              justifyContent={"center"}
              top="10px"
              right="18px"
              pos="absolute"
            >
              <Button
                fontWeight="none"
                borderRadius="none"
                color="#fD7745"
                fontSize="0.7rem"
                px="10px"
                border={"2px solid #fD7745"}
                bg="none"
                onClick={handleWish}
              >
                {" "}
                <FiHeart color="#fD7745" size="25px" />
                Add To Wishlist
              </Button>
            </HStack>
            <Box
              visibility={!show ? "visible" : "hidden"}
              top="20px"
              right="25px"
              pos="absolute"
            >
              <FiHeart color="#fD7745" size="25px" />
            </Box>
          </Box>
        </Skeleton>
      </Center>
    </div>
  );
};

export default ProductCard;
