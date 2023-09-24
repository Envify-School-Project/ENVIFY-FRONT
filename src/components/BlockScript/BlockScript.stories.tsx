import type { StoryObj, Meta } from '@storybook/react';
import { BlockScript } from '.';
import React from 'react';

const meta: Meta<typeof BlockScript> = {
  title: 'components/BlockScript',
  component: BlockScript,
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
    comment: {
      control: { type: 'string' },
      description: `Text for comment bloc. ${(<br />)} Type : string`,
    },
    code: {
      control: { type: 'string' },
      description: `Script generate. ${(<br />)} Type : string`,
    },
  },
  decorators: [(Story) => <Story />],
};
export default meta;
type Story = StoryObj<BlockScript>;

export const Default: Story = {
  render: (args) => <BlockScript comment="Nodejs" code="npm instal node" />,
};

export const WithoutComment: Story = {
  render: (args) => <BlockScript code={'npm instal node'} />,
};

export const LongCode: Story = {
  render: (args) => (
    <BlockScript
      comment="Docker"
      code={`$ docker -o ../docker_gh-pages -c atelier-cave.light -s yes -I -u -x node_modules -w --extras fileSearch
    `}
    />
  ),
};

export const LongComment: Story = {
  render: (args) => (
    <BlockScript
      comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      code={`$ docker -o ../docker_gh-pages -c atelier-cave.light -s yes -I -u -x node_modules -w --extras fileSearch
      `}
    />
  ),
};
