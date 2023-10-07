import { PackageInput, PackageProperties } from '@/utils/types/package.type';
import {
  Box,
  Grid,
  GridCol,
  Select,
  Switch,
  TextInput,
  Title,
} from '@mantine/core';
import React from 'react';

export const BlockProperties = (packageInput: PackageInput) => {
  return (
    <Grid>
      <GridCol>
        <Title order={2} mb="sm">
          {packageInput.name}
        </Title>
        {packageInput.packageProperties.map((pck, index) => (
          <Box mb="lg" key={index}>
            <InputDisplay {...pck} />
          </Box>
        ))}
      </GridCol>
    </Grid>
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
          data={props.value}
          defaultValue={props.value[0]}
          required={true}
        />
      );
    default:
      return (
        <TextInput
          placeholder={props.label}
          label={props.label}
          required={true}
          defaultValue={props.value}
        />
      );
  }
};
