import React, { useState } from 'react';
import { useHotkeys } from '@mantine/hooks';
import { MantineProvider, ColorSchemeProvider, ColorScheme, Container } from '@mantine/core';
import MenuBar from '../MenuBar/MenuBar';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      {/* Add your theme here */}
      <MantineProvider
        theme={{
          colorScheme,
          fontFamily: 'Quicksand, sans-serif',
          fontFamilyMonospace: 'Monaco, Courier, monospace',
          headings: { fontFamily: 'Greycliff CF, sans-serif' },
          globalStyles: (theme) => ({
            body: {
              ...theme.fn.fontStyles(),
              backgroundColor: 'gray',
            },
          }),
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Container size="lg" mt="4rem">
          <MenuBar />
          {children}
        </Container>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
