'use client';
import React, { useState } from 'react';
import { Stepper as StepperContainer, Group } from '@mantine/core';
import { Button } from '@/components/Button';
import classes from './Stepper.module.css';

type StepperProps = {
  type?: 'create' | 'update';
};

export const Stepper = ({ type = 'create' }: StepperProps) => {
  const [active, setActive] = useState(1);
  const [highestStepVisited, setHighestStepVisited] = useState(active);

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
      <StepperContainer
        color="violet"
        radius="sm"
        size="md"
        active={active}
        onStepClick={setActive}
        m="xs"
        classNames={{
          separator: classes.stepperSeparator,
          stepIcon: classes.stepperBtn,
          step: classes.stepperStep,
        }}
      >
        {stepData[type].map((step, index) => (
          <StepperContainer.Step
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
      <Group p="center" mt="xl">
        <Button variant="outline" onClick={() => handleStepChange(active - 1)}>
          Back
        </Button>
        <Button variant="filled" onClick={() => handleStepChange(active + 1)}>
          Next step
        </Button>
      </Group>
    </>
  );
};
