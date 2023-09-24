import { Heading } from '@chakra-ui/react';
import ItemCard from '../../CataloguePage/CatalogueCard';

const Form3 = ({ clothingDetails }) => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} size="md">
          Card Preview
      </Heading>
      <ItemCard itemListing={clothingDetails} />
    </>
  );
};

export default Form3;
