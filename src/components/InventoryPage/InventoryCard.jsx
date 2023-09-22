import React, { useState } from 'react';
import {
  Card,
  CardBody,
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
} from '@chakra-ui/react';
import { AiOutlineDelete, AiOutlineSave } from 'react-icons/ai';

const InventoryCard = ({ itemToDisplay }) => {
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
    const flipMe = currentItem.isAvailable;
    setCurrentItem({ ...currentItem, isAvailable: flipMe });
  };

  const colorEnum = {
    black: 'black',
    white: 'white',
    firebrick: 'red',
    navy: 'blue',
    aquamarine: 'teal',
    coral: 'orange',
  };

  return (
    <>
      <Card
        w="700px"
        h="100px"
        margin="10px"
        alignSelf="center"
        variant={'elevated'}
      >
        <CardBody>
          <AccordionItem>
            <Heading>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
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
              {/* <Box as="span" flex="1" textAlign="left">
                <Editable value={image} w="300px">
                  <EditablePreview />
                  <EditableInput
                    name="image"
                    onChange={handleItemOptionsString}
                  />
                </Editable>
              </Box>
              <Box as="span" flex="1" textAlign="left">
                <Editable value={description} w="300px">
                  <EditablePreview />
                  <EditableInput
                    name="description"
                    onChange={handleItemOptionsString}
                  />
                </Editable>
              </Box> */}
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
              {colors.map((e) => {
                return (
                  <Button
                    rounded="full"
                    colorScheme={colorEnum[e.colorName]}
                    variant={e.isAvailable ? 'solid' : 'outline'}
                    name={e.colorName}
                    onClick={handleItemOptionsColors}
                  />
                );
              })}
              <Button
                variant={availability ? 'solid' : 'outline'}
                name="availability"
                onClick={handleItemOptionsAvailability}
              >
                In Stock
              </Button>
              <IconButton
                colorScheme="green"
                icon={<AiOutlineSave />}
              />
              <IconButton
                colorScheme="red"
                icon={<AiOutlineDelete />}
              />
            </AccordionPanel>
          </AccordionItem>
        </CardBody>
      </Card>
      <Divider />
    </>
  );
};

export default InventoryCard;
