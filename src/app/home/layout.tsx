'use client';
import HeaderVertical from '@/components/Nav/Header.vertical';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavVertical />
      <main>{children}</main>
    </>
  );
}
