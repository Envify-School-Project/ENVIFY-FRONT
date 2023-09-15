import { Title } from '@mantine/core';
import { Stepper } from '@/components/Nav/Stepper';
import { apiClient } from '@/utils/api/apiFactory';
import { Package, Script } from '@/utils/types/config.type';

export default async function CreateConfig() {
  const packagesData: Package[] = await apiClient.get('/packages.json');
  const scriptsData: Script[] = await apiClient.get('/scripts.json');

  return (
    <>
      <Title order={1} mb="xl">
        Create new config
      </Title>
      <Stepper packages={packagesData} scripts={scriptsData} />
    </>
  );
}
