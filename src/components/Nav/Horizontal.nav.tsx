'use client';
import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@mantine/core';
import { Button } from '../Button';
import Link from 'next/link';
import { GiHexagonalNut } from 'react-icons/gi';

export const HorizontalNav = () => {
  return (
    <CustomNav>
      <Link href={'/'}>
        <GiHexagonalNut size={24} />
      </Link>
      <Box display="flex">
        <Box mr="1rem">
          <Button variant="outline" redirectTo="/login">
            Login
          </Button>
        </Box>
        <Button redirectTo="/register">Register</Button>
      </Box>
    </CustomNav>
  );
};

const CustomNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: auto;
  border-bottom: 1px solid #353535;
  padding: 1.5rem;
`;
