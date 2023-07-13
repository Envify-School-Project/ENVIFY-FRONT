import React from 'react';
import { PrimaryButton } from '../Button/Primary.button';
import { OutlineButton } from '../Button/Outline.button';
import { ArrowButton } from '../Button/Arrow.button';

export const NavVertical = () => {
  return (
    <nav>
      <OutlineButton href={'/'}>Landing</OutlineButton>
      <PrimaryButton href={'/home'}>Home</PrimaryButton>
      <PrimaryButton href={'/login'}>Login</PrimaryButton>
      <PrimaryButton href={'/register'}>Register</PrimaryButton>
      <ArrowButton href={''}>Arrow button</ArrowButton>
    </nav>
  );
};
