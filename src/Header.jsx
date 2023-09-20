import React from "react";
import { Heading , Button} from "@chakra-ui/react";

const Header = () => {
    return(
        <>
        <Button variant="primary">Test new custom button variant</Button>
        <Heading as="h2" size="2xl" noOfLines={1}>Marketplace Admin Panel</Heading>
        </>
    )
}

export default Header;