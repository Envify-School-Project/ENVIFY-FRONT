import useSliceArrayBy from '@/hooks/useSliceArrayBy';
import { Button } from '@/components/Button';
import { ConfigCard } from '@/components/Card/ConfigCard';
import { Box, Grid, GridCol } from '@mantine/core';
import { BsArrowRight } from 'react-icons/bs';
import { apiClient } from '@/utils/api/apiFactory';
import type { Config } from '@/utils/types/config.type';

export default async function Dashboard() {
  const userConfigs: Config[] = await apiClient.get('/configs.json');
  const suggestedConfigs: Config[] = await apiClient.get(
    '/suggested_configs.json'
  );
  const slicedConfigs = useSliceArrayBy<Config>(3)(userConfigs);
  const slicedSuggestedConfigs = useSliceArrayBy<Config>(3)(suggestedConfigs);

  return (
    <>
      <Button mt="xl" href="/dashboard/config/create">
        Create new config
      </Button>
      {slicedConfigs.length > 0 ? (
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
            {slicedConfigs?.map((config, i) => (
              <GridCol span={4} key={i}>
                <ConfigCard config={config} />
              </GridCol>
            ))}
          </Grid>
        </Box>
      ) : (
        <p>You have no configurations yet.</p>
      )}

      {slicedSuggestedConfigs.length > 0 && (
        <Box mt={36}>
          <Button
            pl={0}
            variant="arrow"
            href="/dashboard/suggested-config/all"
            rightSection={<BsArrowRight />}
          >
            Suggested configurations
          </Button>
          <Grid>
            {slicedSuggestedConfigs?.map((config, i) => (
              <GridCol span={4} key={i}>
                <ConfigCard config={config} type="suggested" />
              </GridCol>
            ))}
          </Grid>
        </Box>
      )}
    </>
  );
}
