import { createFormContext } from '@mantine/form';
import { PackageInput } from '@/utils/types/config.type';

export type ConfigContext = {
  configName?: string;
  packages: PackageInput[];
};

export const [ConfigFormProvider, useConfigFormContext, useConfigForm] =
  createFormContext<ConfigContext>();
