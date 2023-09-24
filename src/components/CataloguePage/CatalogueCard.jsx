import React from 'react';

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  HStack,
  Divider,
} from '@chakra-ui/react';

import AvailableIndicator from './StatusIndicator/AvailableStatusIndicator';
import UnavailableIndicator from './StatusIndicator/UnavailableStatusIndicator';

const ItemCard = ({ itemListing }) => {
  const {
    item,
    type,
    image,
    description,
    sizes,
    colors,
    price,
    availabilty,
  } = itemListing;

  const colorsToDisplay = colors.filter((e) => {
    return e.isAvailable;
  });

  const sizesToDisplay = sizes.filter((e) => {
    return e.isAvailable;
  });

  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('accent.200', 'gray.700')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
      >
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${image})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}
        >
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={image}
            alt={`${item}'s image`}
          />
          {availabilty ? (
            <AvailableIndicator />
          ) : (
            <UnavailableIndicator />
          )}
        </Box>
        <Stack pt={10} align={'center'}>
          <Text
            color={'gray.500'}
            fontSize={'sm'}
            textTransform={'uppercase'}
            fontStyle="underline"
          >
            {type}
          </Text>
          <Heading
            fontSize={'2xl'}
            fontFamily={'body'}
            fontWeight={700}
          >
            {item}
          </Heading>
          <Text fontSize={'md'}>{description}</Text>
          <Divider />
          <Text fontWeight={600}>Color Options</Text>
          <HStack>
            {colorsToDisplay.map((e) => {
              return (
                <Box
                  bg={e.colorName}
                  w="30px"
                  h="30px"
                  rounded="md"
                />
              );
            })}
          </HStack>
          <Text fontWeight={600}>Size Options</Text>
          <HStack>
            {sizesToDisplay.map((e) => {
              return (
                <Box
                  bg={'gray.500'}
                  w="30px"
                  h="30px"
                  rounded="md"
                  fontWeight={600}
                >
                  <Text align="center">{e.size}</Text>
                </Box>
              );
            })}
          </HStack>
          <Box justifyItems={'right'}>
            <Text fontWeight={600} fontSize={'ml'}>
              ${price + 0.99}
            </Text>
          </Box>
        </Stack>
      </Box>
    </Center>
  );
};

export default ItemCard;