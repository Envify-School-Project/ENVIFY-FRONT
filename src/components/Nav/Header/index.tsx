'use client';
import React from 'react';
import { Flex, Box } from '@mantine/core';
import { Button, ButtonIcon } from '../../Button';
import { GiHexagonalNut } from 'react-icons/gi';
import { useSession } from 'next-auth/react';

export const Header = () => {
  const { data: session } = useSession();

  return (
    <Flex
      style={{
        borderBottom: `1px solid var(--mantine-color-dark-4)`,
      }}
      justify="space-between"
      align="center"
      p="md"
      h={80}
      w="100%"
    >
      <ButtonIcon>
        <GiHexagonalNut size={24} />
      </ButtonIcon>
      <Flex>
        <Box mr="1rem">
          {session ? (
            <Button variant="outline" href="/dashboard">
              Dashboard
            </Button>
          ) : (
            <Button variant="outline" href="/login">
              Login
            </Button>
          )}
        </Box>
        <Button href="/register">Get started</Button>
      </Flex>
    </Flex>
  );
};
