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
import { RiErrorWarningLine } from 'react-icons/ri';
import { apiServer } from '@/utils/api/apiFactory';
import { getArrayFirsts } from '@/utils/helpers';
import type { Configs, Config } from '@/utils/types/config.type';
import { ConfigSchema } from '@/utils/schemas/config.schema';

type HiddenConfig = {
  config: Config;
  error: string;
};

type ErrorDetails = {
  hasSomeUnusableConfigs: boolean;
  message: string;
  messageDetails: string;
  hiddenConfigs: HiddenConfig[];
};

export default async function Dashboard() {
  const res: unknown = await apiServer.get('/configs/me');
  const validConfigs: Configs = [];
  const errorDetails: ErrorDetails = {
    hasSomeUnusableConfigs: false,
    message: 'Some of your configs are not valid anymore',
    messageDetails:
      'Some of your configs has been hidden due to their unusability.\nPlease recreate them if needed or contact support.',
    hiddenConfigs: [],
  };

  if (res instanceof Array && res.length > 0) {
    await Promise.resolve(
      res.forEach((config: Config) => {
        const parsedConfig = ConfigSchema.safeParse(config);
        if (parsedConfig.success) {
          validConfigs.push(parsedConfig.data);
        } else {
          errorDetails.hasSomeUnusableConfigs = true;
          errorDetails.hiddenConfigs.push({
            config,
            error: parsedConfig.error.toString(),
          });
        }
      })
    );
  }

  const getFirsts3 = getArrayFirsts<Config>(3);
  const slicedValidConfigs = getFirsts3(validConfigs);

  return (
    <>
      <Button href="/dashboard/config/create">Create new config</Button>
      <Box mt={36}>
        {slicedValidConfigs?.length > 0 ? (
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
              {errorDetails.hasSomeUnusableConfigs && (
                <Flex align="center">
                  <Text component="p" size="sm" c="gray.6">
                    {errorDetails.message}
                  </Text>
                  <Popover width={300} withArrow shadow="md">
                    <PopoverTarget>
                      <ButtonIcon mb={0}>
                        <RiErrorWarningLine color="red" />
                      </ButtonIcon>
                    </PopoverTarget>
                    <PopoverDropdown>
                      <Text component="p" size="md" c="gray.4" mb="lg">
                        {errorDetails.messageDetails}
                      </Text>

                      <Text component="p" size="sm" c="gray.4">
                        CONCERNED CONFIGS :
                        {errorDetails.hiddenConfigs.map(({ config }) => (
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
              {slicedValidConfigs.map((config) => (
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
}
