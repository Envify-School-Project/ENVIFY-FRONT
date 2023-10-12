import type { StoryObj, Meta } from '@storybook/react';
import { BlockProperties } from '.';
import React from 'react';
import { PackageInput } from '@/utils/types/package.type';

const packagesInput: PackageInput[] = [
  {
    name: 'mariadb',
    versionId: 1,
    versionNumber: 12.0,
    packageProperties: [
      {
        label: 'You want to install brew',
        type: 'boolean',
        value: false,
      },
      {
        label: 'Give a user name',
        type: 'text',
        value: '',
      },
    ],
  },
  {
    name: 'docker',
    versionId: 2,
    versionNumber: 2.1,
    packageProperties: [
      {
        label: 'Select version docker',
        type: 'select',
        value: ['10', '11', '12'],
      },
    ],
  },
];

const meta: Meta<typeof BlockProperties> = {
  title: 'components/Blocks/BlockProperties',
  component: BlockProperties,
  tags: ['autodocs'],
  args: {},
  parameters: {
    docs: {
      toc: true, // 👈 Enables the table of contents
    },
  },
  argTypes: {},
  decorators: [(Story) => <Story />],
};
export default meta;
type Story = StoryObj<typeof BlockProperties>;

export const Default: Story = {
  render: () => (
    <>
      {packagesInput.map((packageInput, index) => (
        <BlockProperties
          name={packageInput.name}
          versionId={packageInput.versionId}
          versionNumber={packageInput.versionNumber}
          properties={packageInput.packageProperties}
          key={index}
        />
      ))}
    </>
  ),
};
