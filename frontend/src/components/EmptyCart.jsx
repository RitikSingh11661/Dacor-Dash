import { Box, Button, Center, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom"



const EmptyCart = () => {
  const cartData = useSelector((store) => store.cartReducer.cart);
  return (
    <div>
      
        <Box>
      <Box h="60px" boxShadow="md">
         <Center>
         <HStack fontSize={{base:"10px",md:"13",lg:"15px"}} mt="25px" >
         <Text color="#ED7745" fontWeight="900">CURBSIDE PICKUP </Text>
           <Text> only in the app! or</Text>
           <Text color="#ED7745" fontWeight="900"> IN STORE PICKUP</Text>
           <Text>super fast + free</Text>
           <Link color="#ED7745" fontWeight="900"> get the details</Link>
         </HStack>
         </Center>
      
           </Box>
      <Box w="70%" height="400px" m="auto">
         <Text textAlign="left" fontWeight="900" color="#444444" fontSize="xl">Your Cart({cartData?.length})</Text>
         <Box  h="260px" w="30%" m="auto" mt="35px">
          <VStack>
            <Text color="#444444">Your shopping cart is empty</Text>
            <Image w="50%"  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 114.97 114.9'%3E%3Cdefs%3E%3Cstyle%3E.cls-1,.cls-15,.cls-3,.cls-4,.cls-5,.cls-6,.cls-8%7Bfill:none;%7D.cls-2%7Bclip-path:url(%23clip-path);%7D.cls-3%7Bstroke:%23f2bccc;%7D.cls-3,.cls-4%7Bstroke-width:15.46px;%7D.cls-4%7Bstroke:%23a7deef;%7D.cls-5%7Bstroke:%23436ca2;stroke-width:2px;stroke-dasharray:3 5;%7D.cls-5,.cls-6,.cls-8%7Bstroke-linecap:round;%7D.cls-5,.cls-6%7Bstroke-linejoin:round;%7D.cls-6,.cls-8%7Bstroke:%23444;stroke-width:5px;%7D.cls-7%7Bfill:%23444;%7D.cls-9%7Bfill:%234b6b9f;%7D.cls-10%7Bfill:%23f2bccc;%7D.cls-11%7Bfill:url(%23Unnamed_Pattern_18);%7D.cls-12%7Bfill:%23231f20;%7D.cls-13%7Bfill:%23e82f7c;%7D.cls-14%7Bfill:%2388d3e2;%7D.cls-15%7Bstroke:%23ed2e7c;stroke-miterlimit:10;stroke-width:2.58px;%7D%3C/style%3E%3CclipPath id='clip-path'%3E%3Crect id='SVGID' classname='cls-1' width='104.35' height='106.29'/%3E%3C/clipPath%3E%3Cpattern id='Unnamed_Pattern_18' data-name='Unnamed Pattern 18' width='104.35' height='106.29' patternTransform='matrix(2.72, 0, 0, -2.28, -1559.06, 38711.12)' patternUnits='userSpaceOnUse' viewBox='0 0 104.35 106.29'%3E%3Crect classname='cls-1' width='104.35' height='106.29'/%3E%3Cg classname='cls-2'%3E%3Cline classname='cls-3' x1='-3.01' y1='98.9' x2='113.82' y2='98.9'/%3E%3Cline classname='cls-4' x1='-2.59' y1='84.31' x2='114.24' y2='84.31'/%3E%3Cline classname='cls-3' x1='-3.44' y1='70.55' x2='113.39' y2='70.55'/%3E%3Cline classname='cls-4' x1='-2.59' y1='58.53' x2='114.24' y2='58.53'/%3E%3Cline classname='cls-3' x1='-3.44' y1='43.93' x2='113.39' y2='43.93'/%3E%3Cline classname='cls-4' x1='-2.59' y1='31.92' x2='114.24' y2='31.92'/%3E%3Cline classname='cls-3' x1='-3.44' y1='18.16' x2='113.39' y2='18.16'/%3E%3Cline classname='cls-4' x1='-2.59' y1='6.14' x2='114.24' y2='6.14'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cg id='emptyCart'%3E%3Cpath id='Path-7' classname='cls-5' d='M36.91,91.55q32.33-33,33.49-44.23c1.81-17.4-12.19-23.52-23-18.55S32.56,54.85,53.24,58.83q20.67,4,43.16-38.93'/%3E%3Cg id='cart-icon'%3E%3Cpolyline id='Path' classname='cls-6' points='2.5 29.9 21.14 29.9 24.39 40.9 33.92 94.9 100.35 94.9 107.5 40.9 24.39 40.9'/%3E%3Ccircle id='Oval' classname='cls-7' cx='51.5' cy='108.9' r='6'/%3E%3Ccircle id='Oval-Copy-3' classname='cls-7' cx='86.5' cy='108.9' r='6'/%3E%3Cline id='Line-3' classname='cls-8' x1='80' y1='42.9' x2='80' y2='93.25'/%3E%3Cline id='Line-3-2' data-name='Line-3' classname='cls-8' x1='55' y1='42.9' x2='55' y2='93.25'/%3E%3Cline id='Line-2' classname='cls-8' x1='30.5' y1='66.4' x2='100.5' y2='66.4'/%3E%3C/g%3E%3C/g%3E%3Cpath classname='cls-9' d='M108,1.86a.81.81,0,0,0,.29-.19A1,1,0,0,0,108.6,1a1,1,0,0,0-.35-.75.89.89,0,0,0-.55-.2.92.92,0,0,0-.87,1,.93.93,0,0,0,.33.73l-.1.94a5.08,5.08,0,0,1,.84.19Z'/%3E%3Cpath classname='cls-9' d='M113.07,6a.8.8,0,0,1,.13-.32,1,1,0,0,1,.65-.41,1,1,0,0,1,.81.2A.87.87,0,0,1,115,6a.92.92,0,0,1-.79,1,1,1,0,0,1-.79-.18l-.89.28a6.86,6.86,0,0,0-.35-.78Z'/%3E%3Cpath classname='cls-10' d='M109.2,15.57c-2.45,3-6.67,3.61-9.38,1.39s-2.94-6.48-.49-9.47l1.82-2.22c2.44-3,6.66-3.61,9.38-1.39s2.93,6.48.49,9.47Z'/%3E%3Cpath classname='cls-11' d='M110.06,14.52l-1.58,1.93a6.17,6.17,0,0,1-8.66.51,6.16,6.16,0,0,1-1.21-8.59l1.51-1.85A12.71,12.71,0,0,1,110.06,14.52Z'/%3E%3Cpath classname='cls-12' d='M106.68,5a.41.41,0,1,1-.06-.58.42.42,0,0,1,.06.58'/%3E%3Cpath classname='cls-12' d='M110.9,8.39a.4.4,0,0,1-.58.06.41.41,0,1,1,.58-.06'/%3E%3Cpath classname='cls-12' d='M107,8.33l-.1-.08c-1.22-1.06-1.81-2-1.74-2.78a.12.12,0,0,1,.14-.11.12.12,0,0,1,.11.13c-.07.7.49,1.57,1.65,2.57a4.65,4.65,0,0,0,3,1.24.12.12,0,1,1,0,.24A4.75,4.75,0,0,1,107,8.33'/%3E%3Cpath classname='cls-9' d='M97.74,8c-1.4-1.46-.42-1.53,1.2-4.56,2.2-4.13,3.78-.65,5,2a6,6,0,0,1-.51,6.18A9.13,9.13,0,0,1,99.54,15a3.87,3.87,0,0,1-3.26.13,3.73,3.73,0,0,1-2.23-4.05,3.33,3.33,0,0,1,3.52-3.26'/%3E%3Cpath classname='cls-13' d='M101.46,9.94c-2.87-2.44-2.75-3.06-1.74-4.83,1.41-2.48,2.49-.33,3,.68a5.79,5.79,0,0,1,.68,3.55c-.13.88-.79,1.53-1.89.6'/%3E%3Cpath classname='cls-10' d='M101.45,10l0,0h0c-2.94-2.49-2.76-3.17-1.75-4.94.46-.81.93-1.21,1.42-1.19.74,0,1.29,1,1.68,1.89a5.89,5.89,0,0,1,.69,3.6,1.28,1.28,0,0,1-.7,1.07A1.32,1.32,0,0,1,101.45,10Zm.07-.17c.44.38.84.51,1.15.39a1.1,1.1,0,0,0,.59-.93,5.61,5.61,0,0,0-.67-3.5c-.22-.48-.8-1.75-1.53-1.78-.41,0-.84.35-1.26,1.1-1,1.74-1.13,2.3,1.72,4.72Z'/%3E%3Cpath classname='cls-13' d='M100.62,2.27a.34.34,0,0,0,.07.48.35.35,0,0,0,.48-.09.35.35,0,0,0-.07-.48.35.35,0,0,0-.48.09'/%3E%3Cpath classname='cls-13' d='M102,11.47c0-.74-2.16-1.19-3.33-1.16-1.34,0-2.7.72-2.19,2.1a1.65,1.65,0,0,0,1.29.89c1.73.31,4.31-1.41,4.23-1.83'/%3E%3Cpath classname='cls-10' d='M96.8,13a1.2,1.2,0,0,1-.39-.52,1.35,1.35,0,0,1,.1-1.29,2.69,2.69,0,0,1,2.16-.91,5.59,5.59,0,0,1,3.23.85.5.5,0,0,1,.17.39c0,.1-.06.23-.22.39a5.77,5.77,0,0,1-4.09,1.52A2.12,2.12,0,0,1,96.8,13Zm4.91-1.84a5.88,5.88,0,0,0-3-.73,2.6,2.6,0,0,0-2,.84,1.23,1.23,0,0,0-.08,1.16,1.6,1.6,0,0,0,1.23.85,5.73,5.73,0,0,0,4-1.47c.16-.16.19-.25.18-.28h0a.34.34,0,0,0-.13-.29A.27.27,0,0,0,101.71,11.11Z'/%3E%3Cpath classname='cls-13' d='M96.18,14a.39.39,0,0,1-.54-.13.41.41,0,0,1,.15-.54.38.38,0,0,1,.53.12.41.41,0,0,1-.14.55'/%3E%3Cpath classname='cls-14' d='M95.5,12.19a.63.63,0,0,1-.88-.2.67.67,0,0,1,.24-.89.63.63,0,0,1,.88.2.66.66,0,0,1-.24.89'/%3E%3Cpath classname='cls-15' d='M95.5,12.19a.63.63,0,0,1-.88-.2.67.67,0,0,1,.24-.89.63.63,0,0,1,.88.2A.66.66,0,0,1,95.5,12.19Z'/%3E%3Cpath classname='cls-9' d='M109.14,17.34c1.7,1.08,1.58.11,4.23-2.08,3.61-3-.11-3.83-2.91-4.46a6,6,0,0,0-6,1.72A9.11,9.11,0,0,0,101.91,17a3.87,3.87,0,0,0,.51,3.22,3.71,3.71,0,0,0,4.41,1.38,3.31,3.31,0,0,0,2.5-4.08'/%3E%3Cpath classname='cls-13' d='M106.49,14.08c3,2.33,3.54,2.09,5.08.75,2.15-1.87-.17-2.51-1.25-2.76a5.83,5.83,0,0,0-3.62,0c-.83.3-1.34,1.07-.21,2'/%3E%3Cpath classname='cls-10' d='M106.39,14.11c-.6-.49-.67-.92-.63-1.19a1.26,1.26,0,0,1,.91-.9,6,6,0,0,1,3.67,0c.92.22,2,.56,2.18,1.28.11.47-.19,1-.89,1.63-1.54,1.34-2.17,1.64-5.19-.74h0ZM112,12.84a4.73,4.73,0,0,0-1.73-.69,5.66,5.66,0,0,0-3.56,0,1.11,1.11,0,0,0-.8.76c-.05.33.16.71.62,1.06h0c2.93,2.31,3.45,2.07,5,.75.65-.57.94-1,.84-1.45A1,1,0,0,0,112,12.84Z'/%3E%3Cpath classname='cls-13' d='M114.17,13.39a.34.34,0,0,1-.48,0,.35.35,0,0,1,0-.49.34.34,0,0,1,.48,0,.36.36,0,0,1,0,.49'/%3E%3Cpath classname='cls-13' d='M104.88,13.85c.72-.19,1.6,1.89,1.8,3,.23,1.32-.17,2.78-1.62,2.55a1.65,1.65,0,0,1-1.14-1.08c-.64-1.64.54-4.5,1-4.51'/%3E%3Cpath classname='cls-10' d='M104.46,19.24a2,2,0,0,1-.61-.85,5.8,5.8,0,0,1,.68-4.31c.13-.2.24-.29.34-.3a.52.52,0,0,1,.42.09,5.59,5.59,0,0,1,1.46,3,2.7,2.7,0,0,1-.45,2.3,1.41,1.41,0,0,1-1.26.35A1.26,1.26,0,0,1,104.46,19.24Zm.84-5.18-.09-.07a.42.42,0,0,0-.31-.07h0s-.11.05-.23.23a5.69,5.69,0,0,0-.66,4.17,1.59,1.59,0,0,0,1.08,1,1.23,1.23,0,0,0,1.12-.31,2.52,2.52,0,0,0,.42-2.16A6,6,0,0,0,105.3,14.06Z'/%3E%3Cpath classname='cls-13' d='M103.55,20.06a.38.38,0,0,0,.22.5.41.41,0,0,0,.51-.25.39.39,0,0,0-.23-.5.4.4,0,0,0-.5.25'/%3E%3Cpath classname='cls-14' d='M105.46,20.36a.63.63,0,0,0,.37.82.66.66,0,0,0,.83-.4.64.64,0,0,0-.38-.83.66.66,0,0,0-.82.41'/%3E%3Cpath classname='cls-15' d='M105.46,20.36a.63.63,0,0,0,.37.82.66.66,0,0,0,.83-.4.64.64,0,0,0-.38-.83A.66.66,0,0,0,105.46,20.36Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E" alt="">
              
            </Image>
           <Link to="/product">
           <Button 
          rounded={"none"}
          borderRadius="10px"
          w={"100%"}
          mt={8}
          size={"lg"}
          py={"5"}
          bg={"#ED7745"}
         color="white"
          textTransform={"uppercase"}
          _hover={{
            transform: "translateY(2px)",
            boxShadow: "lg",
          }}
        >
          CONTINUE SHOPPING
        </Button>
           </Link>

          </VStack>

         </Box>
      </Box>
      </Box>
       
    </div>
  )
}

export default EmptyCart