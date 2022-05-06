// 1. Import `extendTheme`
import { extendTheme } from '@chakra-ui/react';
import foundations from './foundations';
import button from './foundations/button';

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  styles: {
    global: () => ({}),
  },
  colors: foundations.colors,
  fonts: foundations.fonts,

  fontSizes: foundations.fontSizes,
  spacing: foundations.space,
  components: {
    Button: {
      variants: button.variants,
      sizes: button.sizes,
      baseStyle: button.baseStyle,
      defaultProps: button.defaultProps,
    },
  },
});
export default theme;
