import React from 'react';
import { Tooltip, Box } from '@chakra-ui/react';

const UnavailableIndicator = () => {
  <Tooltip label={`Status: Unavailable`} textTransform="capitalize">
    <Box
      as="div"
      h="24px"
      w="24px"
      position="relative"
      bgColor="red"
      borderRadius="50%"
    />
  </Tooltip>;
};

export default UnavailableIndicator;
