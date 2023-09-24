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
  noveltyType,
  description,
  handleNoveltyOptionsStrings,
  handleNoveltyOptionsBadImage,
}) => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} mb="2%" size="md">
        Novelty Creation
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
            onChange={handleNoveltyOptionsStrings}
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
              onChange={handleNoveltyOptionsStrings}
              placeholder="Ex. 'https://png.pngtree.com/png-vector/...'"
            />
            <Image
              src={
                img.length === 0
                  ? 'https://placehold.co/400' &&
                    handleNoveltyOptionsBadImage()
                  : img
              }
              alt="Item's displayed image"
              rounded="full"
              boxSize="90px"
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
             Type Of Novelty 
          </FormLabel>
          <Select
            id="type"
            name="type"
            value={noveltyType}
            onChange={handleNoveltyOptionsStrings}
            placeholder="Select option"
            focusBorderColor="brand.400"
            shadow="sm"
            w="full"
            rounded="md"
          >
            <option value="mug">Mug</option>
            <option value="stuffed-animal">Stuffed Animal</option>
            <option value="bowl">Bowl</option>
            <option value="balloon">Balloon</option>
            <option value="phone-case">Phone Case</option>
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
            onChange={handleNoveltyOptionsStrings}
            placeholder="Ex. 'https://png.pngtree.com/png-vector/...'"
          />
        </FormControl>
      </Flex>
    </>
  );
};

export default Form1;
