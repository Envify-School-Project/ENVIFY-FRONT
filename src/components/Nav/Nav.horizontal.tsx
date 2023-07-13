import React from 'react';
import { GiHexagonalNut } from 'react-icons/gi';
import { PrimaryButton } from '../Button/Primary.button';
import { OutlineButton } from '../Button/Outline.button';
import { LogoButton } from '../Button/Logo.button';
import styled from '@emotion/styled';
import { Box } from '@mantine/core';

const CustomNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: auto;
  border-bottom: 1px solid #353535;
  padding: 1.5rem;
`;

export const NavHorizontal = () => {
  return (
    <CustomNav>
      <LogoButton href={'/'}>{<GiHexagonalNut />}</LogoButton>
      <Box display="flex">
        <Box mr="1rem">
          <OutlineButton href={'/login'}>Login</OutlineButton>
        </Box>
        <PrimaryButton href={'/register'}>Register</PrimaryButton>
      </Box>
    </CustomNav>
  );
};
