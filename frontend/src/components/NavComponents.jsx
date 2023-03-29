import { HStack, List, ListItem, Text, VStack } from "@chakra-ui/react"

export const Dz = ({ mouseLeave }) => {
    return (
        <HStack onMouseLeave={(e) => { mouseLeave(e, "Deal Zone") }}>
            <VStack>
                <Text>Top Deals</Text>
                <List>
                    <ListItem>Daily Deals</ListItem>
                    <ListItem>Weekday Special Deals</ListItem>
                    <ListItem>Stunning Deals</ListItem>
                    <ListItem>Clearance Sale</ListItem>
                    <ListItem>All Products on Sale</ListItem>
                    <ListItem>All Decor on Sale</ListItem>
                </List>
            </VStack>
        </HStack>
    )
}

export const Sr = ({ mouseLeave }) => {
    return (
        <HStack onMouseLeave={(e) => { mouseLeave(e, "Sofas & Recliners") }}>
            <VStack>
                <Text>Top Deals</Text>
                <List>
                    <ListItem>Daily Deals</ListItem>
                    <ListItem>Weekday Special Deals</ListItem>
                    <ListItem>Stunning Deals</ListItem>
                    <ListItem>Clearance Sale</ListItem>
                    <ListItem>All Products on Sale</ListItem>
                    <ListItem>All Decor on Sale</ListItem>
                </List>
            </VStack>
        </HStack>
    )
}
export const Li = ({ mouseLeave }) => {
    return (
        <HStack onMouseLeave={(e) => { mouseLeave(e, "Living") }}>
            <VStack>
                <Text>Sofas</Text>
                <List>
                    <ListItem>All Sofas</ListItem>
                    <ListItem>Fabric Sofa Sets</ListItem>
                    <ListItem>Wooden Sofa Sets</ListItem>
                    <ListItem>Leather Sofa Sets</ListItem>
                    <ListItem>Leatherette Sofa Sets</ListItem>
                    <ListItem>L Shaped Sofa Sets</ListItem>
                    <ListItem>Diwans</ListItem>
                    <ListItem>Loveseats</ListItem>
                </List>
            </VStack>
            <VStack>
                <Text>Recliners</Text>
                <List>
                    <ListItem>All Recliners</ListItem>
                    <ListItem>1 Seater Recliners</ListItem>
                    <ListItem>2 Seater Recliners</ListItem>
                    <ListItem>3 Seater Recliners</ListItem>
                    <ListItem>Fabric Recliners</ListItem>
                    <ListItem>Leatherette Recliners</ListItem>
                    <ListItem>Motorized Recliners</ListItem>
                    <ListItem>Manual Recliners</ListItem>
                </List>
            </VStack>
            <VStack>
                <Text>Sofa Bed</Text>
                <List>
                    <ListItem>All Sofa Beds</ListItem>
                    <ListItem>Fabric Sofa Beds</ListItem>
                    <ListItem>Wooden Sofa Beds</ListItem>
                    <ListItem>Futons</ListItem>
                </List>
            </VStack>
            <VStack>
                <Text>Seating & Chairs</Text>
                <List>
                    <ListItem>Lounge Chairs</ListItem>
                    <ListItem>Accent Chairs</ListItem>
                    <ListItem>Ottomans & Stools</ListItem>
                    <ListItem>Bean Bags</ListItem>
                    <ListItem>Benches</ListItem>
                    <ListItem>Bar Stools</ListItem>
                    <ListItem>Rocking Chairs</ListItem>
                    <ListItem>Gaming Chairs</ListItem>
                </List>
            </VStack>
        </HStack>
    )
}
export const Bm = ({ mouseLeave }) => {
    return (
        <HStack onMouseLeave={(e) => { mouseLeave(e, "Bedroom & Mattresses") }}>
            <VStack>
                <Text>Seating & Chairs</Text>
                <List>
                    <ListItem>Lounge Chairs</ListItem>
                    <ListItem>Accent Chairs</ListItem>
                    <ListItem>Recliners</ListItem>
                    <ListItem>Sofa Cum Bed</ListItem>
                    <ListItem>Ottomans & Stools</ListItem>
                    <ListItem>Bean Bags</ListItem>
                    <ListItem>Benches</ListItem>
                    <ListItem>Bar Stools</ListItem>
                    <ListItem>Rocking Chairs</ListItem>
                    <ListItem>Gaming Chairs</ListItem>
                </List>
            </VStack>
            <VStack>
                <Text>Tables</Text>
                <List>
                    <ListItem>Coffee Tables</ListItem>
                    <ListItem>Side & End Tables</ListItem>
                    <ListItem>Console Table</ListItem>
                    <ListItem>Nested Tables</ListItem>
                    <ListItem>Coffee Table Sets</ListItem>
                </List>
            </VStack>
            <VStack>
                <Text>Living Storage</Text>
                <List>
                    <ListItem>TV Units</ListItem>
                    <ListItem>Bookshelves</ListItem>
                    <ListItem>Shoe Racks</ListItem>
                    <ListItem>Prayer Units</ListItem>
                    <ListItem>Showcases</ListItem>
                    <ListItem>Wall Shelves</ListItem>
                    <ListItem>Entryway & Foyer</ListItem>
                    <ListItem>Corner Storage</ListItem>
                    <ListItem>Room Divider</ListItem>
                    <ListItem>Living Room Sets</ListItem>
                </List>
            </VStack>
        </HStack>
    )
}
export const Di = ({ mouseLeave }) => {
    return (
        <HStack onMouseLeave={(e) => { mouseLeave(e, "Dining") }}>
            <VStack>
                <Text></Text>
                <List>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                </List>
            </VStack>
        </HStack>
    )
}
export const Se = ({ mouseLeave }) => {
    return (
        <HStack onMouseLeave={(e) => { mouseLeave(e, "Storage") }}>

        </HStack>
    )
}
export const Sy = ({ mouseLeave }) => {
    return (
        <HStack onMouseLeave={(e) => { mouseLeave(e, "Study") }}>

        </HStack>
    )
}
export const Ld = ({ mouseLeave }) => {
    return (
        <HStack onMouseLeave={(e) => { mouseLeave(e, "Lighting & Decor") }}>

        </HStack>
    )
}
export const Or = ({ mouseLeave }) => {
    return (
        <HStack onMouseLeave={(e) => { mouseLeave(e, "Outdoor") }}>

        </HStack>
    )
}
export const In = ({ mouseLeave }) => {
    return (
        <HStack onMouseLeave={(e) => { mouseLeave(e, "Interiors") }}>

        </HStack>
    )
}
export const TR = ({ mouseLeave }) => {
    return (
        <HStack onMouseLeave={(e) => { mouseLeave(e, "Trending") }}>

        </HStack>
    )
}