// todo : add logo
export type PackageDto = {
  id: number;
  name: string;
  packageVersions: PackageVersionDto[];
};

export type PackageVersionDto = {
  id: number;
  versionStatusId: number;
  packageId: number;
  url: string;
  versionNumber: string;
};

export type PackageConfigFilesDto = {
  id: number;
  packageVersionId: number;
  description?: string | null;
  properties?: string | null;
};

export type PackageInput = {
  id: number;
  name: string;
  packageVersions: PackageVersionsInput;
  packageProperties: PackageProperties[];
};

type PackageVersionsInput = {
  id: number;
  packageId: number;
  versionNumber: string;
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
