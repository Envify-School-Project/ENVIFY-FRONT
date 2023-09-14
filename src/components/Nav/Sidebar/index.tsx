import Link from 'next/link';
import classes from './Sidebar.module.css';
import { AppShellNavbar, Text } from '@mantine/core';

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
      <Text
        component={Link}
        p="xs"
        href="/dashboard/config/all"
        className={classes.link}
      >
        My configurations
      </Text>
    </AppShellNavbar>
  );
};
