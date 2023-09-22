import {
  FormControl,
  Heading,
  Flex,
  FormLabel,
  Stack,
  Checkbox,
  Box,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Input,
} from '@chakra-ui/react';

const Form2 = ({
  colors,
  price,
  handleNoveltyOptionsColors,
  handleNoveltyOptionsInteger,
}) => {
  return (
    <>
            
      <Heading w="100%" textAlign={'center'} size="md" mb="2%">
        Novelty Options       
      </Heading>
       
      <Flex>
           
        <FormControl isRequired>
                  
          <FormLabel
            htmlFor="colors"
            fontSize="md"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}
            mt="2%"
          >
             Color Options         
          </FormLabel>
                  
          <Stack spacing={[1, 50]} direction={['column', 'row']}>
            {colors.map((e) => {
              return (
                <Checkbox
                  key={e.colorName}
                  size="doItBIG"
                  onChange={handleNoveltyOptionsColors}
                  name={e.colorName}
                  isChecked={e.isAvailable}
                  variant={'dynamic'}
                  variantColor={e.colorName}
                ></Checkbox>
              );
            })}
          </Stack>
                
        </FormControl>
             
      </Flex>
      <Box>
              
        <FormControl>
                  
          <FormLabel
            htmlFor="price"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}
            mt="2%"
          >
            Item Price (USD)         
          </FormLabel>
          <div className="">
            <InputGroup
              size="md"
              rounded="md"
              className="justify-start"
              name="price"
            >
              <InputLeftAddon children="$" />
                     
              <Input
                type="text"
                name="price"
                id="price"
                focusBorderColor="brand.400"
                shadow="sm"
                onChange={handleNoveltyOptionsInteger}
                w="24"
                value={price}
              />
              <InputRightAddon children=".99" />
            </InputGroup>
                  
          </div>
        </FormControl>
      </Box>
          
    </>
  );
};

export default Form2;
