import React from 'react';
import { Stack, Box, Accordion } from '@chakra-ui/react';
import InventoryCard from './InventoryCard';

const InventoryBody = ({
  userCatalogue,
  updateCatalogueAfterPatch,
  updateCatalogueAfterDelete,
}) => {
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
            return (
              <InventoryCard
                itemToDisplay={item}
                updateCatalogueAfterDelete={
                  updateCatalogueAfterDelete
                }
                updateCatalogueAfterPatch={updateCatalogueAfterPatch}
              />
            );
          })}
        </Accordion>
      </Stack>
    </Box>
  );
};

export default InventoryBody;
