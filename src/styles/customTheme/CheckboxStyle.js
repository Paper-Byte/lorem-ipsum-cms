import {
  defineStyleConfig,
  createMultiStyleConfigHelpers,
} from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { checkboxAnatomy } from '@chakra-ui/anatomy';

export const CheckboxStyle = defineStyleConfig({
  baseStyle: {
    control: {
      borderRadius: 'md',
      _focus: {
        boxShadow: 'none',
      },
      _checked: (props) => ({
        backgroundColor:
          `${props.colorScheme} !important` || 'primary.500',
        borderColor: 'primary.500',
        color: 'white',
        _hover: {
          backgroundColor:
            `${props.colorScheme} !important` || 'primary.500',
          borderColor: 'primary.600',
        },
      }),
    },
    label: {
      ml: 2,
    },
  },
  variants: {
    dynamic: (props) => ({
      control: {
        _checked: {
          backgroundColor:
            `${props.variantColor} !important` || 'primary.500',
          borderColor: props.variantColor || 'primary.500',
          _hover: {
            backgroundColor:
              `${props.variantColor} !important` || 'primary.500',
            borderColor: props.variantColor || 'primary.600',
          },
        },
      },
    }),
  },
  defaultProps: {},
  sizes: {
    doItBIG: {
      control: {
        w: 50,
        h: 50,
      },
    },
  },
});
