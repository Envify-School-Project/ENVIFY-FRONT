'use client';
import React, { useState } from 'react';
import { Stepper as StepperContainer, ScrollArea, Flex } from '@mantine/core';
import { Button } from '@mantine/core';
import classes from './Stepper.module.css';

type StepperProps = {
  children: React.ReactNode;
  type?: 'create' | 'update';
};

const stepData = {
  create: [
    {
      label: 'Choose a config name',
      description: 'To save and identify it',
    },
    {
      label: 'Select your modules',
      description: 'Container, packages, db... ',
    },
    {
      label: 'Generate your scripts',
      description: 'Copy, paste in your VM and tada',
    },
  ],
  update: [
    {
      label: 'Remove or add modules',
      description: 'Container, packages, db...',
    },
    {
      label: 'Regenerate your scripts',
      description: 'Copy, paste in your VM and tada',
    },
  ],
};

export const Stepper = ({ children, type = 'create' }: StepperProps) => {
  const [active, setActive] = useState(0);
  const [highestStepVisited, setHighestStepVisited] = useState(active);

  const handleStepChange = (nextStep: number) => {
    const isOutOfBounds = nextStep > 3 || nextStep < 0;

    if (isOutOfBounds) {
      return;
    }

    setActive(nextStep);
    setHighestStepVisited((hSC) => Math.max(hSC, nextStep));
  };

  const shouldAllowSelectStep = (step: number) =>
    highestStepVisited >= step && active !== step;

  return (
    <>
      <Flex direction="column" gap="lg">
        <StepperContainer
          color="violet"
          radius="sm"
          size="md"
          active={active}
          onStepClick={setActive}
          classNames={{
            separator: classes.stepperSeparator,
            stepIcon: classes.stepperBtn,
            step: classes.stepperStep,
          }}
        >
          {stepData[type].map((step, index) => (
            <StepperContainer.Step
              key={index}
              label={step.label}
              description={step.description}
              allowStepSelect={shouldAllowSelectStep(index)}
              c="white"
            />
          ))}
          <StepperContainer.Completed>
            Completed, click back button to get to previous step
          </StepperContainer.Completed>
        </StepperContainer>

        <ScrollArea
          classNames={{
            root: classes.scrollArea,
          }}
        >
          {children}
        </ScrollArea>

        <Flex justify="flex-end" gap="md" p="center" py="xl">
          <Button
            variant="outline"
            onClick={() => handleStepChange(active - 1)}
          >
            Back
          </Button>
          <Button variant="filled" onClick={() => handleStepChange(active + 1)}>
            Next step
          </Button>
        </Flex>
      </Flex>
    </>
  );
};
