import React from 'react';
import { Flex, Loader } from '@mantine/core';

export const Loading = () => {
  return (
    <Flex justify="center" align="center" direction="row">
      <Loader color="violet" size={'xl'} />
    </Flex>
  );
};
