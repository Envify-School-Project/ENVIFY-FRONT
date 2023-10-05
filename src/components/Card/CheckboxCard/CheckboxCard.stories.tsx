import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { CheckboxCard } from '.';
import { Group } from '@mantine/core';

const meta: Meta<typeof CheckboxCard> = {
  title: 'components/Cards/CheckboxCard',
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
  render: () => (
    <>
      <CheckboxCard
        title={'Nodejs'}
        image={'https://nodejs.org/static/images/logo.svg'}
        version={['10.0', '11.0', '12.0']}
        onChange={function (
          configName: string,
          version: string,
          checked: boolean
        ): void {
          throw new Error('Function not implemented.');
        }}
      />
    </>
  ),
};

export const WithoutImage: Story = {
  render: () => (
    <>
      <CheckboxCard
        title={'Nodejs'}
        image={''}
        version={['10.0', '11.0', '12.0']}
        onChange={function (
          configName: string,
          version: string,
          checked: boolean
        ): void {
          throw new Error('Function not implemented.');
        }}
      />
    </>
  ),
};

export const WithoutVersion: Story = {
  render: () => (
    <>
      <CheckboxCard
        title={'Nodejs'}
        image={'https://nodejs.org/static/images/logo.svg'}
        version={[]}
        onChange={function (
          configName: string,
          version: string,
          checked: boolean
        ): void {
          throw new Error('Function not implemented.');
        }}
      />
    </>
  ),
};
