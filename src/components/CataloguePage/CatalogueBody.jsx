import React from 'react';
import ItemCard from './CatalogueCard';
import { SimpleGrid, Box } from '@chakra-ui/react';

const CatalogueBody = ({ userCatalogue }) => {
  return (
    <Box className="overflow-y-auto .no-scrollbar" h="800px">
      <SimpleGrid columns={4} spacing={3}>
        {userCatalogue.map((e) => {
          return <ItemCard itemListing={e} />;
        })}
      </SimpleGrid>
    </Box>
  );
};

export default CatalogueBody;
