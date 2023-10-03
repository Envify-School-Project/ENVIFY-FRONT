import { TextInput } from '@mantine/core';
import { useConfigFormContext } from '../configForm.context';

export const ConfigNameBlock = (): JSX.Element => {
  const form = useConfigFormContext();

  return (
    <TextInput
      placeholder="Enter a config name"
      label="Config name"
      name="name"
      {...form.getInputProps('configName')}
    />
  );
};
