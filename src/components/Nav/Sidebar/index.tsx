import Link from 'next/link';
import classes from './Sidebar.module.css';
import { AppShellNavbar, Box, Text } from '@mantine/core';

export const Sidebar = () => {
  return (
    <AppShellNavbar className={classes.navbar} bg="dark.6" withBorder>
      <Text component={Link} href="/dashboard" c="white" mb={56} px="xs">
        Dashboard
      </Text>
      <Text component="p" c="dark.3" px="xs">
        Configurations
      </Text>
      {/* TODO: Create all links and make loops */}
      <Box component={Link} p="xs" href="/" className={classes.link}>
        My configurations
      </Box>
    </AppShellNavbar>
  );
};
