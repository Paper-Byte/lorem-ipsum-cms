import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import {
  BsGraphUp,
  BsFillEmojiHeartEyesFill,
  MdOutlineAttachMoney,
} from 'react-icons';

const WelcomeCard = ({ userData }) => {
  const {
    legalName,
    userName,
    shopName,
    profileImage,
    userBiography,
    shopFavorites,
    userSales,
    userIncome,
  } = userData;

  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '540px' }}
        height={{ sm: '476px', md: '20rem' }}
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        padding={4}
      >
        <Flex flex={1}>
          <Image
            objectFit="cover"
            boxSize="100%"
            src={profileImage}
            alt="User's profile picture"
            rounded={'full'}
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {legalName}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
            {userName}
          </Text>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            fontSize={'2xl'}
          >
            {shopName}
          </Text>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
          >
            {userBiography}
          </Text>
          <Stack
            align={'center'}
            justify={'center'}
            direction={'row'}
            mt={6}
          >
            <Icon></Icon>
            <Badge
              px={2}
              py={1}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}
            >
              #photography
            </Badge>
            <Badge
              px={2}
              py={1}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}
            >
              #music
            </Badge>
          </Stack>

          <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            padding={2}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}
            >
              Message
            </Button>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}
            >
              Follow
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
};

export default WelcomeCard;
