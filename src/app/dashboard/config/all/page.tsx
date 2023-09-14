import { ConfigCard } from '@/components/Card/ConfigCard';
import type { Config } from '@/utils/types/config.type';
import { Grid, GridCol, Title } from '@mantine/core';

const getUserConfigs = async () => {
  const res = await fetch(`${process.env.BASE_API_URL}/configs.json`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};
export default async function ConfigsList() {
  const configs: Config[] = await getUserConfigs();

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
