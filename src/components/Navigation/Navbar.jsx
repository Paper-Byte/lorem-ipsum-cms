import {
  Box,
  Flex,
  IconButton,
  Collapse,
  useDisclosure,
  Image,
} from '@chakra-ui/react';

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import MobileNavigationMenu from './MobileNavigation/MobileNavigationMenu';
import DesktopNavigationMenu from './DesktopNavigation/DesktopNavigationMenu';

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  //Prop to edit / control navigation items that display / link to
  const NAV_ITEMS = [
    {
      label: 'Welcome',
      href: `/welcome`,
    },
    {
      label: 'Create Listing',
      children: [
        {
          label: 'Clothing',
          subLabel: 'T-Shirts, Sweaters, Hoodies, etc.',
          href: '/create-clothing',
        },
        {
          label: 'Novelties',
          subLabel: 'Mug, Stuffed Animals, etc.',
          href: '/create-novelty',
        },
      ],
    },
    {
      label: 'Your Inventory',
      href: '/your-inventory',
    },
    {
      label: 'Preview Catalogue',
      href: '/preview-catalogue',
    },
  ];

  return (
    <Box>
      <Flex
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              //Decides icon to show based on if the current nav item is opened
              isOpen ? (
                <CloseIcon w={3} h={3} />
              ) : (
                <HamburgerIcon w={5} h={5} />
              )
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: 'center', md: 'start' }}
        >
          <Image
            src={process.env.REACT_APP_LOGO}
            alt="Marketplace Logo"
            borderRadius="full"
            boxSize="40px"
          />
          <Flex
            display={{ base: 'none', md: 'flex' }}
            className="w-full"
          >
            <DesktopNavigationMenu NAV_ITEMS={NAV_ITEMS} />
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNavigationMenu NAV_ITEMS={NAV_ITEMS} />
      </Collapse>
    </Box>
  );
};

export default Navbar;
