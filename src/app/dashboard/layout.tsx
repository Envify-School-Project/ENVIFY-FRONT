import { Sidebar } from '@/components/Nav/Sidebar';
import { AppShell, AppShellMain, Container } from '@mantine/core';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppShell navbar={{ width: 250, breakpoint: 'sm' }} pt="xl">
        <Sidebar />
        <AppShellMain>
          <Container size="lg">{children}</Container>
        </AppShellMain>
      </AppShell>
      <></>
    </>
  );
}
