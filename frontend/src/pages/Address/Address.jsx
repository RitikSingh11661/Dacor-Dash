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
// import Swal from "sweetalert2";
// import CartMap from "../../Components/CartMap/Cartmap";
import styles from "./Address.module.css";
// import { useDispatch, useSelector, shallowEqual } from "react-redux";
// import { postRequestAddress } from "../../Redux/UserReducer/action";
// import { useEffect } from "react";
// import { getCartProducts } from "../../Redux/CartReducer/Action";

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
  // let dispatch = useDispatch();
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

  // let totalprice;
  // if (products.length == 0) {
  //     totalprice = 0;
  // } else {
  //     totalprice = products.reduce((acc, el) => {
  //         return acc + Number(el.price);
  //     }, 0);
  // }

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
        // dispatch(postRequestAddress(data));
        toast({
          title: "Please Choose a Payment Method",
          description: "",
          status: "warning",
          variant: "left-accent",
          duration: 2500,
          isClosable: true,
          position: "top",
        });
        // setdata(initialState);
        navigate("/paymentmethod");
      }, 2000);
    }

    //  Swal.fire("", "Product added!", "success");
  };

  return (
    <div>
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
                width: "100%",
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
                  name="firstname"
                  value={data.firstname}
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

        <div className="paySummary">
          <div className="priceDatacont">
            <div>Cart Total </div>
            {/* <div>₹{tPrice}</div> */}
          </div>
          <div className="priceDatacont">
            <div>Discounts </div>
            <div>-₹{0}</div>
          </div>
          <div className="priceDatacont">
            <div>Delivery Charges </div>
            <div
              style={{
                color: "#359d40",
                fontWeight: "bold",
              }}
            >
              FREE
            </div>
          </div>
          <div className="priceDatacont">
            <div>Total Payable Amount </div>
            {/* <div>₹{tPrice}</div> */}
          </div>
          <div className="priceDatacont">
            <div className="makeBold">Booking Amount (Pay Now) </div>

            {/* <div className="makeBold">₹{tPrice}</div> */}
          </div>
        </div>
      </div>

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
        >
          SAVE AND CONTINUE
        </button>
      </div>
    </div>
  );
};

export default Address;
