import { Box, Button, Stack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import WelcomeCard from './WelcomeCard';
import { NavLink } from 'react-router-dom';

const WelcomeBody = () => {
  const [userData, setUserData] = useState({});

  //grabs user info on render, full relationships for backend coming later - this entry is for proof of concept
  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const resp = await fetch(
          `${process.env.REACT_APP_API_USERS}`
        );
        const data = await resp.json();
        setUserData(data);
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    };
    getUserInfo();
  }, []);

  return (
    <Box h="800px">
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
    </Box>
  );
};

export default WelcomeBody;
