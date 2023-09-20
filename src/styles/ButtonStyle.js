import { darken, mode, whiten } from '@chakra-ui/theme-tools';

export const ButtonStyle = {
  baseStyle: {},
  sizes: {},
  variants: {
    primary: (props) => ({
      bg: 'dark.primary.500',
      color: 'white',
      _hover: {
        bg: whiten('dark.primary.500', 1),
        boxShadow: 'md',
      },
    }),
  },
  defaultProps: {},
};
