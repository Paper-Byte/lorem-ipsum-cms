import React from 'react';

import { useState } from 'react';
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputGroup,
  Textarea,
  FormHelperText,
  Checkbox,
  Stack,
  InputLeftAddon,
  InputRightAddon,
} from '@chakra-ui/react';

import ItemCard from './ItemCard';

import { useToast } from '@chakra-ui/react';

export default function Multistep() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const [clothingDetails, setClothingDetails] = useState({
    item: '',
    category: 'clothing',
    type: '',
    image: '',
    description: '',
    sizes: [
      { size: 'xs', isAvailable: false },
      { size: 's', isAvailable: false },
      { size: 'm', isAvailable: false },
      { size: 'l', isAvailable: false },
      { size: 'xl', isAvailable: false },
    ],
    colors: [
      { colorName: 'black', isAvailable: false },
      { colorName: 'white', isAvailable: false },
      { colorName: 'firebrick', isAvailable: false },
      { colorName: 'navy', isAvailable: false },
      { colorName: 'aquamarine', isAvailable: false },
      { colorName: 'coral', isAvailable: false },
    ],
    price: 0,
    availability: true,
  });

  let canSubmit = false;

  if (
    clothingDetails.item !== '' &&
    clothingDetails.type !== '' &&
    clothingDetails.image !== '' &&
    clothingDetails.description !== '' &&
    clothingDetails.price > 0
  ) {
    canSubmit = true;
  }

  const handleClothingOptionsStrings = (event) => {
    const { name, value } = event.target;
    setClothingDetails({ ...clothingDetails, [name]: value });
  };

  const handleClothingOptionsSizes = (event) => {
    const { name } = event.target;
    const newSizes = clothingDetails.sizes.map((e) => {
      if (e.size === name) {
        e.isAvailable = !e.isAvailable;
      }
      return e;
    });
    setClothingDetails({ ...clothingDetails, sizes: newSizes });
  };

  const handleClothingOptionsColors = (event) => {
    const { name } = event.target;
    const newColors = clothingDetails.colors.map((e) => {
      if (e.colorName === name) {
        e.isAvailable = !e.isAvailable;
      }
      return e;
    });
    setClothingDetails({ ...clothingDetails, colors: newColors });
  };

  const handleClothingOptionsInteger = (event) => {
    const { name, value } = event.target;
    setClothingDetails({
      ...clothingDetails,
      [name]: parseInt(value) + 0.99,
    });
  };

  console.log(clothingDetails);

  return (
    <>
         
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
      >
         
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
        ></Progress>
                
        {step === 1 ? (
          <Form1
            item={clothingDetails.item}
            description={clothingDetails.description}
            clothingType={clothingDetails.type}
            img={clothingDetails.image}
            handleClothingOptionsStrings={
              handleClothingOptionsStrings
            }
          />
        ) : step === 2 ? (
          <Form2
            sizes={clothingDetails.sizes}
            colors={clothingDetails.colors}
            price={clothingDetails.price}
            handleClothingOptionsSizes={handleClothingOptionsSizes}
            handleClothingOptionsColors={handleClothingOptionsColors}
            handleClothingOptionsInteger={
              handleClothingOptionsInteger
            }
          />
        ) : (
          <Form3 clothingDetails={clothingDetails} />
        )}
                
        <ButtonGroup mt="5%" w="100%">
                    
          <Flex w="100%" justifyContent="space-between">
                        
            <Flex>
                            
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                variant="primary"
                w="7rem"
                mr="5%"
              >
                                Back               
              </Button>
                            
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                variant="primary"
              >
                                Next               
              </Button>
                          
            </Flex>
                        
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                isDisabled={!canSubmit}
                onClick={() => {
                  toast({
                    title: 'Item created.',
                    description:
                      "We've created your listing for you.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  });
                }}
              >
                                {canSubmit ? 'Submit' : 'Invalid'}
                              
              </Button>
            ) : null}
                      
          </Flex>
                  
        </ButtonGroup>
              
      </Box>
          
    </>
  );
}

const Form1 = ({
  item,
  img,
  clothingType,
  description,
  handleClothingOptionsStrings,
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
                    
          <Input
            id="item-image"
            name="image"
            type="text"
            value={img}
            onChange={handleClothingOptionsStrings}
            placeholder="Ex. 'https://png.pngtree.com/png-vector/...'"
          />
                  
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
                        <option value="hat">Hat</option>
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

const Form2 = ({
  sizes,
  colors,
  price,
  handleClothingOptionsSizes,
  handleClothingOptionsColors,
  handleClothingOptionsInteger,
}) => {
  return (
    <>
            
      <Heading w="100%" textAlign={'center'} size="md" mb="2%">
        Clothing Options       
      </Heading>
       
      <Flex>
           
        <FormControl isRequired>
                  
          <FormLabel
            htmlFor="sizes"
            fontSize="md"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}
            mt="2%"
          >
             Size Options         
          </FormLabel>
                  
          <Stack spacing={[1, 50]} direction={['column', 'row']}>
            {sizes.map((e) => {
              return (
                <Checkbox
                  key={e.size}
                  size="md"
                  onChange={handleClothingOptionsSizes}
                  name={e.size}
                  isChecked={e.isAvailable}
                >
                  {e.size.toUpperCase()}
                </Checkbox>
              );
            })}
          </Stack>
                
        </FormControl>
             
      </Flex>
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
                  onChange={handleClothingOptionsColors}
                  name={e.colorName}
                  isChecked={e.isAvailable}
                  colorScheme={'red'}
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
                onChange={handleClothingOptionsInteger}
                w="24"
              />
              <InputRightAddon children=".99" />
            </InputGroup>
                  
          </div>
        </FormControl>
      </Box>
          
    </>
  );
};

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
