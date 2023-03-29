import { Box, Button, Grid, HStack, Image, Input, InputGroup, InputRightElement, StackDivider, Text, VStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { QuestionIcon, Search2Icon } from "@chakra-ui/icons"
import "../style/Navbar.css";
import { useState } from "react";
import { Bm, Di, Dz, In, Ld, Li, Or, Se, Sr, Sy, TR } from "./NavComponents";

export const Navbar = () => {
    const initState = {
        dz: false,
        sr: false,
        li: false,
        bm: false,
        di: false,
        se: false,
        sy: false,
        ld: false,
        or: false,
        in: false,
        tr: false
    };
    const [navCat, setNavCat] = useState(initState);
    const handleMouseLeave = (e, val) => {
        if (e.target.innerText === "Deal Zone" || val === "Deal Zone") {
            setNavCat({ ...initState, dz: false })

        } else if (e.target.innerText === "Sofas & Recliners" || val === "Sofas & Recliners") {
            setNavCat({ ...initState, sr: false })

        } else if (e.target.innerText === "Living" || val === "Living") {
            setNavCat({ ...initState, li: false })

        } else if (e.target.innerText === "Bedroom & Mattresses" || val === "Bedroom & Mattresses") {
            setNavCat({ ...initState, bm: false })

        } else if (e.target.innerText === "Dining" || val === "Dining") {
            setNavCat({ ...initState, di: false })

        } else if (e.target.innerText === "Storage" || val === "Storage") {
            setNavCat({ ...initState, se: false })

        } else if (e.target.innerText === "Study" || val === "Study") {
            setNavCat({ ...initState, sy: false })

        } else if (e.target.innerText === "Lighting & Decor" || val === "Lighting & Decor") {
            setNavCat({ ...initState, ld: false })

        } else if (e.target.innerText === "Outdoor" || val === "Outdoor") {
            setNavCat({ ...initState, or: false })

        } else if (e.target.innerText === "Interiors" || val === "Interiors") {
            setNavCat({ ...initState, in: false })

        } else if (e.target.innerText === "Trending" || val === "Trending") {
            setNavCat({ ...initState, tr: false })
        }
    }
    const handleMouseEnter = (e) => {
        if (e.target.innerText === "Deal Zone") {
            setNavCat({ ...initState, dz: true })

        } else if (e.target.innerText === "Sofas & Recliners") {
            setNavCat({ ...initState, sr: true })

        } else if (e.target.innerText === "Living") {
            setNavCat({ ...initState, li: true })

        } else if (e.target.innerText === "Bedroom & Mattresses") {
            setNavCat({ ...initState, bm: true })

        } else if (e.target.innerText === "Dining") {
            setNavCat({ ...initState, di: true })

        } else if (e.target.innerText === "Storage") {
            setNavCat({ ...initState, se: true })

        } else if (e.target.innerText === "Study") {
            setNavCat({ ...initState, sy: true })

        } else if (e.target.innerText === "Lighting & Decor") {
            setNavCat({ ...initState, ld: true })

        } else if (e.target.innerText === "Outdoor") {
            setNavCat({ ...initState, or: true })

        } else if (e.target.innerText === "Interiors") {
            setNavCat({ ...initState, in: true })

        } else if (e.target.innerText === "Trending") {
            setNavCat({ ...initState, tr: true })
        }
    }
    const handleClick = () => {

    }
    const handleKeyDown = (e) => {
        if (e.code === "Enter" || e.code === "NumpadEnter") {
            handleClick();
        }
    }
    return (
        <VStack position={"relative"} divider={<StackDivider borderColor='gray.200' />}>
            <HStack id="stack1" h={"40px"} p={"2px 20%"} align={"center"} justify={"space-between"} w="100%">
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
            <Grid alignItems={"center"} p={"0 20%"} gap={"5%"} gridTemplateColumns={"1fr 4fr 1fr"}>
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
            <HStack pos={"relative"} top={0} justify={"space-between"} h={"42px"} fontSize={"15px"} id="stack3" width={"100%"} p={"0 20%"} align={"center"} >
                <Text onMouseEnter={handleMouseEnter}>Deal Zone</Text>
                <Text onMouseEnter={handleMouseEnter}>Sofas & Recliners</Text>
                <Text onMouseEnter={handleMouseEnter}>Living</Text>
                <Text onMouseEnter={handleMouseEnter}>Bedroom & Mattresses</Text>
                <Text onMouseEnter={handleMouseEnter}>Dining</Text>
                <Text onMouseEnter={handleMouseEnter}>Storage</Text>
                <Text onMouseEnter={handleMouseEnter}>Study</Text>
                <Text onMouseEnter={handleMouseEnter}>Lighting & Decor</Text>
                <Text onMouseEnter={handleMouseEnter}>Outdoor</Text>
                <Text onMouseEnter={handleMouseEnter}>Interiors</Text>
                <Text onMouseEnter={handleMouseEnter}>Trending</Text>
            </HStack>
            <Box >
                {navCat.dz && <Dz mouseLeave={handleMouseLeave} />}
                {navCat.sr && <Sr mouseLeave={handleMouseLeave} />}
                {navCat.li && <Li mouseLeave={handleMouseLeave} />}
                {navCat.bm && <Bm mouseLeave={handleMouseLeave} />}
                {navCat.di && <Di mouseLeave={handleMouseLeave} />}
                {navCat.se && <Se mouseLeave={handleMouseLeave} />}
                {navCat.sy && <Sy mouseLeave={handleMouseLeave} />}
                {navCat.ld && <Ld mouseLeave={handleMouseLeave} />}
                {navCat.or && <Or mouseLeave={handleMouseLeave} />}
                {navCat.in && <In mouseLeave={handleMouseLeave} />}
                {navCat.tr && <TR mouseLeave={handleMouseLeave} />}
            </Box>
        </VStack>
    )
}