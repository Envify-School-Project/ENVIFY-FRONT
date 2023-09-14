import { BlockScript } from '@/components/BlockScript';
import type { Config } from '@/utils/types/config.type';
import { Title } from '@mantine/core';

const getUserConfigById = async (slug: string) => {
  const res = await fetch(`${process.env.BASE_API_URL}/configs.json`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  // TODO: Refactor to query the real route instead  filtering the data
  const filteredResponse = res
    .json()
    .then((data: Config[]) =>
      data.find((config: Config) => `${config.id}` === slug)
    );

  return filteredResponse;
};
export default async function ReadConfig({
  params,
}: {
  params: { slug: string };
}) {
  const config: Config | undefined = await getUserConfigById(`${params.slug}`);

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
