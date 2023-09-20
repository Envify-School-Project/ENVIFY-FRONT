import type { StoryObj, Meta } from '@storybook/react';
import { StepperForm } from './Stepper.form';
import { StepForm } from './Step.form';
import { Group, TextInput } from '@mantine/core';
import React from 'react';
import { StepperProvider } from './Stepper.provider';

const meta: Meta<typeof StepperForm> = {
  title: 'components/Form/StepperForm',
  component: StepperForm,
  tags: ['autodocs'],
  parameters: {
    docs: {
      toc: true, // 👈 Enables the table of contents
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
type Story = StoryObj<typeof StepperForm>;
export const Default: Story = {
  render: (args) => (
    <StepperProvider>
      <StepperForm>
        <StepForm label={'Step 1'} description={'Description 1'}>
          <TextInput label="input 1"></TextInput>
        </StepForm>
        <StepForm label={'Step 2'} description={'Description 2'}>
          <TextInput label="input 2"></TextInput>
        </StepForm>
      </StepperForm>
    </StepperProvider>
  ),
};
