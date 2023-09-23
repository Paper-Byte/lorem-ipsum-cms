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
  HStack,
} from '@chakra-ui/react';
import { AiOutlineDelete, AiOutlineSave } from 'react-icons/ai';
const InventoryCard = ({
  itemToDisplay,
  updateCatalogueAfterDelete,
}) => {
  const [currentItem, setCurrentItem] = useState(itemToDisplay);
  const toast = useToast();

  const successToastMessageDelete = () => {
    toast({
      title: 'Item Deleted.',
      description: "We've deleted your listing for you.",
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

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

  const successToastMessagePatch = () => {
    toast({
      title: 'Item Saved.',
      description: "We've updated your listing for you.",
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

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

  const toggleAvailability = () => {
    setCurrentItem({
      ...currentItem,
      availability: !currentItem.availability,
    });
  };

  const setPrice = (event) => {
    const numericValue = event.target.value.replace(/[^0-9]/g, ''); // only numbers.
    const price = parseInt(numericValue) || 0;
    setCurrentItem({ ...currentItem, price });
  };

  //item listing deleted from db, grandparent state update and according toast
  const deleteDatabaseItemEntry = async () => {
    try {
      const resp = await fetch(
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

  //item listing patched in db, grandparent state update and according toast
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
      successToastMessagePatch();
    } catch (error) {
      console.log(`Error: ${error}`);
      errorToastMessagePatch();
    }
  };

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
    <AccordionItem mt={4} mb={4} display="flex" flexDir={'column'}>
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
              width={['100px', '100px', '100px', '100px', '100px']}
              objectFit={'cover'}
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
        {/* Item Image */}
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
        <HStack>
          <Flex mb={2}>
            {currentItem.sizes &&
              currentItem.sizes.map((size) => (
                <Button
                  key={size.size}
                  variant={size.isAvailable ? 'accent' : 'secondary'}
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
                  color.isAvailable ? 'dynamic' : 'dynamicSelected'
                }
                onClick={() =>
                  toggleColorAvailability(color.colorName)
                }
                maxWidth={'20px'}
                marginRight={'2'}
              />
            ))}
          </Flex>
        </HStack>
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
