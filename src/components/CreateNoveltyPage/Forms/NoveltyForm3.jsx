import { Heading } from '@chakra-ui/react';
import ItemCardPreview from '../../ItemCards/ItemCardPreview';

const Form3 = ({ noveltyDetails }) => {
  return (
    <>
            
      <Heading w="100%" textAlign={'center'} size="md">
                Card Preview       
      </Heading>
      <ItemCardPreview itemListing={noveltyDetails} />
    </>
  );
};

export default Form3;
