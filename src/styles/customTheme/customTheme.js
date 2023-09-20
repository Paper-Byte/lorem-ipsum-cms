import { extendTheme } from '@chakra-ui/react';
import { ButtonStyle as Button } from '../ButtonStyle';
import colors from './palette';
export default extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors,
  components: {
    Button,
  },
});
