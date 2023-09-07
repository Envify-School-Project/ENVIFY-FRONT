import { MantineThemeOverride } from '@mantine/core';
import { buttonStyle } from '../Button/button.style';
import { baseInputStyle } from '../Input/baseInput.style';

export const mantineTheme: MantineThemeOverride = {
  defaultRadius: 5,
  white: '#ffffff',
  primaryColor: 'violet',
  fontFamily: 'Manrope, sans-serif',
  colors: {
    violet: [
      '#efeaff',
      '#ccc2f3',
      '#aa9be5',
      '#8874d9',
      '#664ccd',
      '#4c32b3',
      '#3b278c',
      '#291b66',
      '#18103f',
      '#08051b',
    ],
  },
  globalStyles: (theme) => ({
    '*, *::before, *::after': {
      boxSizing: 'border-box',
    },

    body: {
      ...theme.fn.fontStyles(),
      backgroundColor: theme.colors.dark[7],
      color: theme.white,
      lineHeight: theme.lineHeight,
      minHeight: '100vh',

      a: {
        color: theme.white,
        textDecoration: 'none',
      },

      svg: {
        fill: theme.white,
        width: '1.5rem',
        height: '1.5rem',
      },
    },
  }),
  components: {
    Button: buttonStyle,
    TextInput: baseInputStyle,
    PasswordInput: baseInputStyle,
  },
};
