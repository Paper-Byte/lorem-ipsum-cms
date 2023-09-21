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

const NAV_ITEMS = [
  {
    label: 'Welcome',
    href: process.env.REACT_APP_WEBPAGE_HOME,
  },
  {
    label: 'Create Listing',
    children: [
      {
        label: 'Clothing',
        subLabel: 'T-Shirts, Sweaters, Hoodies, etc.',
        href: process.env.REACT_APP_WEBPAGE_CREATE_CLOTHING,
      },
      {
        label: 'Novelties',
        subLabel: 'Mug, Stuffed Animals, etc.',
        href: '#',
      },
    ],
  },
  {
    label: 'Your Inventory',
    href: '#',
  },
  {
    label: 'Preview Catalogue',
    href: '#',
  },
];

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

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
