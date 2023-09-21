import {
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Stack,
} from '@chakra-ui/react';
import DesktopNavigationItem from './DesktopNavigationItem';

const DesktopNavigationMenu = ({ NAV_ITEMS }) => {
  return (
    <div className="flex text-center w-full align-center justify-center space-x-36">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                _hover={{
                  textDecoration: 'none',
                }}
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopNavigationItem
                      key={child.label}
                      {...child}
                    />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </div>
  );
};

export default DesktopNavigationMenu;
