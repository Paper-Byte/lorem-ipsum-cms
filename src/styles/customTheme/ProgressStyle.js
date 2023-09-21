import { mode } from '@chakra-ui/theme-tools';
import { defineStyleConfig } from '@chakra-ui/react';

export const ProgressStyle = defineStyleConfig({
  baseStyle: (props) => ({
    ...progressStyles(props),
  }),

  sizes: {},
  variants: {},
  defaultProps: {},
});

const progressStyles = (props) => {
  return {
    filledTrack: {
      bg: mode('primary.500', 'primary.200')(props),
    },
    track: {
      bg: mode('primary.100', 'primary.900')(props),
      //bruh i really dont know how to set the animation how chakra wants me to so this hacky way is the only way i can think of lol
      '& > div:first-of-type': {
        transitionProperty: 'width',
      },
    },
  };
};
