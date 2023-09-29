import type { StoryObj, Meta } from '@storybook/react';
import { Button } from '.';
import { ButtonCopy } from './Copy.Button';
import { Group } from '@mantine/core';
import { BsArrowRight } from 'react-icons/bs';
import React from 'react';

const meta: Meta<typeof Button | typeof ButtonCopy> = {
  title: 'components/Button',
  component: [Button, ButtonCopy],
  tags: ['autodocs'],
  args: {
    children: 'Button',
  },
  parameters: {
    docs: {
      toc: true, // 👈 Enables the table of contents
    },
  },
  argTypes: {
    variant: {
      control: { type: 'string' }, // Automatically inferred when 'options' is defined
      description: `Type of button. ${(<br />)} Type : string`,
    },
    href: {
      control: { type: 'string' }, // Automatically inferred when 'options' is defined
      description: `Link of button. ${(<br />)} Type : string`,
    },
    required: {
      control: { type: 'string' },
      description: `Button is required ?. ${(<br />)} Type : Boolean`,
    },
    disabled: {
      control: { type: 'string' },
      description: `Button is disabled ?. ${(<br />)} Type : Boolean`,
    },
  },
  decorators: [
    (Story) => (
      <Group>
        <Story />
      </Group>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args) => (
    <>
      <Button {...args} />
      <Button variant="outline" {...args} />
      <Button variant="arrow" rightSection={<BsArrowRight />} {...args} />
      <ButtonCopy value={'value'} />
    </>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <>
      <Button disabled={true} {...args} />
      <Button variant="outline" disabled={true} {...args} />
      <Button
        variant="arrow"
        disabled={true}
        rightSection={<BsArrowRight />}
        {...args}
      />
    </>
  ),
};

export const Link: Story = {
  render: (args) => (
    <>
      <Button href="/" {...args} />
      <Button variant="outline" href="/" {...args} />
      <Button variant="arrow" rightSection={<BsArrowRight />} {...args} />
    </>
  ),
};
