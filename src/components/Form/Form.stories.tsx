import type { StoryObj, Meta } from '@storybook/react';
import { RegisterForm } from './Register.form';
import { LoginForm } from './Login.form';
import React from 'react';
import { Group } from '@mantine/core';

const meta: Meta<typeof RegisterForm | typeof LoginForm> = {
  title: 'components/Form',
  component: [RegisterForm, LoginForm],
  tags: ['autodocs'],
  args: {},
  parameters: {
    docs: {
      toc: true, // 👈 Enables the table of contents
    },
  },
  argTypes: {},
  decorators: [
    (Story) => (
      <Group>
        <Story />
      </Group>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof RegisterForm | typeof LoginForm>;

export const DefaultRegister: Story = {
  render: (args) => (
    <>
      <RegisterForm />
    </>
  ),
};

export const DefaultLogin: Story = {
  render: (args) => (
    <>
      <LoginForm />
    </>
  ),
};
