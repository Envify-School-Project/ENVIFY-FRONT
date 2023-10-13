import { Button } from '@/components/Button';
import { Header } from '@/components/Nav/Header';
import { Box, Container, Flex, Text, Title } from '@mantine/core';
import { BsArrowRight } from 'react-icons/bs';

export default function Home() {
  return (
    <>
      {/* @ts-expect-error Async Server Components */}
      <Header />
      <Box mt={100} mb="xl">
        <Container size="md" pb="lg">
          <Title order={1} size={64} ta="center">
            Simplify your virtual machine configuration effortlessly
          </Title>
        </Container>
        <Container size="sm" pb="lg">
          <Text size="md" ta="center">
            Focus on what matters the most, save time and configure your virtual
            machine in few clicks. You choose, we provide all you need
          </Text>
        </Container>
        <Flex justify="center" align="center" direction="column" pb="lg">
          <Box pb={'md'}>
            <Button variant="filled" href="/register">
              Get started
            </Button>
          </Box>
          <Box>
            <Button
              variant="arrow"
              rightSection={<BsArrowRight />}
              href="/community"
            >
              See community configuration
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
