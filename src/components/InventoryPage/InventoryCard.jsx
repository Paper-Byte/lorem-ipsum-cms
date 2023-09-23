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
} from '@chakra-ui/react';
import { AiOutlineDelete, AiOutlineSave } from 'react-icons/ai';

const InventoryCard = ({
  itemToDisplay,
  updateCatalogueAfterDelete,
  updateCatalogueAfterPatch,
}) => {
  const [currentItem, setCurrentItem] = useState(itemToDisplay);

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

  const handleItemDeletion = () => {
    const itemDeletion = async () => {
      try {
        const resp = await fetch(
          `${process.env.REACT_APP_API_CATALOGUE}/${currentItem.id}`,
          {
            method: 'DELETE',
          }
        );
        const data = await resp.json();
        updateCatalogueAfterDelete(currentItem.id);
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    };
    itemDeletion();
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

  const toggleColorAvailability = (
    colorName,
    updateCatalogueAfterDelete
  ) => {
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
              src={currentItem.image || 'https://placehold.co/400'}
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
                    
          {currentItem.sizes &&
            currentItem.sizes.map((size) => (
              <Button
                key={size.size}
                variant={size.isAvailable ? 'secondary' : 'accent'}
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
              onClick={() => toggleColorAvailability(color.colorName)}
              maxWidth={'20px'}
              marginRight={'2'}
            />
          ))}
                  
        </Flex>
                {/* Availability */}
                
        <Flex marginTop={4}>
                    
          <div className="flex-1">
                        
            <IconButton
              colorScheme="red"
              icon={<AiOutlineDelete />}
              marginRight={2}
              onClick={handleItemDeletion}
            />
                      
          </div>
                    
          <div>
                        
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
            />
                      
          </div>
                  
        </Flex>
              
      </AccordionPanel>
          
    </AccordionItem>
  );
};

export default InventoryCard;
