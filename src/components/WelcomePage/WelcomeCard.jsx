import {
  Center,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';
import { BsGraphUp, BsFillEmojiHeartEyesFill } from 'react-icons/bs';
import { GiMoneyStack } from 'react-icons/gi';

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

  const numFormat = (num) => {
    if (num > 1000 && num < 999999) {
      num = Math.floor(num / 100) / 10.0 + 'k';
    } else if (num > 999999) {
      num = Math.floor(num / 100) / 10.0 + 'm';
    }
    return num;
  };

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
            <HStack>
              <Icon as={BsFillEmojiHeartEyesFill} />
              <Text>{numFormat(shopFavorites)}</Text>
              <Icon as={BsGraphUp} />
              <Text>{numFormat(userSales)}</Text>
              <Icon as={GiMoneyStack} />
              <Text>{numFormat(userIncome)}</Text>
            </HStack>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
};

export default WelcomeCard;
