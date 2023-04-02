import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Button, Checkbox, CheckboxGroup, Divider, HStack, Radio, RadioGroup, Select, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const Filter_Sort = () => {
    const [searchParams,setSearchParams]=useSearchParams();

    const searchParamsCategoryfilter = searchParams.getAll("category")
    const searchParamsBrandfilter = searchParams.getAll("brand")

    const [orderByVal,setOrderByVal] = useState(searchParams.get("orderBy") ||"")
    const [categoryVal,setCategoryVal] = useState(searchParamsCategoryfilter||[])
    const [brandVal,setBrandVal] = useState(searchParamsBrandfilter||[])

    const [showCategory,setShowCategory] = useState(false)
    const [showBrand,setShowBrand]=useState(false)
    const [showSort,setShowSort]=useState(false)

    const handleCategoryFilter = (value)=>{
        setCategoryVal(value);
    }

    const handleBrandFilter = (value)=>{
      setBrandVal(value);
  }

    const handleSort = (value)=>{
        setOrderByVal(value);
    };

    useEffect(()=>{
        let params = {};

        if(categoryVal.length && orderByVal.length && brandVal.length){
            params.category = categoryVal;
            params.orderBy =orderByVal;
            params.brand=brandVal;
        }
        else if(categoryVal.length && orderByVal.length){
          params.category = categoryVal;
          params.orderBy =orderByVal;
        }
        else if(orderByVal.length && brandVal.length){
          params.orderBy =orderByVal;
          params.brand=brandVal;
        }
        else if(brandVal.length && categoryVal.length){
          params.category = categoryVal;
          params.brand=brandVal;
        }
        else if(categoryVal.length){
          params.category = categoryVal;
        }
        else if(brandVal.length){
          params.brand=brandVal;
        }
        else if(orderByVal.length){
          params.orderBy =orderByVal;
        }

        setSearchParams(params)

    },[orderByVal,categoryVal,brandVal])

    const handleMouseEnterCategory=()=>{
        setShowCategory(true)
    }

    const handleMouseLeaveCategory = ()=>{
        setShowCategory(false)
    }
    const handleMouseEnterBrand=()=>{
        setShowBrand(true)
    }

    const handleMouseLeaveBrand = ()=>{
        setShowBrand(false)
    }
    const handleMouseEnterSort=()=>{
        setShowSort(true)
    }

    const handleMouseLeaveSort = ()=>{
        setShowSort(false)
    }

  return (
    <div style={{position:"sticky",top:"0",zIndex:"5"}}>
      <HStack
        color="#494848"
        p={{base:"0 0",md:"0 0",lg:"0 17%"}} 
        justifyContent={"space-between"}
        fontFamily={`"Mr Eaves XL Modern",sans-serif`}
        >
        <Box
          >
          <Text textAlign={"left"} fontSize="13px">
            FILTERS
          </Text>
          <HStack mt="5px">
            <Box onMouseEnter={handleMouseEnterCategory}
          onMouseLeave={handleMouseLeaveCategory}>
              <CheckboxGroup value={categoryVal} onChange={handleCategoryFilter} colorScheme="orange">
                <Stack direction={["column"]}>
                  <Button
                    fontWeight="none"
                    color="#ffffff"
                    fontSize="13px"
                    size='sm'
                    bg="#fD7745"
                    textAlign="left"
                  >
                    {" "}
                    Category
                    <ChevronDownIcon ml="2"/>
                  </Button>
                  <Box fontSize="13px" p="2%" visibility={showCategory?"visible":"hidden"}>
                 <Stack p="3" mt="-8px " bgColor='white' zIndex="10" maxW="200%" position='absolute' maxH='200px' overflow='scroll' border="1px solid black">
                 <Text color="#fD7745" textAlign={"left"} fontSize="13px">
                   Primary Category
                 </Text>
                 <Checkbox  value="jwellery">
                    Jwellery
                  </Checkbox>
                  <Checkbox  value="fashion">
                    Fashion
                  </Checkbox>
                  <Checkbox  value="grocery&decor">
                    Grocery&Decor
                  </Checkbox>
                  <Checkbox  value="electronics">
                    Electronics
                  </Checkbox>
                  <Checkbox  value="watchbands">
                    Bedsheets
                  </Checkbox>
                  <Checkbox  value="Hard Cover">
                    Curtains
                  </Checkbox>
                 </Stack>
                  </Box>
                </Stack>
              </CheckboxGroup>
            </Box>
            <Box onMouseEnter={handleMouseEnterBrand}
          onMouseLeave={handleMouseLeaveBrand}>
              <CheckboxGroup value={brandVal} onChange={handleBrandFilter} colorScheme="orange">
                <Stack direction={["column"]}>
                  <Button
                    fontWeight="none"
                    color="#ffffff"
                    fontSize="13px"
                    size='sm'
                    bg="#fD7745"
                    textAlign="left"
                  >
                    {" "}
                    Brand
                    <ChevronDownIcon ml="2"/>
                  </Button>
                  <Box p="2%" visibility={showBrand?"visible":"hidden"} >
                 <Stack p="3"  mt="-8px " bgColor='white' zIndex="10" maxW="200%" position='absolute' maxH='200px' overflow='scroll' border="1px solid black">
                 <Text color="#fD7745" textAlign={"left"} fontSize="13px">
                   Brand Name
                 </Text>
                  <Checkbox value="MANSIYAORANGE">
                  MANSIYAORANGE
                  </Checkbox>
                  <Checkbox value="Vighnaharta">
                  Vighnaharta
                  </Checkbox>
                  <Checkbox  value="Mahi">
                  Mahi
                  </Checkbox>
                  <Checkbox value="Jewels Galaxy">
                  Jewels Galaxy
                  </Checkbox>
                  <Checkbox value="STYLISH TEENS">
                  STYLISH TEENS
                  </Checkbox>
                  <Checkbox value="SILVER SHINE">
                  SILVER SHINE
                  </Checkbox>
                  <Checkbox value="Zcarina">
                  Zcarina
                  </Checkbox>
                  <Checkbox value="Blue Shine">
                  Blue Shine
                  </Checkbox>
                 </Stack>
                  </Box>
                </Stack>
              </CheckboxGroup>
            </Box>
          </HStack>
        </Box>
       
        <VStack textAlign="left">
        <Text textAlign={"right"} fontSize="13px">
            SORT BY
          </Text>
            <Box onMouseEnter={handleMouseEnterSort}
          onMouseLeave={handleMouseLeaveSort} >
                <Stack direction={["column"]}>
                  <Button
                    fontWeight="none"
                    fontSize="13px"
                    size='sm'
                    bg="#ffffff"
                    border="1px solid black"
                    textAlign="left"
                  >
                    {" "}
                    Recommended
                    <ChevronDownIcon ml="2"/>
                  </Button>
                  <Box p="2%"  visibility={showSort?"visible":"hidden"}>
                 <Stack p="3" mt="-8px " bgColor='white' zIndex="10" maxW="200%" position='absolute' maxH='200px' overflow='scroll' border="1px solid black">
                 <RadioGroup value={orderByVal} onChange={handleSort} colorScheme={"orange"}>
                <Stack direction="column">
                <Radio value="">
                    Recommended
                  </Radio>
                  <Radio py="2"  value="asc">
                    Price: Low To High
                  </Radio>
                  <Radio value="desc">
                    Price: High To Low
                  </Radio>
                  <Radio py="2" >
                    New Arrivals
                  </Radio>
                  <Radio >
                   Discount
                  </Radio>
                </Stack>
                  </RadioGroup>
                </Stack>
                </Box>
            </Stack>
            </Box>
          
        </VStack>
       
      </HStack>
    </div>
  );
}

export default Filter_Sort
