import React, { useState } from 'react';
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Flex,
} from '@chakra-ui/react';
import Form1 from './Forms/ClothingForm1';
import Form2 from './Forms/ClothingForm2';
import Form3 from './Forms/ClothingForm3';
import { useToast } from '@chakra-ui/react';

export default function Multistep() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const [canReset, setCanReset] = useState(false);
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

  const handleSubmitClothingOption = (event) => {
    event.preventDefault();
    const {
      item,
      category,
      type,
      image,
      description,
      sizes,
      colors,
      price,
      availabilty,
    } = clothingDetails;

    const successMessage = () => {
      toast({
        title: 'Item created.',
        description: "We've created your listing for you.",
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    };

    const failMessage = () => {
      toast({
        title: 'Error encountered.',
        description:
          'We were unable to create your item, please try again.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    };

    const postNewClothing = async () => {
      try {
        const resp = await fetch(process.env.REACT_APP_API, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            item,
            category,
            type,
            image,
            description,
            sizes,
            colors,
            price,
            availabilty,
          }),
        });
        const data = await resp.json();
        setClothingDetails({
          ...clothingDetails,
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
        setStep(1);
        successMessage();
      } catch {
        failMessage();
      }
    };
    postNewClothing();
  };

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
                onClick={handleSubmitClothingOption}
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
