import {
  Box,
  AccordionPanel,
  AccordionIcon,
  AccordionButton,
  AccordionItem,
  Accordion,
  Text,
  Button,
  Center,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  PinInput,
  PinInputField,
  Radio,
  RadioGroup,
  Select,
  Spinner,
  Stack,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Stepper from "../../components/Stepper";
// import Swal from "sweetalert2";
// import CartMap from "../../Components/CartMap/Cartmap";
import styles from "./Address.module.css";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { postRequestAddress } from "../../redux/ShippingReducer/action";

// import { getCartProducts } from "../../redux/ShippingReducer/action";

const initialState = {
  firstname: "",
  lastname: "",
  address1: "",
  zipcode: "",
  city: "",
  phone: "",
};

const Address = () => {
  const [isButLoading, setIsButLoading] = useState(false);
  const [data, setdata] = useState(initialState);
  let dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  // const { products, isLoading, isError } = useSelector((store) => {
  //     return {
  //         products: store.CartReducer.products,
  //         isLoading: store.CartReducer.isLoading,
  //         isError: store.CartReducer.isError,
  //     };
  // }, shallowEqual);
  // useEffect(() => {
  //     dispatch(getCartProducts());
  // }, []);

  let totalprice;
  // if (products.length == 0) {
  //     totalprice = 0;
  // } else {
  //     totalprice = products.reduce((acc, el) => {
  //         return acc + Number(el.price);
  //     }, 0);
  // }

  const address = useSelector((store) => store.shippingReducer.address);
  console.log(address);
  // console.log(store);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata((prev) => {
      return { ...prev, [name]: name === "phone" ? +value : value };
    });
  };

  const handleSubmit = (e) => {
    setIsButLoading(true);
    e.preventDefault();
    if (
      data.firstname === "" ||
      data.lastname === "" ||
      data.address1 === "" ||
      data.zipcode === "" ||
      data.phone === "" ||
      data.city === ""
    ) {
      // setTimeout(() => {
      setIsButLoading(false);
      toast({
        title: "Shipping Details Missing",
        description: "Please fill all the details",
        status: "warning",
        variant: "left-accent",
        duration: 2500,
        isClosable: true,
        position: "top",
      });
      // }, 2000);
    } else if (
      data.firstname !== "" &&
      data.lastname !== "" &&
      data.address1 !== "" &&
      data.zipcode !== "" &&
      data.phone !== "" &&
      data.city !== ""
    ) {
      setTimeout(() => {
        setIsButLoading(false);
        dispatch(postRequestAddress(data));
        toast({
          title: "Please Choose a Payment Method",
          description: "",
          status: "warning",
          variant: "left-accent",
          duration: 2500,
          isClosable: true,
          position: "top",
        });
        setdata(initialState);
        navigate("/payment");
      }, 2000);
    }

    //  Swal.fire("", "Product added!", "success");
  };

  return (
    <div>
      <Stepper />
      <Divider />

      <div
        style={{
          border: "0px solid green",
          display: "flex",
          // justifyContent: "space-around",
        }}
      >
        <VStack
          align="flex-start"
          border={"0px solid rgb(119, 9, 9)"}
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
          borderRadius={"0px"}
          marginBottom={"40px"}
          marginTop={"20px"}
          marginLeft={"20px"}
          spacing={10}
          padding={10}
          width={500}
        >
          <VStack>
            <h3
              style={{
                border: "0px solid red",
                width: "100%",
                fontSize: "26px",
                fontWeight: "600",
                height: "50px",
                borderBottom: "0.5px solid grey",
              }}
            >
              Shipping Address
            </h3>

            <HStack>
              <FormControl>
                <FormLabel>First Name*</FormLabel>
                <Input
                  name="firstname"
                  value={data.firstname}
                  onChange={handleChange}
                  style={{
                    border: "1px solid #ED7745",
                    height: "35px",
                    width: "200px",
                    borderRadius: "0px",
                  }}
                  _focusVisible={{
                    boxShadow: "0 0 0 1px #ED7745",
                    border: "2px solid transparent",
                  }}
                  placeholder="First Name"
                />
              </FormControl>
              <FormControl>
                <FormLabel style={{ marginLeft: "22px" }}>Last Name*</FormLabel>
                <Input
                  name="lastname"
                  value={data.lastname}
                  onChange={handleChange}
                  style={{
                    border: "1px solid #ED7745",
                    height: "35px",
                    width: "200px",
                    marginLeft: "20px",
                    borderRadius: "0px",
                  }}
                  _focusVisible={{
                    boxShadow: "0 0 0 1px #ED7745",
                    border: "2px solid transparent",
                  }}
                  placeholder="Last Name"
                />
              </FormControl>
            </HStack>

            <FormControl>
              <FormLabel>Address*</FormLabel>
              <Input
                name="address1"
                value={data.address1}
                onChange={handleChange}
                style={{
                  border: "1px solid #ED7745",
                  height: "35px",
                  width: "430px",
                  borderRadius: "0px",
                }}
                _focusVisible={{
                  boxShadow: "0 0 0 1px #ED7745",
                  border: "2px solid transparent",
                }}
                size="lg"
                placeholder="Enter Your Address"
              />
            </FormControl>
            <VStack>
              <HStack>
                <FormControl>
                  <FormLabel>Country</FormLabel>
                  <Select
                    style={{
                      border: "1px solid #ED7745",
                      height: "35px",
                      width: "200px",
                      borderRadius: "0px",
                    }}
                    _focusVisible={{
                      boxShadow: "0 0 0 1px #ED7745",
                      border: "2px solid transparent",
                    }}
                    placeholder="India"
                    size="lg"
                  ></Select>
                </FormControl>
                <FormControl>
                  <FormLabel style={{ marginLeft: "22px" }}>
                    Zip Code*
                  </FormLabel>
                  <Input
                    name="zipcode"
                    value={data.zipcode}
                    onChange={handleChange}
                    style={{
                      border: "1px solid #ED7745",
                      height: "35px",
                      width: "200px",
                      marginLeft: "20px",
                      borderRadius: "0px",
                    }}
                    _focusVisible={{
                      boxShadow: "0 0 0 1px #ED7745",
                      border: "2px solid transparent",
                    }}
                    type="city"
                    size="lg"
                    placeholder="Zip Code"
                  />
                </FormControl>
              </HStack>
              <HStack>
                <FormControl>
                  <FormLabel>City*</FormLabel>
                  <Input
                    name="city"
                    value={data.city}
                    onChange={handleChange}
                    style={{
                      border: "1px solid #ED7745",
                      height: "35px",
                      width: "200px",
                      borderRadius: "0px",
                    }}
                    _focusVisible={{
                      boxShadow: "0 0 0 1px #ED7745",
                      border: "2px solid transparent",
                    }}
                    size="lg"
                    placeholder="City"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel style={{ marginLeft: "22px" }}> State</FormLabel>

                  <Select
                    style={{
                      border: "1px solid #ED7745",
                      height: "35px",
                      width: "200px",
                      marginLeft: "20px",
                      borderRadius: "0px",
                    }}
                    _focusVisible={{
                      boxShadow: "0 0 0 1px #ED7745",
                      border: "2px solid transparent",
                    }}
                    placeholder="State"
                    size="lg"
                  >
                    <option value="Select">Uttar Pradesh</option>
                    <option value="Select">Madhya Pradesh</option>
                    <option value="Select">Rajasthan</option>
                    <option value="Select">Maharastra</option>
                    <option value="Select">Haryana</option>
                  </Select>
                </FormControl>
              </HStack>
            </VStack>
          </VStack>

          <VStack>
            <HStack width="full">
              <FormControl>
                <FormLabel>Phone*</FormLabel>
                <Input
                  name="phone"
                  value={data.phone}
                  onChange={handleChange}
                  style={{
                    border: "1px solid #ED7745",
                    height: "35px",
                    width: "200px",
                    borderRadius: "0px",
                  }}
                  _focusVisible={{
                    boxShadow: "0 0 0 1px #ED7745",
                    border: "2px solid transparent",
                  }}
                  size="lg"
                  placeholder="Phone"
                />
                <Box
                  style={{
                    border: "1px solid #ED7745",
                    marginTop: "30px",
                    height: "35px",
                    backgroundColor: " #f7f7f7",
                    padding: "10px",
                    borderRadius: "0px",
                    width: "200px",
                  }}
                  _focusVisible={{
                    boxShadow: "0 0 0 1px #ED7745",
                    border: "2px solid transparent",
                  }}
                >
                  <Heading as="h1" size="sm">
                    IS THIS A GIFT?
                  </Heading>
                  <RadioGroup defaultValue="2">
                    <Stack spacing={5} direction="row" marginTop={"10px"}>
                      <Radio colorScheme="gray" value="1">
                        Yes
                      </Radio>
                      <Radio colorScheme="gray" value="2">
                        No
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </Box>
              </FormControl>
            </HStack>

            <HStack></HStack>
          </VStack>
        </VStack>
        <VStack
          align="flex-start"
          border={"0px solid rgb(120, 18, 18)"}
          // boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
          borderRadius={"0px"}
          marginBottom={"40px"}
          marginTop={"20px"}
          spacing={10}
          padding={10}
          width={500}
        >
          <VStack>
            <h3
              style={{
                border: "0px solid red",
                width: "80%",
                fontSize: "26px",
                fontWeight: "600",
                borderBottom: "0.5px solid grey",
              }}
            >
              Buying for your business?
            </h3>

            <HStack>
              <FormControl>
                {/* <FormLabel>GSTIN</FormLabel> */}
                <Input
                  // name="firstname"
                  // value={data.firstname}
                  // onChange={handleChange}
                  style={{
                    border: "1px solid #ED7745",
                    height: "35px",
                    width: "430px",
                    borderRadius: "0px",
                  }}
                  _focusVisible={{
                    boxShadow: "0 0 0 1px #ED7745",
                    border: "2px solid transparent",
                  }}
                  placeholder="Enter GSTIN (optional)"
                />
              </FormControl>
            </HStack>
            <p>
              Note: GSTIN cannot be changed after placing order. Please provide
              a valid GSTIN - if you don't, we will not be able to pass the GST
              credit to you. GST Registration state must match the billing
              state. For any GSTIN belonging to a SEZ, please write to us at
              hello@urbanladder.com before placing the order and we will ensure
              appropriate processing of invoice(s).
            </p>
          </VStack>
        </VStack>

        {/* ..........................Price detail card...................................... */}

        

        
        <Box width="350px" border="0px solid red" marginTop="50px">
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    display="flex"
                    justifyContent="space-between"
                    flex="1"
                    textAlign="left"
                  >
                    <Heading as="h1" fontSize="16px">
                      Order Summary
                    </Heading>
                    {/* {<Heading fontSize="14px">{cartData.length} Items</Heading>} */}
                  </Box>
                  {/* <AccordionIcon /> */}
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                display="flex"
                justifyContent={"space-between"}
              >
                {/* <Image
                  // src={img}
                  alt="Image"
                  boxSize="90px"
                  objectFit="cover"
                /> */}
                {/* <Text>{name}</Text> */}
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    display="flex"
                    justifyContent="space-between"
                    flex="1"
                    textAlign="left"
                    // border="1px solid red"
                  >
                    <Heading as="h1" fontSize="16px">
                      Order Total
                    </Heading>
                    {/* {<Heading fontSize="14px">₹{totalPrice}</Heading>} */}
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      {/* <Text>Bag MRP ({cartData.length} items)</Text>
                      <Text>₹{totalPrice}</Text> */}
                    </Box>
                    {/* {<Heading fontSize="14px">Rs{totalPrice + 50}</Heading>} */}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>

              <AccordionPanel pb={4}>
                <Text display={"flex"} justifyContent="space-between">
                  {/* <span>Bag MRP ({cartData.length} items)</span> */}
                  {/* <span>Rs{totalPrice}</span> */}
                </Text>
                <Text display={"flex"} justifyContent="space-between">
                  <span>After Discount</span>
                  {/* <span>Rs{totalPrice - 100}</span> */}
                </Text>
                <Text display={"flex"} justifyContent="space-between">
                  <span>Delievery Charges</span>
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "16px",
                      color: "#2de02d",
                    }}
                  >
                    {/* {totalPrice - totaldiscount} */}
                    Free
                  </span>
                </Text>
                <Text display={"flex"} justifyContent="space-between">
                  <span>Saving At this Time</span>
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "16px",
                      color: "#2de02d",
                    }}
                  >
                    {/* {totalPrice - totaldiscount} */}
                    Rs.100
                  </span>
                </Text>
                <Text display={"flex"} justifyContent="space-between">
                  <span>Shipping</span>
                  <span>Rs.50</span>
                </Text>
                <Heading
                  display={"flex"}
                  justifyContent="space-between"
                  as="h1"
                  fontSize="16px"
                >
                  <span>Booking amount (Pay Now)</span> <span>Rs{}</span>
                  {/* <span>You Pay</span> <span>Rs{totalPrice + 50}</span>{" "} */}
                </Heading>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Box display="flex" gap="10px" mt="12px" p="12px 17px">
            <Text fontSize={"12px"}>
              Pay securely. Easy returns and exchange
            </Text>
            {/* <Image
            w="39px"
            h="37px"
            src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/pay-secure-lock.png"
            alt="image"
          /> */}
          </Box>
          <div
            style={{
              display: "flex",
              marginLeft: "50px",
              border: "2px solid #ED7745",
              width: "270px",
            }}
          >
            <div style={{ width: "30px" }}>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI4AAACOCAMAAADQI8A6AAAAY1BMVEX///8AAACIiIi0tLS5ubn39/ePj49DQ0MlJSXMzMzm5uYKCgrCwsJlZWWBgYHT09NxcXEbGxvb29tQUFB3d3fx8fEvLy8+Pj5XV1eYmJgqKio5OTlISEirq6sWFhYRERGioqLX8a7DAAAEKklEQVR4nO2baZuqIBiGy12yXJLSVv//rzwJqICmqME0Z97nk8NFcsv6LsxmAwKBQCAQ6C/IzULNQuowYX5Jd5oV+J4i0WFrRjtHZZxuhmhesr6nb4iiKZrIJM32MjV/jrSev9er4kTbuY/ToJTUKqcHdaXwnjR0G68VkkqFdprXhwd1S9fxSjbBORjAcc91S8H45KE4CgtwPY6vjOMZwNnclHGSyNYu56qMY06AAzhacY6epV3eRRnny/YdI7vylx0SgDOGo36EFqWnXeVJGcecAAdwtOIkkaNf6tbgXzyz1LdBwBmW85M4yC7zhFdeEJybWLpGVpUp4mAr1byrEO2KQSAZBx1NwNR6DgW5JBxspGuYwkmc3CDN9tRfQCJOaJJmKGIk4tAA6bMMY72yaRDw5I7jkANsKlL4CdGg26O3ugQcRHzAK9aPs0nIh/ci7CIOYfZ7XahBFsGxfzGOy2t2g/xP+j+fjeOWN59T/uaUGRR2rMS/5V698aK7tfePh1Lc9Gbj7KVNIlXOfaHu2Evvya55PvONz8XJHvKmpbr+w+u7bS/pxmwuTriTX6Zo74y5Hd2xYApnPNfUZhuW4ezq9OfzoY6De2MsqnFHluHsXfzSXR2HNvM69hBGRcNQYRQ2KyNbhUPK1U13lvk6143GbZeQ/BT9pm1iEofWpHuC1eLsSJeU5DlwDeLQ8anIM7feSQENtLHEqxkc4tOmpDPcU4dD05Yeeb6vwZk3lTFBuBALJePM7pz7Km8FzsyFznDQMM59NQ6v1YPFI5jB4acyh1N1TS2cysuOUHZEcAu71pO8nvoFwWYMhx/tDxgY9A1bv+bJ2p+SDDzbBvNRHBqcuPIvW2V+eYzAi7Kw9a/LLLSbP4RD4p4JihnyfgBnmXHqXhqGx6Odfc+0fWwuTlCcVFQzP6JBnEWaZWAMq7ld8RFPYsyx3rcu3AhO0LT/GccmPL1rKOkcyvc417ip8yk/q2pPz8Ip28054X2Jtzh5h/wxtw/HVn4sDmX2ehWOrOT1XIn7BMXxj6JyodbPe6GCAAdwAAdwAOd7cbCQM+2MwczuSu2oPWTcmK8et9+E+Iyu3VSfjSPbUWIopBM7p7EvFvvsZJbNH2sZDr5I72EmoyMXB7Td3gVrmnDAgVzuLMJ552d5cvGWmEuuLxfT18S96qNe6Pve6WW2aO/0Qn8P2ju91BP1YPrRsGW90/hFrZqwp+x/MW8wk0YlYHNffg1zWuavrFi46NP90hbu/7QpRFTx5Z1ZF/K3kKwmKfLr9x3AARzAARz9ODRQrp7WWyEaDBu4hcGLHsu5/u5huYuJAF9Fj7lrftArllo6T0CjnrGkVZP/xiebA1q1nx7UsRDihzU1VPz00a9C7eYJskxMoETl3z+pMIo0KzNxJwcEAoFAIBAIBPo/9Q8xm2xEVBgZ+QAAAABJRU5ErkJggg=="
                alt=""
              />
            </div>
            <div>EMIs from ₹498</div>
            <a style={{ color: "#ED7745" }} href="">
              Know More
            </a>
          </div>
        </Box>
      </div>

      {/* .................................Button......................................... */}

      <div style={{ marginLeft: "130px" }}>
        <button
          style={{
            border: "1px solid #ED7745",
            backgroundColor: "#ED7745",
            border: "none",
            color: "white",
            height: "40px",
            width: "250px",
            padding: "10px , 20px",
            textAlign: "center",
            borderRadius: "15px",
            fontSize: "19px",
            margin: "4px , 2px",
            cursor: "pointer",
            borderRadius: "2px",
          }}
          onClick={handleSubmit}
        >
          {!isButLoading && `    SAVE AND CONTINUE `}
          {isButLoading && (
            <Spinner
              thickness="4px"
              speed="0.55s"
              emptyColor="gray.200"
              color="#17274a"
              size="md"
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default Address;
