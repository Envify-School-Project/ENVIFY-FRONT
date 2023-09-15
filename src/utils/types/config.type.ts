export type Package = {
  name: string;
  alias: string;
  version?: string | string[];
  logo?: string;
};

export type Script = {
  comment: string;
  script: string;
};

export type Config = {
  id: number;
  name: string;
  created_at: string;
  packages: Package[];
  scripts?: Script[];
};

export type Configs = Config[];
