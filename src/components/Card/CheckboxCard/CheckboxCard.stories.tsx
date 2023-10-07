import type { StoryObj, Meta } from '@storybook/react';
import React, { useState } from 'react';
import { CheckboxCard } from '.';
import { Group, SimpleGrid } from '@mantine/core';

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
    onChange: {
      control: {
        disable: true,
      },
    },
    image: {
      description: `Image linked to the package.`,
    },
  },
  decorators: [
    (Story) => {
      return (
        <Group>
          <SimpleGrid>
            <Story />
          </SimpleGrid>
        </Group>
      );
    },
  ],
};
export default meta;
type Story = StoryObj<typeof CheckboxCard>;

export const Default: Story = {
  render: function Render() {
    const { value, handleChange } = useCheckboxOnChange();

    return (
      <>
        <CheckboxCard
          title={'Nodejs'}
          image={'https://nodejs.org/static/images/logo.svg'}
          version={['10.0', '11.0', '12.0']}
          onChange={handleChange}
        />

        <DisplayValue value={value} />
      </>
    );
  },
};

export const WithoutImage: Story = {
  render: function Render() {
    const { value, handleChange } = useCheckboxOnChange();

    return (
      <>
        <CheckboxCard
          title={'Nodejs'}
          image={''}
          version={['10.0', '11.0', '12.0']}
          onChange={handleChange}
        />
        <DisplayValue value={value} />
      </>
    );
  },
};

export const WithoutVersion: Story = {
  render: function Render() {
    const { value, handleChange } = useCheckboxOnChange();

    return (
      <>
        <CheckboxCard title={'Nodejs'} version={[]} onChange={handleChange} />
        <DisplayValue value={value} />
      </>
    );
  },
};

type CardCheckBoxOnChange = {
  packageName: string;
  packageVersion: string;
  checked: boolean;
};

const DisplayValue = ({
  value,
}: {
  value: CardCheckBoxOnChange | undefined;
}) => {
  return (
    <pre style={{ marginTop: 10, color: 'black' }}>
      {JSON.stringify({ value }, null, 2)}
    </pre>
  );
};

const useCheckboxOnChange = () => {
  const [value, setValue] = useState<CardCheckBoxOnChange | undefined>();

  const handleChange = (
    packageName: string,
    packageVersion: string,
    checked: boolean
  ) => {
    setValue({
      packageName: packageName,
      packageVersion: packageVersion,
      checked: checked,
    });
  };

  return {
    value,
    handleChange,
  };
};
