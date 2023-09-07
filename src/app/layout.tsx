import Theme from '../components/Theme/Theme';
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
          <main>{children}</main>
        </Theme>
      </body>
    </html>
  );
}
