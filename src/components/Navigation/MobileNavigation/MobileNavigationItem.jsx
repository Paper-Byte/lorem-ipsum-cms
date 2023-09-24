import React from 'react';
import {
  Stack,
  Box,
  Text,
  Icon,
  Collapse,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const MobileNavigationItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {/*Checks if the current item has children*/}
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse
        in={isOpen}
        animateOpacity
        style={{ marginTop: '0!important' }}
      >
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('primary.200', 'primary.50')}
          align={'start'}
        >
          {/*Checks if the current item has children*/}
          {children &&
            children.map((child) => (
              <NavLink key={child.label} to={child.href}>
                {child.label}
              </NavLink>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

export default MobileNavigationItem;
