import React from 'react';
import { Heading, Button } from '@chakra-ui/react';

const Header = () => {
  return (
    <Heading as="h2" size="3xl" noOfLines={1} color="secondary.500">
      Marketplace Admin Panel
    </Heading>
  );
};

export default Header;
