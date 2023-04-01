import { Box, Button, Grid, HStack, Image, Input, InputGroup, InputRightElement, StackDivider, Text, VStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { QuestionIcon, Search2Icon } from "@chakra-ui/icons"
import "../style/Navbar.css";
// import { useSelector } from "react-redux";

export const Navbar = () => {
    const isAuth = false;
    const handleClick = () => {

    }
    const handleKeyDown = (e) => {
        if (e.code === "Enter" || e.code === "NumpadEnter") {
            handleClick();
        }
    }
    return (
        <VStack divider={<StackDivider borderColor='gray.200' />}>
            <HStack id="stack1" h={"40px"} p={"2px 15%"} align={"center"} justify={"space-between"} w="100%">
                <HStack>
                    <Link>
                        <HStack align="center">
                            <QuestionIcon /><Text>Help</Text>
                        </HStack>
                    </Link>
                    <Link>
                        <HStack align={"center"}>
                            <Image width={"25px"} src="https://i.ibb.co/PQw8SY0/delivery-truck.png" alt="https://i.ibb.co/PQw8SY0/delivery-truck.png" /><Text>Track Order</Text>
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
            <Grid mb={"7px"} alignItems={"center"} p={"15px 15%"} gap={"5%"} gridTemplateColumns={"1fr 4fr 1fr"}>
                <Link to="/"><Image src="https://i.ibb.co/mtrWJVh/Decor-Dash-logo-cropped.png" alt="https://i.ibb.co/mtrWJVh/Decor-Dash-logo-cropped.png" /></Link>
                <InputGroup>
                    <Input onKeyDown={handleKeyDown} type={"search"} />
                    <InputRightElement>
                        <Button transition={"color .2s ease-in-out"} _hover={{ color: "#ED7745" }} onClick={handleClick}><Search2Icon /></Button>
                    </InputRightElement>
                </InputGroup>
                <Grid gridTemplateColumns={"1fr 1fr 1fr 1fr"} alignItems="center" gap="5%">
                    <Link to="/"><Image w={"25px"} src="https://i.ibb.co/PQw8SY0/delivery-truck.png" alt="https://i.ibb.co/PQw8SY0/delivery-truck.png" /></Link>
                    <Box id="userBox">
                        <Image w={"20px"} src="https://i.ibb.co/pLkHBMW/account.png" alt="https://i.ibb.co/pLkHBMW/account.png" />
                        {
                            isAuth ?
                                <VStack spacing={0}>
                                    <Text>Profile</Text>
                                    <Text>Orders</Text>
                                    <Text>Vouchers</Text>
                                    <Text>Logout</Text>
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
                    <Link to="/"><Image w={"20px"} src="https://i.ibb.co/KVtstJ7/heart.png" alt="https://i.ibb.co/KVtstJ7/heart.png" /></Link>
                    <Link to="/"><Image w={"20px"} src="https://i.ibb.co/ySc7vxw/shopping-cart.png" alt="https://i.ibb.co/ySc7vxw/shopping-cart.png" /></Link>
                </Grid>
            </Grid>
        </VStack>
    )
}