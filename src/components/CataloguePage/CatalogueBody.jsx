import React from 'react';
import ItemCard from './CatalogueCard';
import { SimpleGrid, Box } from '@chakra-ui/react';

//creates container for CatalogueCards
//allows NavBar to stay visiable and Entries to be scrollable
const CatalogueBody = ({ userCatalogue }) => {
  return (
    <Box className="overflow-y-auto" h="800px">
      <SimpleGrid columns={4} spacing={3}>
        {userCatalogue.map((e) => {
          return <ItemCard itemListing={e} />;
        })}
      </SimpleGrid>
    </Box>
  );
};

export default CatalogueBody;
