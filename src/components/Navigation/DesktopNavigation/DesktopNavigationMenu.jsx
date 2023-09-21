import {
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Stack,
} from '@chakra-ui/react';
import DesktopNavigationItem from './DesktopNavigationItem';
import { NavLink } from 'react-router-dom';

const DesktopNavigationMenu = ({ NAV_ITEMS }) => {
  return (
    <div className="flex text-center w-full align-center justify-center space-x-36">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <NavLink to={navItem.href ?? '#'}>
                {navItem.label}
              </NavLink>
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
                    <NavLink to={child.href} exact>
                      <DesktopNavigationItem
                        key={child.label}
                        {...child}
                      />
                    </NavLink>
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
