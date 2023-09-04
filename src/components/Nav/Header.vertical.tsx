import React from 'react';
import { Button, ButtonPrimary, ButtonSecondary } from '../Button/Button';
import { BsArrowRight } from 'react-icons/bs';

export const HeaderVertical = () => {
  return (
    <>
      <ButtonSecondary href={'/'}>Landing</ButtonSecondary>
      <ButtonPrimary href={'/home'}>Home</ButtonPrimary>
      <ButtonPrimary href={'/login'}>Login</ButtonPrimary>
      <ButtonPrimary href={'/register'}>Register</ButtonPrimary>
      <Button rightIcon={<BsArrowRight />} href={''}>
        Arrow button
      </Button>
    </>
  );
};
