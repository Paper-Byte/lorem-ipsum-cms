import React from "react";

import { useState } from 'react'
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
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  CheckboxGroup
} from '@chakra-ui/react'

import { useToast } from '@chakra-ui/react'

export default function Multistep() {
    const toast = useToast()
    const [step, setStep] = useState(1)
    const [progress, setProgress] = useState(33.33)
    const [clothingDetails, setClothingDetails] = useState({
        item: "",
        category: "clothing",
        type: "",
        image: "",
        description: "",
        sizes: [],
        colors: [],
        price: 0,
        availability: true,
    })

    let canSubmit = false;

    if(clothingDetails.item !== "" &&
      clothingDetails.type !== "" &&
      clothingDetails.image !== "" &&
      clothingDetails.description !== "" &&
      clothingDetails.sizes.length > 0 &&
      clothingDetails.colors.length > 0 &&
      clothingDetails.price > 0){
        canSubmit = true
      }

      console.log(clothingDetails)


    const handleClothingOptions = (event) => {
        setClothingDetails({...clothingDetails, [event.target.id]: event.target.value});
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
          as="form">
          <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated></Progress>
          {step === 1 ? 
            <Form1 
              item={clothingDetails.item}
              description={clothingDetails.description}
              clothingType = {clothingDetails.type} 
              img={clothingDetails.image} 
              handleClothingOptions={handleClothingOptions} /> 
          : step === 2 ? 
            <Form2 /> 
          : 
            <Form3 />}
          <ButtonGroup mt="5%" w="100%">
            <Flex w="100%" justifyContent="space-between">
              <Flex>
                <Button
                  onClick={() => {
                    setStep(step - 1)
                    setProgress(progress - 33.33)
                  }}
                  isDisabled={step === 1}
                  colorScheme="teal"
                  variant="solid"
                  w="7rem"
                  mr="5%">
                  Back
                </Button>
                <Button
                  w="7rem"
                  isDisabled={step === 3}
                  onClick={() => {
                    setStep(step + 1)
                    if (step === 3) {
                      setProgress(100)
                    } else {
                      setProgress(progress + 33.33)
                    }
                  }}
                  colorScheme="teal"
                  variant="outline">
                  Next
                </Button>
              </Flex>
              {step === 3 ? (
                <Button
                  w="7rem"
                  colorScheme="red"
                  variant="solid"
                  isDisabled = {!canSubmit}
                  onClick={() => {
                    toast({
                      title: 'Item created.',
                      description: "We've created your listing for you.",
                      status: 'success',
                      duration: 3000,
                      isClosable: true,
                    })
                  }}>
                  {canSubmit ? 'Submit' : 'Invalid'}
                </Button>
              ) : null}
            </Flex>
          </ButtonGroup>
        </Box>
      </>
    )
  }

const Form1 = ({item, img, description, clothingType, handleClothingOptionsString}) => {

  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Clothing Creation
      </Heading>
      <Flex>
        <FormControl isRequired mr="5%">
          <FormLabel htmlFor="item" fontWeight={'normal'}>
            Item Name
          </FormLabel>
          <Input id="item" type="text" value={item} onChange={handleClothingOptionsString} placeholder="Item name..." />
        </FormControl>
        </Flex>
        <Flex>
        <FormControl isRequired mr="5%">
          <FormLabel htmlFor="img" fontWeight={'normal'}>
            Item Image URL
          </FormLabel>
          <Input id="img" type="text" value={img} onChange={handleClothingOptionsString} placeholder="Ex. 'https://png.pngtree.com/png-vector/...'" />
        </FormControl>
      </Flex>
      <Flex>
      <FormControl isRequired mr="5%">
        <FormLabel
          htmlFor="type"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}>
          Type Of Clothing
        </FormLabel>
        <Select
          id="type"
          name="type"
          placeholder="Select option"
          focusBorderColor="brand.400"
          onChange={handleClothingOptionsString}
          value={clothingType}
          shadow="sm"
          w="full"
          rounded="md">          
          <option value="tshirt">T-Shirt</option>
          <option value="hoodie">Hoodie</option>
          <option value="sweatshirt">Sweatshirt</option>
          <option value="hat">Hat</option>
          <option value="jacket">Jacket</option>
        </Select>
      </FormControl>
      </Flex>
      <Flex>
        <FormControl isRequired mr="5%">
          <FormLabel htmlFor="item-description" fontWeight={'normal'}>
            Item Description
          </FormLabel>
          <Input id="description" type="text" value={description} onChange={handleClothingOptionsString} placeholder="Ex. 'https://png.pngtree.com/png-vector/...'" />
        </FormControl>
      </Flex>
    </>
  )
}

const Form2 = () => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Clothing Options
      </Heading>   
      <FormControl isRequired colSpan={6}>
        <FormLabel
          htmlFor="sizing"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Size Options
        </FormLabel>
          <CheckboxGroup >

          </CheckboxGroup>
      </FormControl>
      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="city"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          City
        </FormLabel>
        <Input
          type="text"
          name="city"
          id="city"
          autoComplete="city"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="state"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          State / Province
        </FormLabel>
        <Input
          type="text"
          name="state"
          id="state"
          autoComplete="state"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="postal_code"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          ZIP / Postal
        </FormLabel>
        <Input
          type="text"
          name="postal_code"
          id="postal_code"
          autoComplete="postal-code"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>
    </>
  )
}

const Form3 = () => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
        Social Handles
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            Website
          </FormLabel>
          <InputGroup size="sm">
            <InputLeftAddon
              bg="gray.50"
              _dark={{
                bg: 'gray.800',
              }}
              color="gray.500"
              rounded="md">
              http://
            </InputLeftAddon>
            <Input
              type="tel"
              placeholder="www.example.com"
              focusBorderColor="brand.400"
              rounded="md"
            />
          </InputGroup>
        </FormControl>

        <FormControl id="email" mt={1}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            About
          </FormLabel>
          <Textarea
            placeholder="you@example.com"
            rows={3}
            shadow="sm"
            focusBorderColor="brand.400"
            fontSize={{
              sm: 'sm',
            }}
          />
          <FormHelperText>
            Brief description for your profile. URLs are hyperlinked.
          </FormHelperText>
        </FormControl>
      </SimpleGrid>
    </>
  )
}
