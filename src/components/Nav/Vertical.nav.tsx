import { Button } from '../Button/Button';
import React from 'react';

export const VerticalNav = () => {
  return (
    <nav>
      <Button redirectTo="/">Landing</Button>
      <Button redirectTo="/home">Home</Button>
      <Button redirectTo="/login">Login</Button>
      <Button redirectTo="/register">Register</Button>
    </nav>
  );
};
