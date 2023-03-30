import { Button, Grid, HStack, Image, Input, InputGroup, InputRightElement, StackDivider, Text, VStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { QuestionIcon, Search2Icon } from "@chakra-ui/icons"
import "../style/Navbar.css";

export const Navbar = () => {
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
            <Grid alignItems={"center"} p={"0 15%"} gap={"5%"} gridTemplateColumns={"1fr 4fr 1fr"}>
                <Link to="/"><Image src="https://i.ibb.co/BGdc8jt/urban-ladder.jpg" alt="https://i.ibb.co/BGdc8jt/urban-ladder.jpg" /></Link>
                <InputGroup>
                    <Input onKeyDown={handleKeyDown} type={"search"} />
                    <InputRightElement>
                        <Button transition={"color .2s ease-in-out"} _hover={{ color: "#ED7745" }} onClick={handleClick}><Search2Icon /></Button>
                    </InputRightElement>
                </InputGroup>
                <Grid gridTemplateColumns={"1fr 1fr 1fr 1fr"} alignItems="center" gap="5%">
                    <Link to="/"><Image w={"25px"} src="https://i.ibb.co/PQw8SY0/delivery-truck.png" alt="https://i.ibb.co/PQw8SY0/delivery-truck.png" /></Link>
                    <Image w={"20px"} src="https://i.ibb.co/pLkHBMW/account.png" alt="https://i.ibb.co/pLkHBMW/account.png" />
                    <Link to="/"><Image w={"20px"} src="https://i.ibb.co/KVtstJ7/heart.png" alt="https://i.ibb.co/KVtstJ7/heart.png" /></Link>
                    <Link to="/"><Image w={"20px"} src="https://i.ibb.co/ySc7vxw/shopping-cart.png" alt="https://i.ibb.co/ySc7vxw/shopping-cart.png" /></Link>
                </Grid>
            </Grid>
        </VStack>
    )
}