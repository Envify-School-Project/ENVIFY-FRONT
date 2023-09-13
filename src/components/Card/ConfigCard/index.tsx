import classes from './ConfigCard.module.css';
import useSliceArrayBy from '@/utils/hooks/useSliceArrayBy';
import useFormatDateRelative from '@/utils/hooks/useFormatDateRelative';
import { Avatar, AvatarGroup, Box, Flex, Text } from '@mantine/core';
import { BsChevronRight } from 'react-icons/bs';
import type { Config, Package } from '@/utils/types/config.type';
import Link from 'next/link';

export const ConfigCard = ({ config }: { config: Config }) => {
  const arrayOf3Packages = useSliceArrayBy<Package>(3)(config?.packages);
  const formattedCreatedAt = useFormatDateRelative(config?.created_at);

  return (
    <Link href={`/dashboard/configs/${config.id}`}>
      <Box className={`${classes.configCard} h-100`} p="md">
        <Flex justify="space-between">
          <Text component="p">{config.name}</Text>
          <BsChevronRight className={classes.icon} />
        </Flex>
        <Box>
          <AvatarGroup my="lg">
            {arrayOf3Packages
              ?.slice(0, 3)
              .map((pkg: Package, i) => (
                <Avatar
                  key={i}
                  src={pkg.logo}
                  alt={pkg.name}
                  size={48}
                  className={classes.avatar}
                />
              ))}
            {config?.packages?.length > 3 && (
              <Avatar
                size={48}
                className={`${classes.avatar_others} ${classes.avatar}`}
              >
                +{config?.packages?.length - 3}
              </Avatar>
            )}
          </AvatarGroup>
        </Box>
        <Flex justify="space-between">
          <Box>
            {arrayOf3Packages?.map((pkg: Package, i) => (
              <Text size="xs" key={i} component="p">
                {pkg.name} {pkg.version && `- ${pkg.version}`}
              </Text>
            ))}
          </Box>
          <Box component="p" m={0}>
            <Text size="xs" component="span" c="dark.3">
              Created
            </Text>
            <Text size="xs" component="span">
              {` ${formattedCreatedAt}`}
            </Text>
          </Box>
        </Flex>
      </Box>
    </Link>
  );
};
