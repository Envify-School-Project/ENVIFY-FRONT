// todo : add logo
export type PackageDto = {
  id: number;
  name: string;
};

export type PackageVersionDto = {
  id: number;
  versionStatusId: number;
  packageId: number;
  url?: string | null;
  versionNumber?: string | null;
};

export type PackageConfigFilesDto = {
  id: number;
  packageVersionId: number;
  description?: string | null;
  properties?: string | null;
};

export type PackageInput = {
  name: string;
  versionId: number;
  versionNumber: number;
  packageProperties: PackageProperties[];
};

export type PackageProperties = {
  label: string;
} & (
  | PackagePropertiesInput
  | PackagePropertiesSwitch
  | PackagePropertiesSelect
);

type PackagePropertiesInput = {
  type: 'text';
  value: string;
};

type PackagePropertiesSwitch = {
  type: 'boolean';
  value: boolean;
};

type PackagePropertiesSelect = {
  type: 'select';
  value: string[];
};
