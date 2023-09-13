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

  return <Title order={1}>Config - {config?.name}</Title>;
}
