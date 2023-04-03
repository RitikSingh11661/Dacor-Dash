import { Box, Button, Grid, HStack, Image, Input, InputGroup, InputRightElement, StackDivider, Text, VStack } from "@chakra-ui/react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { QuestionIcon, Search2Icon } from "@chakra-ui/icons"
import "../style/Navbar.css";
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";

export const Navbar = () => {
    const navigate = useNavigate();
    const isAuth = useSelector(store => store.AuthReducer.isAuth);
    const handleClick = () => {

    }
    const handleKeyDown = (e) => {
        if (e.code === "Enter" || e.code === "NumpadEnter") {
            handleClick();
        }
    }
    return (
        <VStack divider={<StackDivider borderColor='gray.200' />}>
            <HStack fontSize={{ base: '9px', md: "12px", lg: '15px' }} id="stack1" h={"40px"} p={{ base: "2px 0", md: "2px 0px", lg: "2px 15%" }} justify={"space-between"} align={"center"} w="100%">
                <HStack>
                    <Link>
                        <HStack align="center">
                            <QuestionIcon /><Text>Help</Text>
                        </HStack>
                    </Link>
                    <Link>
                        <HStack align={"center"}>
                            <Image width={"25px"} onClick={() => { navigate("/trackorder") }} src="https://i.ibb.co/PQw8SY0/delivery-truck.png" alt="https://i.ibb.co/PQw8SY0/delivery-truck.png" /><Text>Track Order</Text>
                        </HStack>
                    </Link>
                </HStack>
                <HStack >
                    <Link>Stores</Link>
                    <Link>Bulk Orders</Link>
                    <Link>Gift Cards</Link>
                    <Link>UL Services</Link>
                </HStack>
            </HStack>
            <Grid mb={"7px"} alignItems={"center"} p={{ base: "15px 0", md: "15px 0px", lg: "15px 15%" }} gap={"5%"} gridTemplateColumns={{ base: "1fr 1.5fr 1fr", md: "1fr 3fr 1fr", lg: "1fr 4fr 1fr" }}>
                <Link to="/"><Image src="https://i.ibb.co/mtrWJVh/Decor-Dash-logo-cropped.png" alt="https://i.ibb.co/mtrWJVh/Decor-Dash-logo-cropped.png" /></Link>
                <InputGroup>
                    <Input onKeyDown={handleKeyDown} type={"search"} />
                    <InputRightElement>
                        <Button transition={"color .2s ease-in-out"} _hover={{ color: "#ED7745" }} onClick={handleClick}><Search2Icon /></Button>
                    </InputRightElement>
                </InputGroup>
                <Grid gridTemplateColumns={"1fr 1fr 1fr 1fr"} alignItems="center" gap="5%">
                    <Link to="/trackorder"><Image w={"25px"} src="https://i.ibb.co/PQw8SY0/delivery-truck.png" alt="https://i.ibb.co/PQw8SY0/delivery-truck.png" /></Link>
                    <Box id="userBox">
                        <Image w={"20px"} src="https://i.ibb.co/pLkHBMW/account.png" alt="https://i.ibb.co/pLkHBMW/account.png" />
                        {
                            isAuth ?
                                <VStack spacing={0}>
                                    <Link>Profile</Link>
                                    <Link to="/trackorder">Orders</Link>
                                    <Link>Vouchers</Link>
                                    <Text onClick={() => {
                                        localStorage.setItem("isAuth", JSON.stringify(""));
                                        localStorage.setItem("token", JSON.stringify(""));
                                    }}>Logout</Text>
                                </VStack>
                                :
                                <VStack spacing={0}>
                                    {/* <Text>Log In</Text>
                                    <Text>Sign Up</Text> */}
                                    <Link to='/login'>Log In</Link>
                                    <Link to='/signup'>Sign Up</Link>
                                </VStack>
                        }
                    </Box>
                    <Link to="/wishlist"><Image w={"20px"} src="https://i.ibb.co/KVtstJ7/heart.png" alt="https://i.ibb.co/KVtstJ7/heart.png" /></Link>
                    <Link to="/cart"><Image w={"20px"} src="https://i.ibb.co/ySc7vxw/shopping-cart.png" alt="https://i.ibb.co/ySc7vxw/shopping-cart.png" /></Link>
                </Grid>
            </Grid>
        </VStack>
    )
}