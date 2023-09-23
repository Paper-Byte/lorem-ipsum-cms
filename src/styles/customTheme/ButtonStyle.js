import { mode } from '@chakra-ui/theme-tools';
import { defineStyleConfig } from '@chakra-ui/react';
const fontColor = 'white';

export const ButtonStyle = defineStyleConfig({
  baseStyle: {
    textTransform: 'uppercase',
    fontFamily: 'heading',
    fontWeight: '900',
  },
  sizes: {},
  variants: {
    primary: (props) => ({
      ...primaryStyles(props),
      _active: {
        ...primaryStyles(props),
      },
      _disabled: {
        ...primaryDisabledStyles,
        _hover: {
          ...primaryDisabledStyles,
        },
      },
    }),
    accent: (props) => ({
      ...accentStyles(props),
    }),
    dynamic: (props) => ({
      ...accentStyles(props),
      opacity: 0.7,
      borderColor: mode('gray.300', 'gray.900')(props),
      transition: 'all 0.2s',
      bg: `${props.variantColor}`,
      _hover: {
        filter: mode('brightness(0.9)', 'brightness(1.3)')(props),
      },
    }),
    dynamicSelected: (props) => ({
      ...accentStyles(props),

      borderRadius: '50%',
      border: '1px solid',
      borderColor: mode('black', 'white')(props),
      transition: 'all 0.2s',
      bg: `${props.variantColor}`,
      _hover: {
        filter: mode('brightness(0.9)', 'brightness(1.3)')(props),
      },
    }),
  },
  defaultProps: {},
});

const accentStyles = (props) => ({
  bg: mode('secondary.800', 'secondary.500')(props),
  color: fontColor,
  _hover: {
    bg: mode('secondary.700', 'secondary.400')(props),
    boxShadow: 'md',
    transform: 'translateY(-2px)',
  },
});

const primaryStyles = (props) => ({
  bg: 'primary.500',
  color: fontColor,
  _hover: {
    bg: mode('primary.700', 'primary.400')(props),
    boxShadow: 'md',
    transform: 'translateY(-2px)',
  },
});

const primaryDisabledStyles = {
  bg: 'gray.500 !important',
  boxShadow: 'none !important',
  cursor: 'pointer !important',
  transform: 'none !important',
};
