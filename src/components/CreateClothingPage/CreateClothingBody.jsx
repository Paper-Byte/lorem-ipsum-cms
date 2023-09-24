import React, { useState } from 'react';
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Flex,
  useToast,
} from '@chakra-ui/react';
import ClothingForm1 from './Forms/ClothingForm1';
import ClothingForm2 from './Forms/ClothingForm2';
import ClothingForm3 from './Forms/ClothingForm3';

const CreateClothingBody = ({ setUserCatalogue }) => {
  const toast = useToast();
  const [step, setStep] = useState(1); //used to track which Form the user is on
  const [progress, setProgress] = useState(33.33); //used to fill status bar
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

  //psudeo data validation, true validation to come
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

  //notifies user of a successful posting
  const successToastMessagePost = () => {
    toast({
      title: 'Item created.',
      description: "We've created your listing for you.",
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  //notify user of a failed posting
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

  //updates string values in state
  const handleClothingOptionsStrings = (event) => {
    const { name, value } = event.target;
    setClothingDetails({ ...clothingDetails, [name]: value });
  };

  //updates size values in state with a value toggle then array replacement
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

  //updates color values in state with a value toggle then array replacement
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

  //updates price value in state, only allows numbers
  const handleClothingOptionsInteger = (event) => {
    const numericValue = event.target.value.replace(/[^0-9]/g, ''); // only numbers
    const newPrice = parseInt(numericValue) || 0;
    setClothingDetails({ ...clothingDetails, price: newPrice });
  };

  //tries to guard from broken image icons, actual image error catches to come later
  const handleClothingOptionsBadImage = () => {
    setClothingDetails({
      ...clothingDetails,
      image: 'https://placehold.co/400',
    });
  };

  //submits new item created by state to database
  //updates state holding database GET in App.jsx
  //resets state of page, progress, and currentItem condiotnally
  //fires appropriate toast
  const submitClothingListing = async (event) => {
    event.preventDefault();
    const {
      item,
      category,
      type,
      image,
      description,
      sizes,
      colors,
      availabilty,
      price,
    } = clothingDetails;

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
      successToastMessagePost();
    } catch (error) {
      console.error(`Error :${error}`);
      errorToastMessagePost();
    }
  };

  return (
    <Box h="800px">
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        minWidth={700}
        p={6}
        m="30px"
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
          <ClothingForm1
            item={clothingDetails.item}
            description={clothingDetails.description}
            clothingType={clothingDetails.type}
            img={clothingDetails.image}
            handleClothingOptionsStrings={
              handleClothingOptionsStrings
            }
            handleClothingOptionsBadImage={
              handleClothingOptionsBadImage
            }
          />
        ) : step === 2 ? (
          <ClothingForm2
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
          <ClothingForm3 clothingDetails={clothingDetails} />
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
                onClick={submitClothingListing}
              >
                {canSubmit ? 'Submit' : 'Invalid'}
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default CreateClothingBody;
