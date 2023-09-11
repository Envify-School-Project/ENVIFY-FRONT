import { Box, Flex, SimpleGrid, Text, Title } from '@/components/Mantine';
import { BsCheckCircleFill } from 'react-icons/bs';

export const Features = () => {
  return (
    <Box p={100}>
      <Title order={2} size={40} mb={40}>
        The simplest way to configure your Virtual Machine
      </Title>
      <SimpleGrid verticalSpacing="lg">
        <Flex justify="flex-start" align="center" direction="row">
          <BsCheckCircleFill size={14} />
          <Text size={14} ml={20}>
            No more need to search for hours all the needed command lines
          </Text>
        </Flex>
        <Flex justify="flex-start" align="center" direction="row">
          <BsCheckCircleFill size={14} />
          <Text size={14} ml={20}>
            Choose your packages in a wide list or pick one of the 2000+
            community configuration
          </Text>
        </Flex>
        <Flex justify="flex-start" align="center" direction="row">
          <BsCheckCircleFill size={14} />
          <Text size={14} ml={20}>
            Save in your profile your config to edit and/or reuse it quick soon
            if needed
          </Text>
        </Flex>
        <Flex justify="flex-start" align="center" direction="row">
          <BsCheckCircleFill size={14} />
          <Text size={14} ml={20}>
            Copy and paste in VM the given command lines and jod is done !
          </Text>
        </Flex>
      </SimpleGrid>
    </Box>
  );
};
