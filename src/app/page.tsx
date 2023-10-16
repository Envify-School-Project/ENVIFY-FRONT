import { Button } from '@/components/Button';
import { Header } from '@/components/Nav/Header';
import { DetailsBlock } from '@/components/Block/Details';
import { StepBlock } from '@/components/Block/Steps';
import { Box, Container, Flex, SimpleGrid, Text, Title } from '@mantine/core';

export default function Home() {
  return (
    <SimpleGrid>
      {/* @ts-expect-error Async Server Components */}
      <Header />
      <Box mt={100} mb="xl">
        <Container size="md" pb="lg">
          <Title order={1} size={64} ta="center">
            Simplify your machines configuration effortlessly
          </Title>
        </Container>
        <Container size="sm" pb="lg">
          <Text size="md" ta="center" c="dimmed">
            Focus on what matters the most, save time and configure your machine
          </Text>
          <Text size="md" ta="center" c="dimmed">
            in few clicks. You choose we provide
          </Text>
        </Container>
        <Flex justify="center" align="center" direction="column" pb="lg">
          <Box pb={'md'}>
            <Button variant="filled" href="/register">
              Get started
            </Button>
          </Box>
        </Flex>
      </Box>
      <Box bg="dark.5">
        <DetailsBlock />
      </Box>
      <StepBlock />
    </SimpleGrid>
  );
}
