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
  Badge,
} from '@chakra-ui/react';

const CatalogueCard = ({ itemListing }) => {
  const {
    item,
    category,
    type,
    image,
    description,
    sizes,
    colors,
    price,
    availability,
  } = itemListing;

  //allows only selected colors to be displayed as available for purchase
  const colorsToDisplay = colors.filter((e) => e.isAvailable);

  //allows only selected sizes to be displayed as available on clothing
  //novelty items do not offer size options at this time
  const sizesToDisplay =
    category !== 'novelty' ? sizes.filter((e) => e.isAvailable) : [];

  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('accent.200', 'gray.700')}
        boxShadow={'md'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
        minH={'450px'}
        display={'flex'}
        flexDir={'column'}
        justifyContent={'space-between'}
      >
        {/* creates psuedo box shadow effect and animation on hover of card */}
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'200px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            bg: 'gray.500',
            filter: 'blur(17px)',
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
          {/*ensures this information is only available if their are options for different sizes */}
          {sizesToDisplay.length > 0 ? (
            <>
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
            </>
          ) : (
            <></>
          )}
          {/*ensures this information is only available if their are options for different colors */}
          {colorsToDisplay.length > 0 ? (
            <>
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
            </>
          ) : (
            <></>
          )}
          <Box justifyItems={'right'}>
            <Text fontWeight={600} fontSize={'ml'}>
              ${Math.round(price - 0.99) + 0.99}
            </Text>
          </Box>
        </Stack>
        <Badge
          colorScheme={availability ? 'green' : 'maroon'}
          variant="solid"
          fontWeight={700}
          mt={2}
          rounded={'md'}
        >
          <Text p={2}>
            {availability ? 'In Stock' : 'Out of Stock'}{' '}
          </Text>
        </Badge>
      </Box>
    </Center>
  );
};

export default CatalogueCard;
