import { Theme } from '@/components/Theme';
import './global.css';
import '@mantine/core/styles.layer.css';
import { ReactQueryClientProvider } from '@/components/providers/react-query.provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Theme>
          <ReactQueryClientProvider>
            <main>{children}</main>
          </ReactQueryClientProvider>
        </Theme>
      </body>
    </html>
  );
}
