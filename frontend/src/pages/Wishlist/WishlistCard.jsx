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

import { FcLike } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import jwtDecode from "jwt-decode";
import { getWishlist, removeWishlist } from "../../redux/Wishlist/actions";



const ProductCard = ({
  id,
  name,
  image,
  desc,
  brand,
  oriPrice,
  category,
  disPrice,
}) => {
  const loading = useSelector((store) => store.ProductReducer.loading);

  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleMouseEnter = () => {
    setShow(true);
  };

  const handleMouseLeave = () => {
    setShow(false);
  };

  const handleRemove = () => {
  const { userId } = jwtDecode(localStorage.getItem("token"));
   dispatch(removeWishlist(id)).then(() => dispatch(getWishlist()))
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
                  onClick={handleRemove}
                  fontWeight="none"
                  borderRadius="none"
                  color="#fD7745"
                  fontSize="0.7rem"
                  px="10px"
                  border={"3px solid #fD7745"}
                  bg="none"
                >
                  Remove
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
            ></HStack>
          </Box>
        </Skeleton>
      </Center>
    </div>
  );
};

export default ProductCard;
