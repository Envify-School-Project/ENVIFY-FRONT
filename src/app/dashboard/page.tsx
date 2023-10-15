import { Button, ButtonIcon } from '@/components/Button';
import { ConfigCard } from '@/components/Card/ConfigCard';
import {
  Box,
  Flex,
  Grid,
  GridCol,
  Popover,
  PopoverDropdown,
  PopoverTarget,
  Text,
} from '@mantine/core';
import { BsArrowRight } from 'react-icons/bs';
import { getValidConfigs } from './getValidConfigs';
import { RiErrorWarningLine } from 'react-icons/ri';

export default async function Dashboard() {
  const { configs, errors } = await getValidConfigs(3);

  return (
    <>
      <Button href="/dashboard/config/create">Create new config</Button>
      <Box mt={36}>
        {configs?.length > 0 ? (
          <>
            <Flex align="center" justify="space-between">
              <Button
                p={0}
                variant="arrow"
                href="/dashboard/config/all"
                rightSection={<BsArrowRight />}
              >
                Your configurations
              </Button>
              {errors?.hasSomeUnusableConfigs && (
                <Flex align="center">
                  <Text component="p" size="sm" c="gray.6">
                    {errors.message}
                  </Text>
                  <Popover width={300} withArrow shadow="md">
                    <PopoverTarget>
                      <ButtonIcon mb={0}>
                        <RiErrorWarningLine color="red" />
                      </ButtonIcon>
                    </PopoverTarget>
                    <PopoverDropdown>
                      <Text component="p" size="md" c="gray.4" mb="lg">
                        {errors.messageDetails}
                      </Text>

                      <Text component="p" size="sm" c="gray.4">
                        CONCERNED CONFIGS :
                        {errors.hiddenConfigs.map(({ config }) => (
                          <Text key={config.id} c="red">
                            {config.name}
                          </Text>
                        ))}
                      </Text>
                    </PopoverDropdown>
                  </Popover>
                </Flex>
              )}
            </Flex>

            <Grid mt={24}>
              {configs.map((config) => (
                <GridCol key={config.id} span={4}>
                  {/* @ts-expect-error Async Server Components */}
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
}
