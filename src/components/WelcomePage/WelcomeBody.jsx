import { Box, Button, Stack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import WelcomeCard from './WelcomeCard';
import { NavLink } from 'react-router-dom';

const WelcomeBody = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const getUserInfo = async () => {
      const resp = await fetch(`${process.env.REACT_APP_API_USERS}`);
      const data = await resp.json();
      setUserData(data);
    };
    getUserInfo();
  }, []);

  console.log(userData);

  return (
    <>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <WelcomeCard userData={userData} />
        <NavLink to="/create-clothing">
          <Button
            colorScheme={'green'}
            bg={'green.400'}
            rounded={'full'}
            px={6}
            _hover={{
              bg: 'green.500',
            }}
          >
            Create New Clothing
          </Button>
        </NavLink>
        <NavLink to="/create-novelty">
          <Button
            colorScheme={'green'}
            bg={'green.400'}
            rounded={'full'}
            px={6}
            _hover={{
              bg: 'green.500',
            }}
          >
            Create New Novelty
          </Button>
        </NavLink>
      </Stack>
    </>
  );
};

export default WelcomeBody;
