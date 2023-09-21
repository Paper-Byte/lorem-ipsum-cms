import { defineStyleConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
export const HeadingStyle = defineStyleConfig({
  baseStyle: (props) => ({
    textTransform: 'uppercase',
    color: mode('secondary.800', 'secondary.500')(props),
  }),
  sizes: {},
  variants: {},

  defaultProps: {},
});
