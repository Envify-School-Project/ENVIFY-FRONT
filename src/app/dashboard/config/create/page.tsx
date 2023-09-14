import { Title } from '@mantine/core';
import { Stepper } from '@/components/Nav/Stepper';

export default function CreateConfig() {
  return (
    <>
      <Title order={1} mb="xl">
        Create new config
      </Title>
      <Stepper>
        <p>hey</p>
      </Stepper>
    </>
  );
}
