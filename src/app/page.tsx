import { Button } from '@/components/Button';
import { Header } from '@/components/Nav/Header';
import { Box, Container, Flex, Text, Title } from '@mantine/core';
import { BsArrowRight } from 'react-icons/bs';

export default function Home() {
  return (
    <>
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
      <Box mt={150} mb={150}>
        <Container pb="xl">
          <Title order={2} size={48} ta="center">
            Deliver Infrastructure as Code
          </Title>
        </Container>
        <Container pb="xl">
          <Flex justify="space-between" align="center" >
            <Box mr="xl" >
              <img src="../static/server-hosting-data-analyst_18660-996-fotor-bg-remover-202310060156.png" alt="Infrastructure as Code illustration" style={{ width: '600px', height: '400px', borderRadius: '8px' }} />
            </Box>

            <Flex direction="row">
              <Box pr="xl" mb="xl" >
                <Title order={3} size={24} mb="md">
                  Bloc de texte 1
                </Title>
                <Text size="md" pb="xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>

                <Title order={3} size={24} mb="md">
                  Bloc de texte 2
                </Title>
                <Text size="md" pb="xl">
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </Box>

              <Box mb="xl">
                <Title order={3} size={24} mb="md">
                  Bloc de texte 3
                </Title>
                <Text size="md" pb="xl">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </Text>

                <Title order={3} size={24} mb="md">
                  Bloc de texte 4
                </Title>
                <Text size="md" pb="xl">
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Container>
      </Box>


    </>
  );
}
