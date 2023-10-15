import { Sidebar } from '@/components/Nav/Sidebar';
import { getAuthSession } from '@/utils/authOptions';
import { AppShell, AppShellMain, Container } from '@mantine/core';
import jwt_decode from 'jwt-decode';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getAuthSession();

  // Todo: deconnect user before token expiration
  if (session?.jwtToken) {
    const decodedToken = jwt_decode(session.jwtToken);
    // console.log(decodedToken);
  }
  return (
    <AppShell navbar={{ width: 250, breakpoint: 'sm' }}>
      <Sidebar />
      <AppShellMain>
        <Container mt="xl" size="lg">
          {children}
        </Container>
      </AppShellMain>
    </AppShell>
  );
}
