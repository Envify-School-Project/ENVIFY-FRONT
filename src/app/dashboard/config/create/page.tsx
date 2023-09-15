import { Title } from '@mantine/core';
import { Stepper } from '@/components/Nav/Stepper';
import { apiClient } from '@/utils/api/apiFactory';
import { Package } from '@/utils/types/config.type';

export default async function CreateConfig() {
  const packages: Package[] = await apiClient.get('/packages.json');

  return (
    <>
      <Title order={1} mb="xl">
        Create new config
      </Title>
      <Stepper data={packages} />
    </>
  );
}
