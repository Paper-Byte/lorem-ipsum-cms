import React from 'react';
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
  Button,
  Divider,
} from '@chakra-ui/react';

const InventoryCard = ({ item }) => {
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
                  {item.item}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Heading>
          </AccordionItem>
        </CardBody>
      </Card>
      <Divider />
    </>
  );
};

export default InventoryCard;
