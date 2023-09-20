import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    light: {
      primary: {
        50: '#EDF6F9',
        100: '#D1E9F0',
        200: '#B5D9E6',
        300: '#99C9DC',
        400: '#7DB9D2',
        500: '#83C5BE',
        600: '#68A09B',
        700: '#4D7B78',
        800: '#326654',
        900: '#1B412F',
      },
      secondary: {
        50: '#FFDDD2',
        100: '#FFD3C0',
        200: '#FFC9AE',
        300: '#FFBF9D',
        400: '#FFB58B',
        500: '#E29578',
        600: '#BF745E',
        700: '#9C5444',
        800: '#79332A',
        900: '#561311',
      },
      neutral: {
        50: '#F7FAFC',
        100: '#EDF2F7',
        200: '#E2E8F0',
        300: '#CBD5E0',
        400: '#A0AEC0',
        500: '#718096',
        600: '#4A5568',
        700: '#2D3748',
        800: '#1A202C',
        900: '#171923',
      },
    },
    dark: {
      primary: {
        50: '#001C24',
        100: '#003039',
        200: '#00434E',
        300: '#005763',
        400: '#006D77',
        500: '#3073F8', // Swap with 400 for dark mode
        600: '#6097FA', // Swap with 300 for dark mode
        700: '#90BBFC', // Swap with 200 for dark mode
        800: '#C0DFFE', // Swap with 100 for dark mode
        900: '#F0F7FF', // Swap with 50 for dark mode
      },
      secondary: {
        50: '#561311',
        100: '#79332A',
        200: '#9C5444',
        300: '#BF745E',
        400: '#E29578',
        500: '#FFB58B',
        600: '#FFBF9D',
        700: '#FFC9AE',
        800: '#FFD3C0',
        900: '#FFDDD2',
      },
      neutral: {
        50: '#171923',
        100: '#1A202C',
        200: '#2D3748',
        300: '#4A5568',
        400: '#718096',
        500: '#A0AEC0',
        600: '#CBD5E0',
        700: '#E2E8F0',
        800: '#EDF2F7',
        900: '#F7FAFC',
      },
    },
  },
});
