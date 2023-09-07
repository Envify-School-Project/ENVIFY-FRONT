'use client';
import { MantineProvider } from '@mantine/core';
import { mantineTheme } from './base.theme';

export default function Theme({
  children,
  font,
}: {
  children: JSX.Element;
  font: {
    fontFamily: string;
    fontWeight?: number | undefined;
    fontStyle?: string | undefined;
  };
}) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      withCSSVariables
      theme={{ ...mantineTheme, ...font }}
    >
      {children}
    </MantineProvider>
  );
}
