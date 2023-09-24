import React from 'react';
import {
  Heading,
  Button,
  Stack,
  useColorMode,
  Box,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box className="m-2">
      <Stack
        flex={{ base: 1, md: 0 }}
        justify={'space-between'}
        direction={'row'}
        spacing={6}
      >
        <Heading noOfLines={1} size="lg">
          Marketplace Admin Panel
        </Heading>
        <Box>
          <Button onClick={toggleColorMode} variant={'accent'}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default Header;
