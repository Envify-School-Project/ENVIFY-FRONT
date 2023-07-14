import React from 'react';
import { useForm } from '@mantine/form';
import { Box, Button, PasswordInput, TextInput } from '@mantine/core';

export const FormLogin = () => {
  const form = useForm<{ email: string; password: string }>({
    initialValues: {
      email: '',
      password: '',
    },

    validate: (values) => ({
      email: /^\S+@\S+$/.test(values.email) ? null : 'Invalid email',
      password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
        values.password
      )
        ? null
        : 'Password must include at least one letter, number and special character',
    }),
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Box mb="0.75rem">
        <TextInput
          placeholder="Your email"
          label="Email"
          description={undefined}
          required={true}
          {...form.getInputProps('email')}
        />
      </Box>
      <PasswordInput
        placeholder="Your password"
        label="Password"
        description="Password must include at least one letter, number and special character"
        required={true}
        {...form.getInputProps('password')}
      />
      <Button type="submit" mt="2rem">
        Sign in
      </Button>
    </form>
  );
};
