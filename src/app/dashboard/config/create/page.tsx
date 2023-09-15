import { Grid, GridCol, Title } from '@mantine/core';
import { Stepper } from '@/components/Nav/Stepper';
import { apiClient } from '@/utils/api/apiFactory';
import { Package } from '@/utils/types/config.type';
import { CheckboxCard } from '@/components/Card/CheckboxCard';
export default async function CreateConfig() {
  const packages: Package[] = await apiClient.get('/packages.json');

  return (
    <>
      <Title order={1} mb="xl">
        Create new config
      </Title>
      <Stepper>
        <Grid>
          {packages?.map((pkg, index) => (
            <GridCol span={4} key={index}>
              <CheckboxCard
                image={pkg.logo}
                title={pkg.name}
                version={pkg.version}
              />
            </GridCol>
          ))}
        </Grid>
      </Stepper>
    </>
  );
}
