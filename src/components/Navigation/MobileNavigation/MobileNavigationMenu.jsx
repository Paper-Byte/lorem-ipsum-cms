import React from 'react';
import { Stack, useColorModeValue } from '@chakra-ui/react';
import MobileNavigationItem from './MobileNavigationItem';

const MobileNavigationMenu = ({ NAV_ITEMS }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavigationItem
          key={navItem.label + '-mobile'}
          {...navItem}
        />
      ))}
    </Stack>
  );
};

export default MobileNavigationMenu;
