import React, { useState } from 'react';
import {
  ButtonGroup,
  IconButton,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
  Heading,
  Text,
  Box,
  HStack,
  EditableInput,
  EditableTextarea,
  EditablePreview,
  Editable,
  Button,
  Divider,
  Image,
  Stack,
} from '@chakra-ui/react';
import { AiOutlineDelete, AiOutlineSave } from 'react-icons/ai';

const InventoryCard = ({
  itemToDisplay,
  updateCatalogueAfterPatch,
  updateCatalogueAfterDelete,
}) => {
  const [currentItem, setCurrentItem] = useState(itemToDisplay);
  const {
    id,
    item,
    image,
    description,
    price,
    sizes,
    colors,
    availability,
  } = currentItem;

  const handleItemOptionsString = (event) => {
    const { name, value } = event.target;
    setCurrentItem({ ...currentItem, [name]: value });
  };

  const handleItemOptionsSizes = (event) => {
    const { name } = event.target;
    const newSizes = currentItem.sizes.map((e) => {
      if (e.size === name) {
        e.isAvailable = !e.isAvailable;
      }
      return e;
    });
    setCurrentItem({ ...currentItem, sizes: newSizes });
  };
  const handleItemOptionsColors = (event) => {
    const { name } = event.target;
    const newColors = currentItem.colors.map((e) => {
      if (e.colorName === name) {
        e.isAvailable = !e.isAvailable;
      }
      return e;
    });
    setCurrentItem({ ...currentItem, colors: newColors });
  };

  const handleItemOptionsAvailability = (event) => {
    const flipMe = !currentItem.availability;
    setCurrentItem({ ...currentItem, availability: flipMe });
  };

  const handleItemOptionsPrice = (event) => {
    if (Number.isNaN(parseInt(event.target.value))) {
      setCurrentItem({ ...currentItem, price: 0 });
    } else {
      setCurrentItem({
        ...currentItem,
        price: parseInt(event.target.value),
      });
    }
  };

  const handleItemDeletion = () => {
    const itemDeletion = async () => {
      try {
        const resp = await fetch(
          `${process.env.REACT_APP_API_CATALOGUE}/${id}`,
          {
            method: 'DELETE',
          }
        );
        const data = await resp.json();
        updateCatalogueAfterDelete(id);
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    };
    itemDeletion();
  };

  return (
    <>
      <AccordionItem
        h="auto"
        marginTop="20px"
        marginBottom="20px"
        _dark={{
          color: 'gray.50',
        }}
        w="700px"
      >
        <Heading>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <Text color="gray">Item Name:</Text>
              <Editable value={item} w="300px">
                <EditablePreview />
                <EditableInput
                  name="item"
                  onChange={handleItemOptionsString}
                />
              </Editable>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </Heading>
        <AccordionPanel>
          <Box as="span" flex="1" textAlign="left">
            <Text color="gray" fontWeight="bold">
              Item Image:
            </Text>
            <HStack>
              <Editable
                value={image}
                w="300px"
                isTruncated
                textOverflow="hidden"
              >
                <EditablePreview />
                <EditableInput
                  name="image"
                  onChange={handleItemOptionsString}
                />
              </Editable>
              <Image
                src={
                  image.length === 0
                    ? 'https://placehold.co/400' &&
                      setCurrentItem({
                        ...currentItem,
                        image: 'https://placehold.co/400',
                      })
                    : image
                }
                alt="Item's displayed image"
                rounded="full"
                boxSize="70px"
                marginLeft="20px"
              />
            </HStack>
          </Box>
          <Box as="span" flex="1" textAlign="left">
            <Text color="gray" fontWeight="bold">
              Item Price:
            </Text>
            <Editable value={price} w="300px">
              <EditablePreview />
              <EditableInput
                name="price"
                onChange={handleItemOptionsPrice}
              />
            </Editable>
          </Box>
          <Box as="span" flex="1" textAlign="left">
            <Text color="gray" fontWeight="bold">
              Item Description:
            </Text>
            <Editable value={description} w="300px" isTruncated>
              <EditablePreview />
              <EditableTextarea
                name="description"
                onChange={handleItemOptionsString}
              />
            </Editable>
          </Box>
          <Box as="span" flex="1">
            <Text color="gray" fontWeight="bold">
              Size Options:
            </Text>
            <ButtonGroup spacing="3">
              {sizes !== null &&
                sizes.map((e) => {
                  return (
                    <Button
                      variant={e.isAvailable ? 'solid' : 'outline'}
                      onClick={handleItemOptionsSizes}
                      name={e.size}
                    >
                      {e.size}
                    </Button>
                  );
                })}
            </ButtonGroup>
          </Box>
          <Text color="gray" fontWeight="bold">
            Color Options:
          </Text>
          <ButtonGroup spacing="3">
            {colors.map((e) => {
              return (
                <Button
                  rounded="full"
                  variantColor={e.colorName}
                  variant={'dynamic'}
                  name={e.colorName}
                  onClick={handleItemOptionsColors}
                />
              );
            })}
          </ButtonGroup>
          <Stack>
            <Button
              w="20%"
              margin="10px"
              variant={availability ? 'solid' : 'outline'}
              name="availability"
              onClick={handleItemOptionsAvailability}
            >
              In Stock
            </Button>
          </Stack>
          <HStack justifyContent="right">
            <IconButton
              colorScheme="green"
              icon={<AiOutlineSave />}
            />
            <IconButton
              colorScheme="red"
              icon={<AiOutlineDelete />}
              onClick={handleItemDeletion}
            />
          </HStack>
        </AccordionPanel>
      </AccordionItem>
      <Divider />
    </>
  );
};

export default InventoryCard;
