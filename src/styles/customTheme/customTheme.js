import { extendTheme } from '@chakra-ui/react';
import { ButtonStyle as Button } from '../ButtonStyle';
import { mode } from '@chakra-ui/theme-tools';
import colors from './palette';
export default extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: 'brand.50',
      },
      '*, *::before, &::after': {
        borderColor: 'primary.500',
      },
      '.chakra-ui-dark': {
        bg: 'primary.800',
      },
    }),
  },
  colors,
  components: {
    Button,
  },
});
