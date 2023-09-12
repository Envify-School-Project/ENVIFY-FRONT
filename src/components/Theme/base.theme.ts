import { CSSVariablesResolver, createTheme, rem } from '@mantine/core';
import { buttonStyle } from '../Button/Button.style';
import { baseInputStyle } from '../Input/BaseInput.style';

export const mantineTheme = createTheme({
  defaultRadius: 5,
  white: '#ffffff',
  primaryColor: 'violet',
  fontFamily: 'Manrope, sans-serif',
  colors: {
    violet: [
      '#f1effb',
      '#dfdaf0',
      '#bbb1e3',
      '#9686d7',
      '#7762cd',
      '#634ac7',
      '#593fc5',
      '#4a32ad',
      '#412b9b',
      '#372489',
    ],
  },
  components: {
    Button: buttonStyle,
    TextInput: baseInputStyle,
    PasswordInput: baseInputStyle,
  },
  other: {
    spacing: {
      xxs: rem(5),
    },
  },
});

export const cssResolver: CSSVariablesResolver = (theme) => ({
  variables: {
    '--mantine-spacing-xxs': theme.other.spacing.xxs,
  },
  light: {},
  dark: {},
});
