import React from 'react';
import { Stack, Box, Accordion } from '@chakra-ui/react';
import InventoryCard from './InventoryCard';

const InventoryBody = ({ userCatalogue, setUserCatalogue }) => {
  return (
    <Box
      justifyContent={'center'}
      className="overflow-y-auto"
      mt={5}
      mb={5}
      h="760px"
    >
      {/*Allows CatalogueCards to be scrollable while keeping NavBar on screen*/}
      <Stack>
        <Accordion className="overflow-auto" allowToggle>
          {userCatalogue.map((item) => {
            return (
              <InventoryCard
                key={item.id}
                itemToDisplay={item}
                setUserCatalogue={setUserCatalogue}
                userCatalogue={userCatalogue}
              />
            );
          })}
        </Accordion>
      </Stack>
    </Box>
  );
};

export default InventoryBody;
