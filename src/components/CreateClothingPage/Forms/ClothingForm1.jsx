import {
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  HStack,
  Image,
} from '@chakra-ui/react';

const Form1 = ({
  item,
  img,
  clothingType,
  description,
  handleClothingOptionsStrings,
  handleClothingOptionsBadImage,
}) => {
  return (
    <>
            
      <Heading w="100%" textAlign={'center'} mb="2%" size="md">
        Clothing Creation       
      </Heading>
            
      <Flex direction={'column'}>
                
        <FormControl isRequired>
               
          <FormLabel htmlFor="item-name" fontWeight={'normal'}>
            Item Name
          </FormLabel>
                    
          <Input
            id="item-name"
            name="item"
            type="text"
            value={item}
            onChange={handleClothingOptionsStrings}
            placeholder="Item name..."
          />
                  
        </FormControl>
                       
        <FormControl isRequired>
                    
          <FormLabel htmlFor="item-image" fontWeight={'normal'}>
            Item Image URL           
          </FormLabel>
           
          <HStack>
            <Input
              id="item-image"
              name="image"
              type="text"
              value={img}
              onChange={handleClothingOptionsStrings}
              placeholder="Ex. 'https://png.pngtree.com/png-vector/...'"
              w="50%"
            />
            <Image
              src={
                img.length === 0
                  ? 'https://placehold.co/400' &&
                    handleClothingOptionsBadImage()
                  : img
              }
              alt="Item's displayed image"
              rounded="full"
              boxSize="70px"
              marginLeft="20px"
            />
          </HStack>
        </FormControl>
                       
        <FormControl isRequired>
                    
          <FormLabel
            htmlFor="type"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}
          >
             Type Of Clothing           
          </FormLabel>
                    
          <Select
            id="type"
            name="type"
            value={clothingType}
            onChange={handleClothingOptionsStrings}
            placeholder="Select option"
            focusBorderColor="brand.400"
            shadow="sm"
            w="full"
            rounded="md"
          >
            <option value="tshirt">T-Shirt</option>
            <option value="hoodie">Hoodie</option>
            <option value="sweatshirt">Sweatshirt</option>
            <option value="jacket">Jacket</option>
          </Select>
                  
        </FormControl>
                       
        <FormControl isRequired>
                    
          <FormLabel
            htmlFor="type"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}
          >
            Item Description           
          </FormLabel>
                    
          <Input
            id="item-description"
            name="description"
            type="text"
            value={description}
            onChange={handleClothingOptionsStrings}
            placeholder="Ex. 'https://png.pngtree.com/png-vector/...'"
          />
        </FormControl>
      </Flex>
          
    </>
  );
};

export default Form1;
