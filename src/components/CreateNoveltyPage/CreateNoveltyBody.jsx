import React, { useState } from 'react';
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Flex,
  useToast,
} from '@chakra-ui/react';
import NoveltyForm1 from './Forms/NoveltyForm1';
import NoveltyForm2 from './Forms/NoveltyForm2';
import NoveltyForm3 from './Forms/NoveltyForm3';

const CreateNoveltyBody = ({ setUserCatalogue }) => {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const [noveltyDetails, setNoveltyDetails] = useState({
    item: '',
    category: 'novelty',
    type: '',
    image: '',
    description: '',
    sizes: null,
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
    noveltyDetails.item !== '' &&
    noveltyDetails.type !== '' &&
    noveltyDetails.image !== '' &&
    noveltyDetails.description !== '' &&
    noveltyDetails.price > 0
  ) {
    canSubmit = true;
  }

  const handleNoveltyOptionsStrings = (event) => {
    const { name, value } = event.target;
    setNoveltyDetails({ ...noveltyDetails, [name]: value });
  };

  const handleNoveltyOptionsColors = (event) => {
    const { name } = event.target;
    const newColors = noveltyDetails.colors.map((e) => {
      if (e.colorName === name) {
        e.isAvailable = !e.isAvailable;
      }
      return e;
    });
    setNoveltyDetails({ ...noveltyDetails, colors: newColors });
  };

  const handleNoveltyOptionsInteger = (event) => {
    const { name, value } = event.target;
    setNoveltyDetails({
      ...noveltyDetails,
      [name]: parseInt(value),
    });
  };

  const handleNoveltyOptionsBadImage = () => {
    setNoveltyDetails({
      ...noveltyDetails,
      image: 'https://placehold.co/400',
    });
  };

  const successToastMessagePost = () => {
    toast({
      title: 'Item created.',
      description: "We've created your listing for you.",
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  const errorToastMessagePost = () => {
    toast({
      title: 'Error encountered.',
      description:
        'We were unable to create your item, please try again.',
      status: 'error',
      duration: 3000,
      isClosable: true,
    });
  };

  const submitNoveltyListing = async (event) => {
    event.preventDefault();
    const {
      item,
      category,
      type,
      image,
      description,
      sizes,
      price,
      colors,
      availabilty,
    } = noveltyDetails;

    try {
      const resp = await fetch(
        `${process.env.REACT_APP_API_CATALOGUE}`,
        {
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
            price: price + 0.99,
            availabilty,
          }),
        }
      );
      const data = await resp.json();
      setUserCatalogue((prevUserCatalogue) => [
        ...prevUserCatalogue,
        data,
      ]);
      setNoveltyDetails({
        ...noveltyDetails,
        item: '',
        category: 'novelty',
        type: '',
        image: '',
        description: '',
        sizes: null,
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
      successToastMessagePost();
    } catch (error) {
      console.error(`Error :${error}`);
      errorToastMessagePost();
    }
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
          <NoveltyForm1
            item={noveltyDetails.item}
            description={noveltyDetails.description}
            noveltyType={noveltyDetails.type}
            img={noveltyDetails.image}
            handleNoveltyOptionsStrings={handleNoveltyOptionsStrings}
            handleNoveltyOptionsBadImage={
              handleNoveltyOptionsBadImage
            }
          />
        ) : step === 2 ? (
          <NoveltyForm2
            colors={noveltyDetails.colors}
            price={noveltyDetails.price}
            handleNoveltyOptionsColors={handleNoveltyOptionsColors}
            handleNoveltyOptionsInteger={handleNoveltyOptionsInteger}
          />
        ) : (
          <NoveltyForm3 noveltyDetails={noveltyDetails} />
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
                onClick={submitNoveltyListing}
              >
                                {canSubmit ? 'Submit' : 'Invalid'}
                              
              </Button>
            ) : null}
                      
          </Flex>
                  
        </ButtonGroup>
              
      </Box>
          
    </>
  );
};

export default CreateNoveltyBody;
