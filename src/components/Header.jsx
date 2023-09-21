import React from 'react';
import {
  Heading,
  Button,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div className="m-2">
      <Stack
        flex={{ base: 1, md: 0 }}
        justify={'space-between'}
        direction={'row'}
        spacing={6}
      >
        <Heading noOfLines={1} size="lg">
          Marketplace Admin Panel
        </Heading>

        <div>
          <Button onClick={toggleColorMode} variant={'accent'}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </div>
      </Stack>
    </div>
  );
};

export default Header;
