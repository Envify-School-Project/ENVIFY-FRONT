import { MantineTheme, rem } from '@mantine/core';

export const baseInputStyle = {
  styles: (theme: MantineTheme) => ({
    root: {
      label: {
        color: theme.colors.dark[1],
        fontSize: rem(14),
        marginBottom: theme.spacing.xxs,
      },
    },
    description: {
      marginBottom: theme.spacing.xxs,
    },
    input: {
      height: rem(40),
      border: `1px solid ${theme.colors.dark[2]}`,
      backgroundColor: `${theme.colors.dark[4]}`,
      borderRadius: rem(5),
      color: `${theme.white}`,
      '&:focus, &:focus-within': {
        borderColor: theme.white,
      },
      '&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus':
        {
          '-webkit-text-fill-color': `${theme.white}`,
          '-webkit-box-shadow': `0 0 0px 1000px ${theme.colors.dark[4]} inset`,
        },
    },
    innerInput: {
      backgroundColor: 'transparent',
      height: rem(40),
      color: `${theme.white}`,
      '&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus':
        {
          '-webkit-text-fill-color': `${theme.white}`,
          '-webkit-box-shadow': `0 0 0px 1000px ${theme.colors.dark[4]} inset`,
          border: 0,
        },
    },
  }),
};
