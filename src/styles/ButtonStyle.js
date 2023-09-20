import { mode } from '@chakra-ui/theme-tools';

const fontColor = 'white';

export const ButtonStyle = {
  baseStyle: {
    _disabled: {
      bg: 'secondary.200',
      color: fontColor,
      _hover: {
        bg: 'secondary.200',
        boxShadow: 'none',
        transform: 'none',
      },
    },
  },
  sizes: {},
  variants: {
    primary: (props) => ({
      bg: 'primary.500',
      color: props.color ?? fontColor,
      _hover: {
        bg: mode('primary.700', 'primary.400')(props),
        boxShadow: 'md',
        transform: 'translateY(-2px)',
      },
    }),
    secondary: (props) => ({
      bg: 'secondary.500',
      color: props.color ?? fontColor,
      _hover: {
        bg: mode('secondary.700', 'secondary.400')(props),
        boxShadow: 'md',
        transform: 'translateY(-2px)',
      },
    }),
  },
  defaultProps: {},
};
