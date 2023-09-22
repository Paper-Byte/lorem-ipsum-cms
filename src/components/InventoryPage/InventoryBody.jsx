import React from 'react';
import {
  Card,
  CardBody,
  Stack,
  Box,
  Accordion,
} from '@chakra-ui/react';
import InventoryCard from './InventoryCard';

const InventoryBody = ({ userCatalogue }) => {
  return (
    <Box
      h="800px"
      w="720px"
      boxShadow="md"
      margin="auto"
      rounded="md"
      className="overflow-y-auto hover:overflow-scroll"
    >
      <Stack>
        <Accordion allowToggle>
          {userCatalogue.map((item) => {
            return <InventoryCard itemToDisplay={item} />;
          })}
        </Accordion>
      </Stack>
    </Box>
  );
};

export default InventoryBody;
