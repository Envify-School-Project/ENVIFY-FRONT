export type Package = {
  name: string;
  alias: string;
  version?: string;
  logo?: string;
};

export type Config = {
  id: number;
  name: string;
  created_at: string;
  packages: Package[];
};

export type Configs = Config[];
