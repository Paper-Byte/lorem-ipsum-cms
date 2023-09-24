import React from 'react';
import { Stack, Box, Accordion } from '@chakra-ui/react';
import InventoryCard from './InventoryCard';

const InventoryBody = ({ userCatalogue, setUserCatalogue }) => {
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      className="overflow-y-auto hover:overflow-scroll"
      style={{ flexDirection: 'column' }}
    >
      <Stack style={{ flex: 1 }}>
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
