import { Stepper, StepperCompleted, StepperStep, Title } from '@mantine/core';

export default function CreateConfig() {
  return (
    <>
      <Title order={1}>Create new config</Title>
      <Stepper active={0}>
        <StepperStep
          label="Choose a config name"
          description="Create an account"
        >
          step 1: {/* Input for config name */}
        </StepperStep>
        <StepperStep
          label="Select your modules"
          description="Container, packages, db..."
        >
          step 2:
          {/* modules list  */}
        </StepperStep>
        <StepperStep
          label="Generate your scripts"
          description="Copy, paste in your VM and voila"
        >
          Step 3:
          {/* loading scripts */}
        </StepperStep>
        <StepperCompleted>{/* script view */}</StepperCompleted>
      </Stepper>
    </>
  );
}
