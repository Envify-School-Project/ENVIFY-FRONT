import { Button } from '@/components/Button';
import { ConfigCard } from '@/components/Card/ConfigCard';
import { Box, Grid, GridCol } from '@mantine/core';
import { BsArrowRight } from 'react-icons/bs';
import { apiClient } from '@/utils/api/apiFactory';
import { getArrayFirsts } from '@/utils/helpers';
import type { Configs, Config } from '@/utils/types/config.type';
import { ConfigArraySchema } from '@/utils/schemas/config.schema';

export default async function Dashboard() {
  const getUserConfigs: Configs = await apiClient.get('/configs/me');
  const userConfigs = ConfigArraySchema.safeParse(getUserConfigs);

  if (userConfigs.success) {
    const slicedConfigs = getArrayFirsts<Config>(3)(userConfigs.data) ?? [];

    return (
      <>
        <Button href="/dashboard/config/create">Create new config</Button>
        <Box mt={36}>
          {slicedConfigs?.length > 0 ? (
            <>
              <Button
                p={0}
                variant="arrow"
                href="/dashboard/config/all"
                rightSection={<BsArrowRight />}
              >
                Your configurations
              </Button>
              <Grid mt={24}>
                {slicedConfigs.map((config) => (
                  <GridCol key={config.id} span={4}>
                    <ConfigCard config={config} />
                  </GridCol>
                ))}
              </Grid>
            </>
          ) : (
            <p>You have no configs yet.</p>
          )}
        </Box>
      </>
    );
  } else {
    console.error(userConfigs.error);

    return (
      <p>
        An error occurred while fetching your configs. Please try again later.
      </p>
    );
  }
}
