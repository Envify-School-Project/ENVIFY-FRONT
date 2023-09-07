import { MantineTheme, rem } from '@mantine/core';

export const buttonStyle = {
  styles: (theme: MantineTheme) => ({
    root: {
      height: rem(40),
      a: {
        textDecoration: 'none',
        color: theme.white,
      },
    },
  }),
  variants: {
    filled: (theme: MantineTheme) => ({
      root: {
        color: theme.white,
        border: `${rem(1)} solid ${theme.colors.violet[1]}`,
        ...theme.fn.hover({
          backgroundColor: theme.colors.violet[1],
        }),
      },
    }),
    outline: (theme: MantineTheme) => ({
      root: {
        color: theme.white,
        border: `${rem(1)} solid ${theme.white}`,
        '&:disabled': {
          backgroundColor: 'transparent',
          border: `${rem(1)} solid ${theme.colors.gray[2]}`,
        },

        ...theme.fn.hover({
          backgroundColor: theme.colors.dark[2],
          color: theme.colors.violet[0],
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
        ...theme.fn.hover({
          backgroundColor: theme.colors.dark[2],
        }),
      },
    }),
  },
};
