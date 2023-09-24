import { Heading } from '@chakra-ui/react';
import CatalogueCard from '../../CataloguePage/CatalogueCard';

const Form3 = ({ clothingDetails }) => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} size="md">
          Card Preview
      </Heading>
      <CatalogueCard itemListing={clothingDetails} />
    </>
  );
};

export default Form3;
