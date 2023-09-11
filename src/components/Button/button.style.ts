import { MantineTheme, MantineThemeComponent, rem } from '@mantine/core';

export const buttonStyle: MantineThemeComponent = {
  styles: () => ({
    root: {
      height: rem(40),
      minWidth: rem(100),
    },
  }),
  variants: {
    filled: (theme: MantineTheme) => ({
      root: {
        color: theme.white,
        border: `${rem(1)} solid ${theme.colors.violet[4]}`,
        '&:hover': {
          backgroundColor: theme.colors.violet[4],
        },
      },
    }),
    outline: (theme: MantineTheme) => ({
      root: {
        color: theme.white,
        border: `${rem(1)} solid ${theme.white}`,
        '&:disabled': {
          backgroundColor: 'transparent',
          border: `${rem(1)} solid ${theme.colors.dark[4]}`,
        },

        '&:hover': {
          backgroundColor: theme.colors.dark[4],
        },
      },
    }),
    arrow: (theme: MantineTheme) => ({
      root: {
        color: theme.white,
        backgroundColor: 'none',
        border: `none`,
        textDecoration: 'underline',
        textDecorationStyle: 'dashed',
        textUnderlineOffset: rem(3),
        '&:hover': {
          textDecoration: 'underline',
        },
      },
    }),
    subtle: (theme: MantineTheme) => ({
      root: {
        minWidth: 'auto !important',
        '&:hover': {
          backgroundColor: theme.colors.dark[4],
        },
      },
    }),
  },
};
