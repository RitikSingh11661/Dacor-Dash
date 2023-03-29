import React from 'react'
import {Center,Skeleton,Box,Image,Icon, Stack, Text, Flex, chakra, Tooltip, HStack, Button} from "@chakra-ui/react"
import {Link} from "react-router-dom"
import {FiHeart} from "react-icons/fi"
import {FcLike} from "react-icons/fc"
import styles from "./ProductCard.module.css"
const ProductCard = () => {
  return (
    <div>
      <Center py={3}>
        {/* <Skeleton borderRadius="md"  fadeDuration={1}> */}
        <Box fontFamily={`"Mr Eaves XL Modern",sans-serif`}
          role={"group"}
          p={"0.6rem"}
          w={"322px"}
          h="max-content"
          _hover={{ boxShadow: "2xl" }}
          zIndex={1}
          mt="200px"
         
        >
          <Link to={`/product/1`} >
            <Image 
              w="304px"
              objectFit={"cover"}
              src={
                "https://www.ulcdn.net/images/products/369124/product/Diner_Wide_Sideboard_finis_dark_walnut_lp.jpg?1628507845"
              }
            />
          </Link>
          <Stack pt="2" spacing="0.5" fontSize="13px">
            <Text
              color={"#494848"}
              fontSize={"1rem"}
              textAlign="center"
              p="3.2px"
              opacity="0.9"
            >
              Dinner Solid Wood Storage Cabinet
            </Text>
            <Text
              color={"#999999"}
              textAlign="center"
            >
              (Dark Walnut Finish)
            </Text>
            <Text
              color={"#999999"}
              textAlign="center"
            >
              By Urban Ladder
            </Text>
            </Stack>
           <HStack spacing={"0"} mt="1" justifyContent="center" fontSize={"15px"}>
           <Text
           color={"#999999"}
           textDecoration= "line-through"
           
            >
                ₹15,899
            </Text>
            <Text
           
            >₹10,493
            
            </Text>
            <Text
             color={"#999999"}
            
            >
           |EMI From ₹504
            </Text>
           </HStack >
          <HStack _hover={{display:"block"}} mt="2" spacing="3" justifyContent={"center"} >
          <Button fontWeight="none" borderRadius="none" color="#fD7745" fontSize="0.7rem" px="10px" border={"3px solid #fD7745"} bg="none">ADD TO COMPARE</Button>
          <Button fontSize="0.7rem" borderRadius="none" colorScheme="orange" >VIEW PRODUCT</Button>
          </HStack>
        </Box>
        {/* </Skeleton> */}
      </Center>
    </div>
  );
}

export default ProductCard
