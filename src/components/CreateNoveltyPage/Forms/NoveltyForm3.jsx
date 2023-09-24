import { Heading } from '@chakra-ui/react';
import ItemCard from '../../CataloguePage/CatalogueCard';

const Form3 = ({ noveltyDetails }) => {
  return (
    <>
            
      <Heading w="100%" textAlign={'center'} size="md">
                Card Preview       
      </Heading>
      <ItemCard itemListing={noveltyDetails} />
    </>
  );
};

export default Form3;
