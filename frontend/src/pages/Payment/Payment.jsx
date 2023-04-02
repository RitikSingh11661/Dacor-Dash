import React from "react";
import {
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  PinInput,
  PinInputField,
  Select,
  Spinner,
  StylesProvider,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
  Box,
  Text,
  AccordionPanel,
  AccordionIcon,
  AccordionButton,
  AccordionItem,
  Accordion,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import styles from "./Payment.module.css";
import { getRequestAddress } from "../../redux/ShippingReducer/action";
// import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Stepper from "../../components/Stepper";
import ShippingDetailsCard from "../Address/ShippingDetailsCard";
import { useDispatch, useSelector } from "react-redux";

const Payment = () => {
  const [isButLoading, setIsButLoading] = useState(false);
 const address = useSelector((store) => store.shippingReducer.address);
  const navigate = useNavigate();
  const dispatch = useDispatch();
 
  console.log(address)
  useEffect(() => {
    dispatch(getRequestAddress());
  },[])
  const handlePay = () => {
    setIsButLoading(true);
    setTimeout(() => {
      setIsButLoading(false);
      // Swal.fire("Congratulations!", "Payment successfull!", "success");
      navigate("/ordersuccessfull");
    }, 2000);
  };

  return (
    <div>
      <Stepper />
      <div id={styles.main}>
        {address?.length > 0 ? (
          <div id={styles.first}>
            {address.map((ele) => {
              return (
                <div className={styles.single_card_address}>
                  <ShippingDetailsCard key={ele.id} {...ele} />
                </div>
              );
            })}
          </div>
        ) : (
          <p
            style={{
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "bold",
              color: "#ED7745",
             
            }}
          >
            There is no Address
          </p>
        )}

        <div id={styles.method}>
          <Tabs
            style={{
              paddingRight: "10px",
              border: "0px solid red",
            }}
            variant="unstyled"
          >
            <TabList
              style={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Tab
                style={{
                  margin: "30px auto",
                  padding: "10px",
                  border: "0px solid red",
                  width: "25%",
                }}
                _selected={{
                  color: "black",
                  bg: "#E8EAF6",
                  borderRadius: "5px",
                }}
              >
                <img
                  src="https://images.hindustantimes.com/tech/img/2022/06/13/1600x900/card-3212764_960_720_1655109881102_1655109902321.webp"
                  alt=""
                />
              </Tab>
              <Tab
                style={{
                  margin: "30px auto",
                  padding: "10px",
                  width: "25%",
                  border: "0px solid green",
                }}
                _selected={{
                  color: "white",
                  bg: "#E8EAF6",
                  borderRadius: "5px",
                }}
              >
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMTAwIDMyIiB4bWxucz0iaHR0cDomI3gyRjsmI3gyRjt3d3cudzMub3JnJiN4MkY7MjAwMCYjeDJGO3N2ZyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaW4gbWVldCI+PHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSAxMiA0LjkxNyBMIDQuMiA0LjkxNyBDIDMuNyA0LjkxNyAzLjIgNS4zMTcgMy4xIDUuODE3IEwgMCAyNS44MTcgQyAtMC4xIDI2LjIxNyAwLjIgMjYuNTE3IDAuNiAyNi41MTcgTCA0LjMgMjYuNTE3IEMgNC44IDI2LjUxNyA1LjMgMjYuMTE3IDUuNCAyNS42MTcgTCA2LjIgMjAuMjE3IEMgNi4zIDE5LjcxNyA2LjcgMTkuMzE3IDcuMyAxOS4zMTcgTCA5LjggMTkuMzE3IEMgMTQuOSAxOS4zMTcgMTcuOSAxNi44MTcgMTguNyAxMS45MTcgQyAxOSA5LjgxNyAxOC43IDguMTE3IDE3LjcgNi45MTcgQyAxNi42IDUuNjE3IDE0LjYgNC45MTcgMTIgNC45MTcgWiBNIDEyLjkgMTIuMjE3IEMgMTIuNSAxNS4wMTcgMTAuMyAxNS4wMTcgOC4zIDE1LjAxNyBMIDcuMSAxNS4wMTcgTCA3LjkgOS44MTcgQyA3LjkgOS41MTcgOC4yIDkuMzE3IDguNSA5LjMxNyBMIDkgOS4zMTcgQyAxMC40IDkuMzE3IDExLjcgOS4zMTcgMTIuNCAxMC4xMTcgQyAxMi45IDEwLjUxNyAxMy4xIDExLjIxNyAxMi45IDEyLjIxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSAzNS4yIDEyLjExNyBMIDMxLjUgMTIuMTE3IEMgMzEuMiAxMi4xMTcgMzAuOSAxMi4zMTcgMzAuOSAxMi42MTcgTCAzMC43IDEzLjYxNyBMIDMwLjQgMTMuMjE3IEMgMjkuNiAxMi4wMTcgMjcuOCAxMS42MTcgMjYgMTEuNjE3IEMgMjEuOSAxMS42MTcgMTguNCAxNC43MTcgMTcuNyAxOS4xMTcgQyAxNy4zIDIxLjMxNyAxNy44IDIzLjQxNyAxOS4xIDI0LjgxNyBDIDIwLjIgMjYuMTE3IDIxLjkgMjYuNzE3IDIzLjggMjYuNzE3IEMgMjcuMSAyNi43MTcgMjkgMjQuNjE3IDI5IDI0LjYxNyBMIDI4LjggMjUuNjE3IEMgMjguNyAyNi4wMTcgMjkgMjYuNDE3IDI5LjQgMjYuNDE3IEwgMzIuOCAyNi40MTcgQyAzMy4zIDI2LjQxNyAzMy44IDI2LjAxNyAzMy45IDI1LjUxNyBMIDM1LjkgMTIuNzE3IEMgMzYgMTIuNTE3IDM1LjYgMTIuMTE3IDM1LjIgMTIuMTE3IFogTSAzMC4xIDE5LjMxNyBDIDI5LjcgMjEuNDE3IDI4LjEgMjIuOTE3IDI1LjkgMjIuOTE3IEMgMjQuOCAyMi45MTcgMjQgMjIuNjE3IDIzLjQgMjEuOTE3IEMgMjIuOCAyMS4yMTcgMjIuNiAyMC4zMTcgMjIuOCAxOS4zMTcgQyAyMy4xIDE3LjIxNyAyNC45IDE1LjcxNyAyNyAxNS43MTcgQyAyOC4xIDE1LjcxNyAyOC45IDE2LjExNyAyOS41IDE2LjcxNyBDIDMwIDE3LjQxNyAzMC4yIDE4LjMxNyAzMC4xIDE5LjMxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSA1NS4xIDEyLjExNyBMIDUxLjQgMTIuMTE3IEMgNTEgMTIuMTE3IDUwLjcgMTIuMzE3IDUwLjUgMTIuNjE3IEwgNDUuMyAyMC4yMTcgTCA0My4xIDEyLjkxNyBDIDQzIDEyLjQxNyA0Mi41IDEyLjExNyA0Mi4xIDEyLjExNyBMIDM4LjQgMTIuMTE3IEMgMzggMTIuMTE3IDM3LjYgMTIuNTE3IDM3LjggMTMuMDE3IEwgNDEuOSAyNS4xMTcgTCAzOCAzMC41MTcgQyAzNy43IDMwLjkxNyAzOCAzMS41MTcgMzguNSAzMS41MTcgTCA0Mi4yIDMxLjUxNyBDIDQyLjYgMzEuNTE3IDQyLjkgMzEuMzE3IDQzLjEgMzEuMDE3IEwgNTUuNiAxMy4wMTcgQyA1NS45IDEyLjcxNyA1NS42IDEyLjExNyA1NS4xIDEyLjExNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA2Ny41IDQuOTE3IEwgNTkuNyA0LjkxNyBDIDU5LjIgNC45MTcgNTguNyA1LjMxNyA1OC42IDUuODE3IEwgNTUuNSAyNS43MTcgQyA1NS40IDI2LjExNyA1NS43IDI2LjQxNyA1Ni4xIDI2LjQxNyBMIDYwLjEgMjYuNDE3IEMgNjAuNSAyNi40MTcgNjAuOCAyNi4xMTcgNjAuOCAyNS44MTcgTCA2MS43IDIwLjExNyBDIDYxLjggMTkuNjE3IDYyLjIgMTkuMjE3IDYyLjggMTkuMjE3IEwgNjUuMyAxOS4yMTcgQyA3MC40IDE5LjIxNyA3My40IDE2LjcxNyA3NC4yIDExLjgxNyBDIDc0LjUgOS43MTcgNzQuMiA4LjAxNyA3My4yIDYuODE3IEMgNzIgNS42MTcgNzAuMSA0LjkxNyA2Ny41IDQuOTE3IFogTSA2OC40IDEyLjIxNyBDIDY4IDE1LjAxNyA2NS44IDE1LjAxNyA2My44IDE1LjAxNyBMIDYyLjYgMTUuMDE3IEwgNjMuNCA5LjgxNyBDIDYzLjQgOS41MTcgNjMuNyA5LjMxNyA2NCA5LjMxNyBMIDY0LjUgOS4zMTcgQyA2NS45IDkuMzE3IDY3LjIgOS4zMTcgNjcuOSAxMC4xMTcgQyA2OC40IDEwLjUxNyA2OC41IDExLjIxNyA2OC40IDEyLjIxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5MC43IDEyLjExNyBMIDg3IDEyLjExNyBDIDg2LjcgMTIuMTE3IDg2LjQgMTIuMzE3IDg2LjQgMTIuNjE3IEwgODYuMiAxMy42MTcgTCA4NS45IDEzLjIxNyBDIDg1LjEgMTIuMDE3IDgzLjMgMTEuNjE3IDgxLjUgMTEuNjE3IEMgNzcuNCAxMS42MTcgNzMuOSAxNC43MTcgNzMuMiAxOS4xMTcgQyA3Mi44IDIxLjMxNyA3My4zIDIzLjQxNyA3NC42IDI0LjgxNyBDIDc1LjcgMjYuMTE3IDc3LjQgMjYuNzE3IDc5LjMgMjYuNzE3IEMgODIuNiAyNi43MTcgODQuNSAyNC42MTcgODQuNSAyNC42MTcgTCA4NC4zIDI1LjYxNyBDIDg0LjIgMjYuMDE3IDg0LjUgMjYuNDE3IDg0LjkgMjYuNDE3IEwgODguMyAyNi40MTcgQyA4OC44IDI2LjQxNyA4OS4zIDI2LjAxNyA4OS40IDI1LjUxNyBMIDkxLjQgMTIuNzE3IEMgOTEuNCAxMi41MTcgOTEuMSAxMi4xMTcgOTAuNyAxMi4xMTcgWiBNIDg1LjUgMTkuMzE3IEMgODUuMSAyMS40MTcgODMuNSAyMi45MTcgODEuMyAyMi45MTcgQyA4MC4yIDIyLjkxNyA3OS40IDIyLjYxNyA3OC44IDIxLjkxNyBDIDc4LjIgMjEuMjE3IDc4IDIwLjMxNyA3OC4yIDE5LjMxNyBDIDc4LjUgMTcuMjE3IDgwLjMgMTUuNzE3IDgyLjQgMTUuNzE3IEMgODMuNSAxNS43MTcgODQuMyAxNi4xMTcgODQuOSAxNi43MTcgQyA4NS41IDE3LjQxNyA4NS43IDE4LjMxNyA4NS41IDE5LjMxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5NS4xIDUuNDE3IEwgOTEuOSAyNS43MTcgQyA5MS44IDI2LjExNyA5Mi4xIDI2LjQxNyA5Mi41IDI2LjQxNyBMIDk1LjcgMjYuNDE3IEMgOTYuMiAyNi40MTcgOTYuNyAyNi4wMTcgOTYuOCAyNS41MTcgTCAxMDAgNS42MTcgQyAxMDAuMSA1LjIxNyA5OS44IDQuOTE3IDk5LjQgNC45MTcgTCA5NS44IDQuOTE3IEMgOTUuNCA0LjkxNyA5NS4yIDUuMTE3IDk1LjEgNS40MTcgWiI+PC9wYXRoPjwvc3ZnPg"
                  alt=""
                />
              </Tab>
              <Tab
                style={{
                  margin: "30px auto",
                  padding: "10px",
                  width: "25%",
                  border: "0px solid blue",
                }}
                _selected={{
                  color: "white",
                  bg: "#E8EAF6",
                  borderRadius: "5px",
                }}
              >
                <img
                  width={"70%"}
                  src="https://m.economictimes.com/thumb/msid-74960608,width-1200,height-900,resizemode-4,imgsize-49172/upi-twitter.jpg"
                  alt=""
                />
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel
                style={{
                  boxShadow: "inset 10px 10px 13px 0px rgba(0,0,0,0.1)",
                  borderRadius: "15px",
                  margin: "20px",
                }}
              >
                <VStack>
                  <HStack id={styles.name}>
                    <FormControl>
                      <FormLabel style={{ marginLeft: "0px" }}>
                        Name on Card*
                      </FormLabel>
                      <Input
                        style={{
                          border: "1px solid #ED7745",
                          height: "50px",
                          width: "100%",
                          marginRight: "20px",
                        }}
                        _focusVisible={{
                          boxShadow: "0 0 0 1px #ED7745",
                          border: "2px solid transparent",
                        }}
                        type="city"
                        size="lg"
                        placeholder=" Name on Card"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel style={{ marginLeft: "0px" }}>
                        Card Type
                      </FormLabel>

                      <Select
                        style={{
                          border: "1px solid #ED7745",
                          height: "50px",
                          width: "100%",
                          marginLeft: "0px",
                        }}
                        _focusVisible={{
                          boxShadow: "0 0 0 1px #ED7745",
                          border: "2px solid transparent",
                        }}
                        placeholder="Select"
                        size="lg"
                      >
                        <option value="Select">American Express</option>
                        <option value="Select">Master Card</option>
                        <option value="Select">Discover</option>
                        <option value="Select">JCB</option>
                      </Select>
                    </FormControl>
                  </HStack>
                  <HStack id={styles.otp}>
                    <FormControl>
                      <FormLabel>Card Number*</FormLabel>
                      <Input
                        style={{
                          border: "1px solid #ED7745",
                          height: "50px",
                          width: "100%",

                          marginRight: "20px",
                        }}
                        _focusVisible={{
                          boxShadow: "0 0 0 1px #ED7745",
                          border: "2px solid transparent",
                        }}
                        size="lg"
                        placeholder="Card Number"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel marginLeft={0}>Security Code</FormLabel>
                      <HStack width="full">
                        <PinInput size="lg" type="alphanumeric" mask>
                          <PinInputField
                            style={{
                              border: "1px solid #ED7745",
                            }}
                            _focusVisible={{
                              boxShadow: "0 0 0 1px #ED7745",
                              border: "2px solid transparent",
                            }}
                          />
                          <PinInputField
                            style={{
                              border: "1px solid #ED7745",
                            }}
                            _focusVisible={{
                              boxShadow: "0 0 0 1px #ED7745",
                              border: "2px solid transparent",
                            }}
                          />
                          <PinInputField
                            style={{
                              border: "1px solid #ED7745",
                            }}
                            _focusVisible={{
                              boxShadow: "0 0 0 1px #ED7745",
                              border: "2px solid transparent",
                            }}
                          />
                        </PinInput>
                      </HStack>
                    </FormControl>
                  </HStack>
                  <HStack id={styles.date}>
                    <FormControl>
                      <Select
                        style={{
                          border: "1px solid #ED7745",
                          height: "50px",
                          width: "100%",

                          marginLeft: "0px",
                        }}
                        _focusVisible={{
                          boxShadow: "0 0 0 1px #ED7745",
                          border: "2px solid transparent",
                        }}
                        placeholder="Month"
                        size="lg"
                      >
                        <option value="Select"> January</option>
                        <option value="Select">February</option>
                        <option value="Select">March</option>
                        <option value="Select">April</option>
                        <option value="Select">May</option>
                        <option value="Select">June</option>
                        <option value="Select">July</option>
                        <option value="Select">August</option>
                        <option value="Select">September</option>
                        <option value="Select">October</option>
                        <option value="Select">November</option>
                        <option value="Select">December</option>
                      </Select>
                    </FormControl>
                    <FormControl>
                      <Select
                        style={{
                          border: "1px solid #ED7745",
                          height: "50px",
                          width: "100%",

                          margineft: "10px",
                        }}
                        _focusVisible={{
                          boxShadow: "0 0 0 1px #ED7745",
                          border: "2px solid transparent",
                        }}
                        placeholder="Year"
                        size="lg"
                      >
                        <option value="Select">2024</option>
                        <option value="Select">2025</option>
                        <option value="Select">2026</option>
                        <option value="Select">2027</option>
                        <option value="Select">2028</option>
                        <option value="Select">2029</option>
                        <option value="Select">2030</option>
                        <option value="Select">2031</option>
                        <option value="Select">2032</option>
                        <option value="Select">2033</option>
                        <option value="Select">2034</option>
                      </Select>
                    </FormControl>
                  </HStack>
                </VStack>
                <div id={styles.check}>
                  <Checkbox defaultChecked>Save thid card</Checkbox>
                </div>
              </TabPanel>

              <TabPanel
                style={{
                  boxShadow: "inset 10px 10px 13px 0px rgba(0,0,0,0.1)",
                  borderRadius: "15px",
                  margin: "20px",
                }}
              >
                <div className={styles.buttonpay}>
                  <div>
                    <img
                      width={"90%"}
                      padding={"20px"}
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMTAwIDMyIiB4bWxucz0iaHR0cDomI3gyRjsmI3gyRjt3d3cudzMub3JnJiN4MkY7MjAwMCYjeDJGO3N2ZyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaW4gbWVldCI+PHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSAxMiA0LjkxNyBMIDQuMiA0LjkxNyBDIDMuNyA0LjkxNyAzLjIgNS4zMTcgMy4xIDUuODE3IEwgMCAyNS44MTcgQyAtMC4xIDI2LjIxNyAwLjIgMjYuNTE3IDAuNiAyNi41MTcgTCA0LjMgMjYuNTE3IEMgNC44IDI2LjUxNyA1LjMgMjYuMTE3IDUuNCAyNS42MTcgTCA2LjIgMjAuMjE3IEMgNi4zIDE5LjcxNyA2LjcgMTkuMzE3IDcuMyAxOS4zMTcgTCA5LjggMTkuMzE3IEMgMTQuOSAxOS4zMTcgMTcuOSAxNi44MTcgMTguNyAxMS45MTcgQyAxOSA5LjgxNyAxOC43IDguMTE3IDE3LjcgNi45MTcgQyAxNi42IDUuNjE3IDE0LjYgNC45MTcgMTIgNC45MTcgWiBNIDEyLjkgMTIuMjE3IEMgMTIuNSAxNS4wMTcgMTAuMyAxNS4wMTcgOC4zIDE1LjAxNyBMIDcuMSAxNS4wMTcgTCA3LjkgOS44MTcgQyA3LjkgOS41MTcgOC4yIDkuMzE3IDguNSA5LjMxNyBMIDkgOS4zMTcgQyAxMC40IDkuMzE3IDExLjcgOS4zMTcgMTIuNCAxMC4xMTcgQyAxMi45IDEwLjUxNyAxMy4xIDExLjIxNyAxMi45IDEyLjIxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSAzNS4yIDEyLjExNyBMIDMxLjUgMTIuMTE3IEMgMzEuMiAxMi4xMTcgMzAuOSAxMi4zMTcgMzAuOSAxMi42MTcgTCAzMC43IDEzLjYxNyBMIDMwLjQgMTMuMjE3IEMgMjkuNiAxMi4wMTcgMjcuOCAxMS42MTcgMjYgMTEuNjE3IEMgMjEuOSAxMS42MTcgMTguNCAxNC43MTcgMTcuNyAxOS4xMTcgQyAxNy4zIDIxLjMxNyAxNy44IDIzLjQxNyAxOS4xIDI0LjgxNyBDIDIwLjIgMjYuMTE3IDIxLjkgMjYuNzE3IDIzLjggMjYuNzE3IEMgMjcuMSAyNi43MTcgMjkgMjQuNjE3IDI5IDI0LjYxNyBMIDI4LjggMjUuNjE3IEMgMjguNyAyNi4wMTcgMjkgMjYuNDE3IDI5LjQgMjYuNDE3IEwgMzIuOCAyNi40MTcgQyAzMy4zIDI2LjQxNyAzMy44IDI2LjAxNyAzMy45IDI1LjUxNyBMIDM1LjkgMTIuNzE3IEMgMzYgMTIuNTE3IDM1LjYgMTIuMTE3IDM1LjIgMTIuMTE3IFogTSAzMC4xIDE5LjMxNyBDIDI5LjcgMjEuNDE3IDI4LjEgMjIuOTE3IDI1LjkgMjIuOTE3IEMgMjQuOCAyMi45MTcgMjQgMjIuNjE3IDIzLjQgMjEuOTE3IEMgMjIuOCAyMS4yMTcgMjIuNiAyMC4zMTcgMjIuOCAxOS4zMTcgQyAyMy4xIDE3LjIxNyAyNC45IDE1LjcxNyAyNyAxNS43MTcgQyAyOC4xIDE1LjcxNyAyOC45IDE2LjExNyAyOS41IDE2LjcxNyBDIDMwIDE3LjQxNyAzMC4yIDE4LjMxNyAzMC4xIDE5LjMxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSA1NS4xIDEyLjExNyBMIDUxLjQgMTIuMTE3IEMgNTEgMTIuMTE3IDUwLjcgMTIuMzE3IDUwLjUgMTIuNjE3IEwgNDUuMyAyMC4yMTcgTCA0My4xIDEyLjkxNyBDIDQzIDEyLjQxNyA0Mi41IDEyLjExNyA0Mi4xIDEyLjExNyBMIDM4LjQgMTIuMTE3IEMgMzggMTIuMTE3IDM3LjYgMTIuNTE3IDM3LjggMTMuMDE3IEwgNDEuOSAyNS4xMTcgTCAzOCAzMC41MTcgQyAzNy43IDMwLjkxNyAzOCAzMS41MTcgMzguNSAzMS41MTcgTCA0Mi4yIDMxLjUxNyBDIDQyLjYgMzEuNTE3IDQyLjkgMzEuMzE3IDQzLjEgMzEuMDE3IEwgNTUuNiAxMy4wMTcgQyA1NS45IDEyLjcxNyA1NS42IDEyLjExNyA1NS4xIDEyLjExNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA2Ny41IDQuOTE3IEwgNTkuNyA0LjkxNyBDIDU5LjIgNC45MTcgNTguNyA1LjMxNyA1OC42IDUuODE3IEwgNTUuNSAyNS43MTcgQyA1NS40IDI2LjExNyA1NS43IDI2LjQxNyA1Ni4xIDI2LjQxNyBMIDYwLjEgMjYuNDE3IEMgNjAuNSAyNi40MTcgNjAuOCAyNi4xMTcgNjAuOCAyNS44MTcgTCA2MS43IDIwLjExNyBDIDYxLjggMTkuNjE3IDYyLjIgMTkuMjE3IDYyLjggMTkuMjE3IEwgNjUuMyAxOS4yMTcgQyA3MC40IDE5LjIxNyA3My40IDE2LjcxNyA3NC4yIDExLjgxNyBDIDc0LjUgOS43MTcgNzQuMiA4LjAxNyA3My4yIDYuODE3IEMgNzIgNS42MTcgNzAuMSA0LjkxNyA2Ny41IDQuOTE3IFogTSA2OC40IDEyLjIxNyBDIDY4IDE1LjAxNyA2NS44IDE1LjAxNyA2My44IDE1LjAxNyBMIDYyLjYgMTUuMDE3IEwgNjMuNCA5LjgxNyBDIDYzLjQgOS41MTcgNjMuNyA5LjMxNyA2NCA5LjMxNyBMIDY0LjUgOS4zMTcgQyA2NS45IDkuMzE3IDY3LjIgOS4zMTcgNjcuOSAxMC4xMTcgQyA2OC40IDEwLjUxNyA2OC41IDExLjIxNyA2OC40IDEyLjIxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5MC43IDEyLjExNyBMIDg3IDEyLjExNyBDIDg2LjcgMTIuMTE3IDg2LjQgMTIuMzE3IDg2LjQgMTIuNjE3IEwgODYuMiAxMy42MTcgTCA4NS45IDEzLjIxNyBDIDg1LjEgMTIuMDE3IDgzLjMgMTEuNjE3IDgxLjUgMTEuNjE3IEMgNzcuNCAxMS42MTcgNzMuOSAxNC43MTcgNzMuMiAxOS4xMTcgQyA3Mi44IDIxLjMxNyA3My4zIDIzLjQxNyA3NC42IDI0LjgxNyBDIDc1LjcgMjYuMTE3IDc3LjQgMjYuNzE3IDc5LjMgMjYuNzE3IEMgODIuNiAyNi43MTcgODQuNSAyNC42MTcgODQuNSAyNC42MTcgTCA4NC4zIDI1LjYxNyBDIDg0LjIgMjYuMDE3IDg0LjUgMjYuNDE3IDg0LjkgMjYuNDE3IEwgODguMyAyNi40MTcgQyA4OC44IDI2LjQxNyA4OS4zIDI2LjAxNyA4OS40IDI1LjUxNyBMIDkxLjQgMTIuNzE3IEMgOTEuNCAxMi41MTcgOTEuMSAxMi4xMTcgOTAuNyAxMi4xMTcgWiBNIDg1LjUgMTkuMzE3IEMgODUuMSAyMS40MTcgODMuNSAyMi45MTcgODEuMyAyMi45MTcgQyA4MC4yIDIyLjkxNyA3OS40IDIyLjYxNyA3OC44IDIxLjkxNyBDIDc4LjIgMjEuMjE3IDc4IDIwLjMxNyA3OC4yIDE5LjMxNyBDIDc4LjUgMTcuMjE3IDgwLjMgMTUuNzE3IDgyLjQgMTUuNzE3IEMgODMuNSAxNS43MTcgODQuMyAxNi4xMTcgODQuOSAxNi43MTcgQyA4NS41IDE3LjQxNyA4NS43IDE4LjMxNyA4NS41IDE5LjMxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5NS4xIDUuNDE3IEwgOTEuOSAyNS43MTcgQyA5MS44IDI2LjExNyA5Mi4xIDI2LjQxNyA5Mi41IDI2LjQxNyBMIDk1LjcgMjYuNDE3IEMgOTYuMiAyNi40MTcgOTYuNyAyNi4wMTcgOTYuOCAyNS41MTcgTCAxMDAgNS42MTcgQyAxMDAuMSA1LjIxNyA5OS44IDQuOTE3IDk5LjQgNC45MTcgTCA5NS44IDQuOTE3IEMgOTUuNCA0LjkxNyA5NS4yIDUuMTE3IDk1LjEgNS40MTcgWiI+PC9wYXRoPjwvc3ZnPg"
                      alt=""
                    />
                  </div>
                  <div>
                    <span>checkout</span>
                  </div>
                </div>
                <span id={styles.span}>The safer, easier way to pay </span>
              </TabPanel>

              <TabPanel
                style={{
                  boxShadow: "inset 10px 10px 13px 0px rgba(0,0,0,0.1)",
                  borderRadius: "15px",
                  margin: " 20px",
                }}
              >
                <div id={styles.phone}>
                  <img src="./Qr_code.png" alt="" />
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>

          <div>
            <button onClick={handlePay} className={styles.bookbtn2}>
              {/* {!isButLoading && ` Pay Now ${(totalprice + 5.0 + 0.65).toFixed(2)}`} */}
              {!isButLoading && ` Place Order`}

              {isButLoading && (
                <Spinner
                  thickness="4px"
                  speed="0.55s"
                  emptyColor="gray.200"
                  color="#17274a"
                  size="lg"
                />
              )}
            </button>
          </div>
        </div>

        <Box width="30%" border="0px solid red">
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
    </div>
  );
};

export default Payment;
