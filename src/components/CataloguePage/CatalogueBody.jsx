import React from 'react';
import CatalogueCard from './CatalogueCard';
import { SimpleGrid, Box } from '@chakra-ui/react';

const CatalogueBody = ({ userCatalogue }) => {
  return (
    <Box className="overflow-y-auto" h="800px">
      {/*Allows CatalogueCards to be scrollable while keeping NavBar on screen*/}
      <SimpleGrid columns={4} spacing={3}>
        {userCatalogue.map((e) => {
          return <CatalogueCard itemListing={e} />;
        })}
      </SimpleGrid>
    </Box>
  );
};

export default CatalogueBody;
