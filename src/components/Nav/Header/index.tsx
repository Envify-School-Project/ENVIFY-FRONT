'use client';
import React from 'react';
import { Flex, Text } from '@mantine/core';
import { Button, ButtonIcon } from '../../Button';
import { useSession } from 'next-auth/react';
import { EnvifyLogo } from '@/components/Icon/Logo';

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
        <EnvifyLogo />
        <Text size="lg" pt={3} pl={3}>
          Envify
        </Text>
      </ButtonIcon>
      <Flex>
        {session ? (
          <Button variant="outline" href="/dashboard">
            Dashboard
          </Button>
        ) : (
          <>
            <Button variant="outline" href="/login" mr={16}>
              Login
            </Button>
            <Button href="/register">Get started</Button>
          </>
        )}
      </Flex>
    </Flex>
  );
};