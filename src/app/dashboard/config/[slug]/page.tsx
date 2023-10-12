import { BlockScript } from '@/components/BlockScript';
import type { Config } from '@/utils/types/config.type';
import { Title } from '@mantine/core';
import { apiClient } from '@/utils/api/apiFactory';

export default async function ReadConfig({
  params,
}: {
  params: { slug: string };
}) {
  // TODO: fetch config by id when backend endpoint will be ready
  const configs: Config[] = await apiClient.get(`/configs`);
  const config = configs.find((config) => config.id.toString() === params.slug);

  return (
    <>
      <Title order={1} mb="xl">
        Config - {config?.name}
      </Title>
      {config?.scripts && config?.scripts.length > 0 ? (
        config?.scripts?.map((script) => (
          <BlockScript
            key={script.comment}
            code={script.script}
            comment={script.comment}
          />
        ))
      ) : (
        <p>No scripts found</p>
      )}
    </>
  );
}
