import { Grid, GridCol, TextInput, Title } from '@mantine/core';
import { Stepper } from '@/components/Nav/Stepper';
import { apiClient } from '@/utils/api/apiFactory';
import { Package } from '@/utils/types/config.type';
import { CheckboxCard } from '@/components/Card/CheckboxCard';
import { BlockScript } from '@/components/BlockScript';

export default async function CreateConfig() {
  const packages: Package[] = await apiClient.get('/packages.json');

  return (
    <>
      <Title order={1} mb="xl">
        Create new config
      </Title>
      <Stepper />
    </>
  );
}
