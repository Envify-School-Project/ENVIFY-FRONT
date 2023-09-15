import { ConfigCard } from '@/components/Card/ConfigCard';
import type { Config } from '@/utils/types/config.type';
import { Grid, GridCol, Title } from '@mantine/core';
import { apiClient } from '@/utils/api/apiFactory';
export default async function ConfigsList() {
  const suggestedConfigs: Config[] = await apiClient.get(
    '/suggested_configs.json'
  );

  return (
    <>
      <Title order={1} mb="xl">
        Suggested and verified configurations
      </Title>
      <Grid>
        {suggestedConfigs.map((config) => (
          <GridCol span={4} key={config.id}>
            <ConfigCard config={config} type="suggested" />
          </GridCol>
        ))}
      </Grid>
    </>
  );
}
