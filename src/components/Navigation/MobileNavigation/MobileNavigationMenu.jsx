import React from 'react';
import { Stack, useColorModeValue } from '@chakra-ui/react';
import MobileNavigationItem from './MobileNavigationItem';

const MobileNavigationMenu = ({ nav_items }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {nav_items.map((navItem) => (
        <MobileNavigationItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

export default MobileNavigationMenu;
