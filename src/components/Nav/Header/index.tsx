import React from 'react';
import { Flex, Box } from '../../Mantine';
import { Button } from '../../Button';
import { GiHexagonalNut } from 'react-icons/gi';

export const Header = () => {
  return (
    <Flex
      sx={{ borderBottom: `1px solid var(--mantine-color-dark-2)` }}
      justify="space-between"
      align="center"
      p="md"
      h={80}
    >
      <Button variant="subtle" redirectTo="/" h={48} p={12}>
        <GiHexagonalNut size={24} color="#fff" />
      </Button>
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
