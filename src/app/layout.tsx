'use client';

import React from 'react';
import StyledComponentsRegistry from '~/lib/registry';
import { ReduxProvider } from '~/redux/provider';
import GlobalStyle from './styles/globalStyle';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <React.StrictMode>
          <ReduxProvider>
            <StyledComponentsRegistry>
              <GlobalStyle />
              {children}
            </StyledComponentsRegistry>
          </ReduxProvider>
        </React.StrictMode>
      </body>
    </html>
  );
}
