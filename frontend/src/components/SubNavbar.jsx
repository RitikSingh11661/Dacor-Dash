import { Box, HStack, Text } from "@chakra-ui/react"
import { useState } from "react";
import { Bm, Di, Dz, In, Ld, Li, Or, Se, Sr, Sy } from "./NavComponents";
import "../style/Navbar.css";


export const SubNavbar = () => {
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
            setTimeout(() => {
                setNavCat({ ...initState, dz: true })
            }, 200)

        } else if (e.target.innerText === "Sofas & Recliners") {
            setTimeout(() => {
                setNavCat({ ...initState, sr: true })
            }, 200)

        } else if (e.target.innerText === "Living") {
            setTimeout(() => {
                setNavCat({ ...initState, li: true })
            }, 200)

        } else if (e.target.innerText === "Bedroom & Mattresses") {
            setTimeout(() => {
                setNavCat({ ...initState, bm: true })
            }, 200)

        } else if (e.target.innerText === "Dining") {
            setTimeout(() => {
                setNavCat({ ...initState, di: true })
            }, 200)

        } else if (e.target.innerText === "Storage") {
            setTimeout(() => {
                setNavCat({ ...initState, se: true })
            }, 200)

        } else if (e.target.innerText === "Study") {
            setTimeout(() => {
                setNavCat({ ...initState, sy: true })
            }, 200)

        } else if (e.target.innerText === "Lighting & Decor") {
            setTimeout(() => {
                setNavCat({ ...initState, ld: true })
            }, 200)

        } else if (e.target.innerText === "Outdoor") {
            setTimeout(() => {
                setNavCat({ ...initState, or: true })
            }, 200)

        } else if (e.target.innerText === "Interiors") {
            setTimeout(() => {
                setNavCat({ ...initState, in: true })
            }, 200)

        } else if (e.target.innerText === "Trending") {
            setTimeout(() => {
                setNavCat({ ...initState, tr: true })
            }, 200)
        }
    }
    return (
        <Box id="catNavMain" position={"sticky"} top={0}>
            <HStack position={"relative"} justify={"space-between"} h={"42px"} fontSize={"15px"} id="stack3" width={"100%"} p={"0 15%"} align={"center"} >
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
            <Box id="catNav">
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
            </Box>
        </Box>
    )
}