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
      <Title py={64} order={1}>
        Config - {config?.name}
      </Title>
      <BlockScript code="npm install" comment="install the deps" />
      <BlockScript code="npm install" comment="install the deps" />
    </>
  );
}
