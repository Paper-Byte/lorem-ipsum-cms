import React from 'react';
import {
  Stack,
  MobileNavItem,
  useColorModeValue,
} from '@chakra-ui/react';

const MobileNavMenu = ({ nav_items }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {nav_items.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

export default MobileNavMenu;
