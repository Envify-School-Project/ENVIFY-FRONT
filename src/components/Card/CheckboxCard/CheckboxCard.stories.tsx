import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { CheckboxCard } from '.';
import { Group } from '@mantine/core';
import image from '../../../../public/node_img.svg';

const meta: Meta<typeof CheckboxCard> = {
  title: 'components/CheckboxCard',
  component: CheckboxCard,
  tags: ['autodocs'],
  args: {},
  parameters: {
    docs: {
      toc: true, // 👈 Enables the table of contents
    },
  },
  argTypes: {
    title: {
      description: `Title of card.`,
    },
    version: {
      description: `Different version for one package.`,
    },
    image: {
      description: `Image linked to the package.`,
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
type Story = StoryObj<typeof CheckboxCard>;

export const Default: Story = {
  render: (args) => (
    <>
      <CheckboxCard
        title={'Nodejs'}
        image={'https://nodejs.org/static/images/logo.svg'}
        version={['10.0', '11.0', '12.0']}
      />
    </>
  ),
};

export const WithoutImage: Story = {
  render: (args) => (
    <>
      <CheckboxCard
        title={'Nodejs'}
        image={''}
        version={['10.0', '11.0', '12.0']}
      />
    </>
  ),
};

export const WithoutVersion: Story = {
  render: (args) => (
    <>
      <CheckboxCard
        title={'Nodejs'}
        image={'https://nodejs.org/static/images/logo.svg'}
      />
    </>
  ),
};
