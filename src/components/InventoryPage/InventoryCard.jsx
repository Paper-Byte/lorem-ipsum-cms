import React, { useState } from 'react';
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  Button,
  Editable,
  EditableInput,
  EditablePreview,
  Image,
  useColorModeValue,
  IconButton,
  useToast,
} from '@chakra-ui/react';
import { AiOutlineDelete, AiOutlineSave } from 'react-icons/ai';

const InventoryCard = ({ itemToDisplay, setUserCatalogue }) => {
  const [currentItem, setCurrentItem] = useState(itemToDisplay);
  const toast = useToast();

  //sets state of grandparent holding the full user's catalogue after PATCH
  const updateCatalogueAfterPatch = (id, newData) => {
    setUserCatalogue((prevUserCatalogue) =>
      prevUserCatalogue.map((item) =>
        item.id === id ? { ...item, ...newData } : item
      )
    );
  };

  //sets state of grandparent holding the full user's catalogue after DELETE
  const updateCatalogueAfterDelete = (id) => {
    setUserCatalogue((prevUserCatalogue) =>
      prevUserCatalogue.filter((item) => item.id !== id)
    );
  };

  //displays toast after successful DELETE
  const successToastMessageDelete = () => {
    toast({
      title: 'Item Deleted.',
      description: "We've deleted your listing for you.",
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  //displays toast after failed DELETE
  const errorToastMessageDelete = () => {
    toast({
      title: 'Error encountered.',
      description:
        'We were unable to delete your item, please try again.',
      status: 'error',
      duration: 3000,
      isClosable: true,
    });
  };

  //displays toast after successful PATCH
  const successToastMessagePatch = () => {
    toast({
      title: 'Item Saved.',
      description: "We've updated your listing for you.",
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  //displays toast after failed PATCH
  const errorToastMessagePatch = () => {
    toast({
      title: 'Error encountered.',
      description:
        'We were unable to save your item, please try again.',
      status: 'error',
      duration: 3000,
      isClosable: true,
    });
  };

  //toggles an item's ivailabillity and updates grandparent state
  const toggleAvailability = () => {
    setCurrentItem({
      ...currentItem,
      availability: !currentItem.availability,
    });
  };

  //sets the price of an item, allows only numbers, before updating grandparent state
  const setPrice = (event) => {
    const numericValue = event.target.value.replace(/[^0-9]/g, ''); // only numbers.
    const price = parseInt(numericValue) || 0;
    setCurrentItem({ ...currentItem, price });
  };

  //item listing deleted from db, grandparent state update and appropriate toast fired
  const deleteDatabaseItemEntry = async () => {
    try {
      await fetch(
        `${process.env.REACT_APP_API_CATALOGUE}/${currentItem.id}`,
        {
          method: 'DELETE',
        }
      );
      updateCatalogueAfterDelete(currentItem.id);
      successToastMessageDelete();
    } catch (error) {
      console.error(`Error: ${error}`);
      errorToastMessageDelete();
    }
  };

  //item listing patched in db, grandparent state update and appropriate toast fired
  const patchDatabaseItemEntry = async () => {
    try {
      const resp = await fetch(
        `${process.env.REACT_APP_API_CATALOGUE}/${currentItem.id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...currentItem,
            price: Math.round(currentItem.price - 0.99) + 0.99,
          }),
        }
      );
      const data = await resp.json();
      updateCatalogueAfterPatch(currentItem.id, data);
      successToastMessagePatch();
    } catch (error) {
      console.error(`Error: ${error}`);
      errorToastMessagePatch();
    }
  };

  //toggles a size's availability by the "size" key in the "sizes" array then updates grandparent state
  const toggleSizeAvailability = (sizeToToggle) => {
    setCurrentItem((prevItem) => {
      const updatedSizes = prevItem.sizes.map((size) => {
        const { size: currentSize, isAvailable } = size;
        return currentSize === sizeToToggle
          ? { size: currentSize, isAvailable: !isAvailable }
          : size;
      });
      return { ...prevItem, sizes: updatedSizes };
    });
  };

  //toggles a color's availability by the "colorName" key in the "colors" array then updates grandparent state
  const toggleColorAvailability = (colorName) => {
    setCurrentItem((prevItem) => ({
      ...prevItem,
      colors: prevItem.colors.map((color) =>
        color.colorName === colorName
          ? { ...color, isAvailable: !color.isAvailable }
          : color
      ),
    }));
  };

  return (
    <AccordionItem display="flex" flexDir={'column'}>
      <Flex>
        <AccordionButton>
          {/* Item Name */}
          <Heading size="sm" color="accent.500">
            Item Name:
          </Heading>
          <Editable
            value={currentItem.item}
            w="300px"
            color={useColorModeValue('black', 'white')}
          >
            <EditablePreview />
            <EditableInput
              name="item"
              onChange={(event) => {
                setCurrentItem({
                  ...currentItem,
                  item: event.target.value,
                });
              }}
            />
          </Editable>
          {/* Item Icon */}
          <Box as="span" flex="1" textAlign="right">
            <AccordionIcon />
          </Box>
        </AccordionButton>
        <Flex>
          <AccordionPanel>
            {/* Item Image */}
            <Image
              marginTop={'2'}
              src={
                //psuedo image error catch
                currentItem.image.length === 0
                  ? 'https://placehold.co/400' &&
                    setCurrentItem({
                      ...currentItem,
                      image: 'https://placehold.co/400',
                    })
                  : currentItem.image
              }
              alt="Item's displayed image"
              rounded="full"
              width={'200px'}
              height={'200px'}
              objectFit="cover"
            />
          </AccordionPanel>
        </Flex>
      </Flex>
      {/* Item Price */}
      <AccordionPanel>
        <Box as="span" flex="1" textAlign="left">
          <Heading size="sm" color="accent.500">
            Item Price:           
          </Heading>
          <Editable value={currentItem.price} w="300px">
            <EditablePreview />
            <EditableInput name="price" onChange={setPrice} />
          </Editable>
        </Box>
        {/* Item Description */}
        <Box
          as="span"
          display={'flex'}
          flexDirection="column"
          textAlign="left"
        >
          <Heading size="sm" color="accent.500">
            Item Description:
          </Heading>
          <Editable
            value={currentItem.description}
            isTruncated
            whiteSpace={'wrap'}
            maxWidth={'500px'}
          >
            <EditablePreview isTruncated whiteSpace={'wrap'} />
            <EditableInput
              name="description"
              fontFamily={'body'}
              onChange={(e) =>
                setCurrentItem({
                  ...currentItem,
                  description: e.target.value,
                })
              }
              isTruncated
              whiteSpace={'wrap'}
            />
          </Editable>
        </Box>
        {/* Sizes */}
        <Flex mb={2}>
          {/*Only renders if 'sizes' exist*/}
          {currentItem.sizes &&
            currentItem.sizes.map((size) => (
              <Button
                key={size.size}
                variant={size.isAvailable ? 'accent' : 'secondary'} //button style changes depending on availability
                borderRadius={size.isAvailable ? '50%' : 'md'}
                onClick={() => toggleSizeAvailability(size.size)}
                border={'1px solid'}
                maxWidth={'20px'}
                marginRight={'2'}
              >
                {size.size}
              </Button>
            ))}
        </Flex>
        {/* Colors */}
        <Flex mb={2}>
          {currentItem.colors.map((color) => (
            <Button
              key={color.colorName}
              variantColor={color.colorName}
              variant={
                color.isAvailable ? 'dynamicSelected' : 'dynamic' //button style changes based on availability
              }
              onClick={() => toggleColorAvailability(color.colorName)}
              maxWidth={'20px'}
              marginRight={'2'}
            />
          ))}
        </Flex>
                {/* Availability */}
        <Flex marginTop={4}>
          <Box className="flex-1">
            <IconButton
              colorScheme="red"
              icon={<AiOutlineDelete />}
              marginRight={2}
              onClick={deleteDatabaseItemEntry}
            />
          </Box>
          <Box>
            <Button
              colorScheme={currentItem.availability ? 'green' : 'red'}
              onClick={toggleAvailability}
              marginRight={'2'}
            >
              {currentItem.availability ? 'Available' : 'Unavailable'}
            </Button>
            <IconButton
              colorScheme="green"
              icon={<AiOutlineSave />}
              marginRight={2}
              onClick={patchDatabaseItemEntry}
            />
          </Box>
        </Flex>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default InventoryCard;
