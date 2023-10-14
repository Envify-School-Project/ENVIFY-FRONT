import { OperatingSystemInput } from './operatingSystem.type';
import { ConfigArraySchema, ConfigSchema } from '../schemas/config.schema';
import { PackageInput, PackagePropertiesInput } from './package.type';
import { z } from 'zod';

export type Configs = z.infer<typeof ConfigArraySchema>;
export type Config = z.infer<typeof ConfigSchema>;

export type Package = {
  name: string;
  version: string[];
  alias: string;
  logo?: string;
};

export type Script = {
  comment: string;
  script: string;
};

export type ConfigInput = {
  configName: string;
  operatingSystem: OperatingSystemInput;
  packages: PackageInput[];
  packagesProperties: PackagePropertiesInput[];
};
