'use client';
import React, { useState } from 'react';
import {
  Stepper as StepperContainer,
  Flex,
  ScrollArea,
  TextInput,
  Grid,
  GridCol,
} from '@mantine/core';
import { Button } from '@mantine/core';
import classes from './Stepper.module.css';
import { CheckboxCard } from '@/components/Card/CheckboxCard';
import { BlockScript } from '@/components/BlockScript';

type StepperProps = {
  children?: React.JSX.Element;
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

export const Stepper = ({ type = 'create' }: StepperProps) => {
  const [active, setActive] = useState(0);
  const [highestStepVisited, setHighestStepVisited] = useState(active);

  const stepName = () => {
    return (
      <TextInput
        placeholder="Enter a name"
        label="Package name"
        name="name"
        required={true}
        // {...form.getInputProps('email')}
      />
    );
  };

  const stepPackages = () => {
    return (
      <Grid>
        {/* {packages?.map((pkg, index) => (
          <GridCol span={4} key={index}>
            <CheckboxCard
              image={pkg.logo}
              title={pkg.name}
              version={pkg.version}
            />
          </GridCol>
        ))} */}
        <GridCol span={4}>
          <CheckboxCard title="Node" />
        </GridCol>
      </Grid>
    );
  };

  const stepScript = () => {
    return (
      <BlockScript
        // key={script.comment}
        code="npm run install docker"
        comment="install docker"
      />
    );
  };

  const steps = [stepName(), stepPackages(), stepScript()];

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
      <Flex direction="column" gap="lg" className={classes.wrapper}>
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
            >
              <ScrollArea
                classNames={{
                  root: classes.scrollArea,
                }}
              >
                {steps[index]}
              </ScrollArea>
            </StepperContainer.Step>
          ))}
          <StepperContainer.Completed>
            Completed, click back button to get to previous step
          </StepperContainer.Completed>
        </StepperContainer>

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
