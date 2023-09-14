import { ConfigCard } from '@/components/Card/ConfigCard';
import type { Config } from '@/utils/types/config.type';
import { Grid, GridCol, Title } from '@mantine/core';
import { apiClient } from '@/utils/api/apiFactory';
export default async function ConfigsList() {
  const configs: Config[] = await apiClient.get('/configs.json');

  return (
    <>
      <Title order={1} mb="xl">
        Configurations
      </Title>
      <Grid>
        {configs.map((config) => (
          <GridCol span={4} key={config.id}>
            <ConfigCard config={config} />
          </GridCol>
        ))}
      </Grid>
    </>
  );
}
