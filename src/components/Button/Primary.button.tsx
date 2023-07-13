import { LinkProps } from '@/utils/types/component.type';
import { Button } from '@mantine/core';
import Link from 'next/link';
import React from 'react';
import styled from '@emotion/styled';

const LinkCustom = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

export const PrimaryButton = ({ href, children }: LinkProps) => {
  return (
    <Button color="violet">
      <LinkCustom href={href}>{children}</LinkCustom>
    </Button>
  );
};
