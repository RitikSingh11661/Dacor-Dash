import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Button, Checkbox, CheckboxGroup, Divider, HStack, Radio, RadioGroup, Select, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const Filter_Sort = () => {
    const [searchParams,setSearchParams]=useSearchParams();

    const searchParamsfilter = searchParams.getAll("filter")
    const [sortVal,setSortVal] = useState(searchParams.get("sort") || "")
    const [filterVal,setFilterVal] = useState(searchParamsfilter||[])
    
    console.log(sortVal)
    const [order,setOrder] = useState("asc");

    const [showCategory,setShowCategory] = useState(false)
    const [showBrand,setShowBrand]=useState(false)
    const [showSort,setShowSort]=useState(false)

    const handleFilter = (value)=>{
        setFilterVal(value);
    }

    const handleSort = (value)=>{
        setSortVal(value);
    };

    useEffect(()=>{
        let params = {};

        if(filterVal.length && sortVal.length){
            params.filter = filterVal;
            params.sort = sortVal;
        }
        else if(filterVal.length){
            params.filter = filterVal;
        }
        else if(sortVal.length){
            params.sort = sortVal;
        }

        setSearchParams(params)

    },[filterVal,sortVal])

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
    <div>
      <HStack
        color="#494848"
        p="0 17%"
        justifyContent={"space-between"}
        fontFamily={`"Mr Eaves XL Modern",sans-serif`}
        >
        <Box
          >
          <Text textAlign={"left"} fontSize="13px">
            FILTERS
          </Text>
          <HStack mt="5px" position="relative">
            <Box onMouseEnter={handleMouseEnterCategory}
          onMouseLeave={handleMouseLeaveCategory}>
              <CheckboxGroup value={filterVal} onChange={handleFilter} colorScheme="orange">
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
              <CheckboxGroup value={filterVal} onChange={handleFilter} colorScheme="orange">
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
                 <RadioGroup value={sortVal} onChange={handleSort} colorScheme={"orange"}>
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
      <Divider p="0 17%" />
    </div>
  );
}

export default Filter_Sort
