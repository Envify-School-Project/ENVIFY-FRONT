import { MantineThemeComponents } from '@mantine/styles/lib/theme/types/MantineTheme';

declare module '@mantine/core' {
  export interface MantineThemeComponent
    extends MantineThemeComponents['components'] {}
}
