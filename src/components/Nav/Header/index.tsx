import React from 'react';
import { Flex, Box } from '../../Mantine';
import { Button } from '../../Button';
import { GiHexagonalNut } from 'react-icons/gi';
import Link from 'next/link';

export const Header = () => {
  return (
    <Flex
      sx={{ borderBottom: `1px solid var(--mantine-color-dark-2)` }}
      justify="space-between"
      align="center"
      p="md"
      h={80}
    >
      <Link href="/">
        <GiHexagonalNut size={24} />
      </Link>
      <Flex>
        <Box mr="1rem">
          <Button variant="outline" redirectTo="/login">
            Login
          </Button>
        </Box>
        <Button redirectTo="/register">Get started</Button>
      </Flex>
    </Flex>
  );
};
