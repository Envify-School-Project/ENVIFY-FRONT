import { MantineTheme, rem } from '@mantine/core';

export const buttonStyle = {
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
        ...theme.fn.hover({
          backgroundColor: theme.colors.violet[4],
        }),
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

        ...theme.fn.hover({
          backgroundColor: theme.colors.dark[4],
        }),
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
        ...theme.fn.hover({
          textDecoration: 'underline',
        }),
      },
    }),
    subtle: (theme: MantineTheme) => ({
      root: {
        minWidth: 'auto !important',
        ...theme.fn.hover({
          backgroundColor: theme.colors.dark[4],
        }),
      },
    }),
  },
};
