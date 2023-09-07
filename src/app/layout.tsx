import Theme from '../components/Theme';
import { Manrope } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Theme font={manrope.style}>
          <main style={{ minHeight: '100vh' }}>{children}</main>
        </Theme>
      </body>
    </html>
  );
}
