'use client';
import React, { useState } from 'react';
import {
  Stepper as StepperContainer,
  Flex,
  ScrollArea,
  Button,
  Grid,
  GridCol,
  TextInput,
} from '@mantine/core';
import classes from './Stepper.module.css';
import { Package, Script } from '@/utils/types/config.type';
import { BlockScript } from '@/components/BlockScript';
import { CheckboxCard } from '@/components/Card/CheckboxCard';
import { stepData } from './Stepper.data';
import { useForm } from '@mantine/form';

type StepperProps = {
  packages?: Package[];
  scripts?: Script[];
  type?: 'create' | 'update';
};

export const Stepper = ({
  packages,
  scripts,
  type = 'create',
}: StepperProps) => {
  const [active, setActive] = useState(0);
  const form = useForm<any>({
    initialValues: {
      name: '',
      modules: [],
    },
  });
  const [highestStepVisited, setHighestStepVisited] = useState(active);

  const stepName = () => {
    return (
      <TextInput
        placeholder="Enter a name"
        label="Package name"
        name="name"
        required={true}
        {...form.getInputProps('name')}
      />
    );
  };

  const stepPackages = (packages?: Package[]) => {
    return (
      <Grid>
        {packages?.map((pkg, index) => (
          <GridCol span={4} key={index}>
            <CheckboxCard
              image={pkg.logo}
              title={pkg.name}
              version={pkg.version}
              {...form.getTransformedValues('modules')}
            />
          </GridCol>
        ))}
      </Grid>
    );
  };

  const stepScript = (scripts?: Script[]) =>
    scripts?.map((script, index) => (
      <BlockScript key={index} code={script.script} comment={script.comment} />
    ));

  const steps =
    type === 'create'
      ? [stepName(), stepPackages(packages), stepScript(scripts)]
      : [stepPackages(packages), stepScript(scripts)];

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

  // const onSubmit = (value: any) => {
  //   console.log(value);
  // };

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
                <form onSubmit={form.onSubmit((values) => console.log(values))}>
                  {steps[index]}
                  <Button
                    type="submit"
                    onClick={() => handleStepChange(active + 1)}
                  >
                    Get your script
                  </Button>
                </form>
              </ScrollArea>
            </StepperContainer.Step>
          ))}
        </StepperContainer>

        <Flex justify="flex-end" gap="md" p="center" py="xl">
          <Button
            variant="outline"
            onClick={() => handleStepChange(active - 1)}
          >
            Back
          </Button>
          {active === 1 ? null : (
            <Button
              variant="filled"
              onClick={() => handleStepChange(active + 1)}
            >
              Next step
            </Button>
          )}
        </Flex>
      </Flex>
    </>
  );
};
