import React from 'react';

import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import SocialButton from './SocialButton';

const FooterBody = () => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text>Noah Hughes - Phase 2 React Project</Text>
        <Stack direction={'row'} spacing={4}>
          <SocialButton
            label={'Twitter'}
            href={'https://twitter.com/byte_paper'}
          >
            <FaTwitter />
          </SocialButton>
          <SocialButton
            label={'LinkedIn'}
            href={'https://www.linkedin.com/in/nr-hughes/'}
          >
            <FaLinkedin />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default FooterBody;
