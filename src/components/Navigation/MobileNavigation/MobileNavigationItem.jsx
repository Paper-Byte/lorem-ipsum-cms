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
import { NavLink } from 'react-router-dom';

const MobileNavigationItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <NavLink
        to={href ?? '#'}
        justifyContent="space-between"
        alignItems="center"
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </NavLink>
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
          {children &&
            children.map((child) => (
              <NavLink to={href ?? '#'}>{child.label}</NavLink>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

export default MobileNavigationItem;
