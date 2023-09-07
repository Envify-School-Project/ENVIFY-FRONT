import React from 'react';
import { Button } from '../Button';
import { BsArrowRight } from 'react-icons/bs';

export const HeaderVertical = () => {
  return (
    <>
      <Button outlined redirectTo={'/'}>
        Landing
      </Button>
      <Button redirectTo={'/home'}>Home</Button>
      <Button redirectTo={'/login'}>Login</Button>
      <Button redirectTo={'/register'}>Register</Button>
      <Button rightIcon={<BsArrowRight />} redirectTo="/">
        Arrow button
      </Button>
    </>
  );
};
