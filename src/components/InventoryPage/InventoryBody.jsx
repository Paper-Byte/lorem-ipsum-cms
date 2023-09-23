import React from 'react';
import { Stack, Box, Accordion } from '@chakra-ui/react';
import InventoryCard from './InventoryCard';

const InventoryBody = ({
  userCatalogue,
  updateCatalogueAfterDelete,
}) => {
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      className="overflow-y-auto hover:overflow-scroll"
    >
      <Stack>
        <Accordion allowToggle>
          {userCatalogue.map((item) => {
            return (
              <InventoryCard
                key={item.id}
                itemToDisplay={item}
                updateCatalogueAfterDelete={
                  updateCatalogueAfterDelete
                }
              />
            );
          })}
        </Accordion>
      </Stack>
    </Box>
  );
};

export default InventoryBody;
