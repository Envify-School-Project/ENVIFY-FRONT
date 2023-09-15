import { Button } from '@/components/Button';
import { ConfigCard } from '@/components/Card/ConfigCard';
import { Box, Grid, GridCol } from '@mantine/core';
import { BsArrowRight } from 'react-icons/bs';
import { apiClient } from '@/utils/api/apiFactory';
import useSliceArrayBy from '@/hooks/useSliceArrayBy';
import type { Config } from '@/utils/types/config.type';

export default async function Dashboard() {
  const userConfigs: Config[] = await apiClient.get('/configs.json');
  const arrayOf3Configs = useSliceArrayBy<Config>(3)(userConfigs);

  return (
    <>
      <Button mt="xl" href="/dashboard/config/create">
        Create new config
      </Button>
      {arrayOf3Configs.length > 0 ? (
        <Box mt={36}>
          <Button
            pl={0}
            variant="arrow"
            href="/dashboard/config/all"
            rightSection={<BsArrowRight />}
          >
            My configurations
          </Button>
          <Grid>
            {arrayOf3Configs?.map((config, i) => (
              <GridCol span={4} key={i}>
                <ConfigCard config={config} />
              </GridCol>
            ))}
          </Grid>
        </Box>
      ) : (
        <p>You have no configurations yet.</p>
      )}
    </>
  );
}
