import { extendTheme } from '@chakra-ui/react';
import { ButtonStyle as Button } from './ButtonStyle';
import { HeadingStyle as Heading } from './HeadingStyle';
import { ProgressStyle as Progress } from './ProgressStyle';
import { mode } from '@chakra-ui/theme-tools';
import colors from './palette';
export default extendTheme({
  fonts: {
    heading: `Lato, sans-serif`,
    body: `Raleway, sans-serif`,
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode('brand.50', 'gray.900')(props),
        color: mode('black', 'white')(props),
      },
      '*, *::before, &::after': {
        borderColor: mode('primary.900', props.borderColor)(props),
      },
    }),
  },
  colors,
  components: {
    Button,
    Heading,
    Progress,
  },
});
