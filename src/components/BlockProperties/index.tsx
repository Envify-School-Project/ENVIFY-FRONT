import { PackageInput, PackageProperties } from '@/utils/types/package.type';
import { Box, Select, Switch, TextInput, Title } from '@mantine/core';
import React from 'react';

type BlockPropertiesProps = {
  name: string;
  packageProperties: PackageProperties[];
};

export const BlockProperties = ({
  name,
  packageProperties,
}: BlockPropertiesProps) => {
  console.log(packageProperties);
  return (
    <Box mb="xl">
      <Title order={2} mb="sm">
        {name}
      </Title>
      {packageProperties.map((pck, index) => (
        <Box mb="sm" key={index}>
          <InputDisplay {...pck} />
        </Box>
      ))}
    </Box>
  );
};

const InputDisplay = (props: PackageProperties) => {
  switch (props.type) {
    case 'boolean':
      return (
        <Switch
          label={props.label}
          required={true}
          defaultChecked={props.value}
        />
      );
    case 'select':
      return (
        <Select
          label={props.label}
          placeholder={props.label}
          data={props.items}
          defaultValue={props.value}
          required={true}
        />
      );
    case 'text':
      return (
        <TextInput
          placeholder={props.label}
          label={props.label}
          required={true}
          defaultValue={props.value}
        />
      );
    default:
      return props.properties.map((property, index) => (
        <InputDisplay key={index} {...property} />
      ));
  }
};
