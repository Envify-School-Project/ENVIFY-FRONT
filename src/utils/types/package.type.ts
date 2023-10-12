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

export type PackagePropertiesDto = {
  id: number;
  packageVersionId: number;
  properties: string;
  description?: string | null;
};

export type PackageInput = {
  id: number;
  name: string;
  packageVersions: PackageVersionsInput;
  packageProperties: PropertiesInput[];
};

type PackageVersionsInput = {
  id: number;
  packageId: number;
  versionNumber: string;
};

export type PackagePropertiesInput = {
  packageName: string;
  packageVersionId: number;
  properties: PropertiesInput[];
};

export type PropertiesInput = PropertiesMultipleInput | PropertiesSingleInput;

type PropertiesText = {
  category?: string | null;
  field: string;
  label: string;
  type: 'text';
  value: string;
};

type PropertiesSwitch = {
  category?: string | null;
  field: string;
  label: string;
  type: 'boolean';
  value: boolean;
};

type PropertiesSelect = {
  category?: string | null;
  field: string;
  label: string;
  type: 'select';
  value: string;
  items: string[];
};

export type PropertiesSingleInput =
  | PropertiesText
  | PropertiesSwitch
  | PropertiesSelect;

export type PropertiesMultipleInput = {
  type: 'multiple';
  category?: string | null;
  field: string;
  label: string;
  properties: PropertiesSingleInput[];
  value: PropertiesMultipleInput['properties'][];
};
