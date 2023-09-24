import type { StoryObj, Meta } from '@storybook/react';
import { TextInput, PasswordInput } from '@mantine/core';
import React from 'react';

const meta: Meta<typeof TextInput | typeof PasswordInput> = {
  title: 'components/Input',
  component: [TextInput, PasswordInput],
  tags: ['autodocs'],
  args: {
    children: '',
  },
  parameters: {
    docs: {
      toc: true, // 👈 Enables the table of contents
    },
  },
  argTypes: {
    placeholder: {
      control: { type: 'string' },
      description: `Text inside the field. ${(<br />)} Type : string`,
    },
    label: {
      control: { type: 'string' },
      description: `Text above the field. ${(<br />)} Type : string`,
    },
    name: {
      control: { type: 'string' },
      description: `Name value for the field. ${(<br />)} Type : string`,
    },
    required: {
      control: { type: 'string' },
      description: `Input is required ?. ${(<br />)} Type : Boolean`,
    },
    disabled: {
      control: { type: 'string' },
      description: `Input is disabled ?. ${(<br />)} Type : Boolean`,
    },
  },
  decorators: [(Story) => <Story />],
};
export default meta;
type Story = StoryObj<typeof TextInput | typeof PasswordInput>;

export const Default: Story = {
  render: (args) => (
    <>
      <TextInput
        placeholder="Your email"
        label="Email"
        name="email"
        required={false}
      />
      <PasswordInput
        placeholder="Your password"
        label="Password"
        name="password"
        required={false}
      />
    </>
  ),
};

export const Required: Story = {
  render: (args) => (
    <>
      <TextInput
        placeholder="Your email"
        label="Email"
        name="email"
        required={true}
      />
      <PasswordInput
        placeholder="Your password"
        label="Password"
        name="password"
        required={true}
      />
    </>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <>
      <TextInput
        placeholder="Your email"
        label="Email"
        name="email"
        required={false}
        disabled={true}
      />
      <PasswordInput
        placeholder="Your password"
        label="Password"
        name="password"
        required={false}
        disabled={true}
      />
    </>
  ),
};
