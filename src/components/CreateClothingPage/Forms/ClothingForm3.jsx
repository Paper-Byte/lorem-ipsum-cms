import { Heading } from '@chakra-ui/react';
import ItemCardPreview from '../../Itemcard';

const Form3 = ({ clothingDetails }) => {
  return (
    <>
            
      <Heading w="100%" textAlign={'center'} size="md">
                Card Preview       
      </Heading>
      <ItemCardPreview itemListing={clothingDetails} />
    </>
  );
};

export default Form3;
