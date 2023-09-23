import React, { Children, useState } from 'react';
import { Stepper as StepperContainer } from '@mantine/core';

type StepperFromProps = {
  children: React.ReactNode;
};

export const StepperForm = ({ children }: StepperFromProps) => {
  const [active, setActive] = useState(0);

  return (
    <StepperContainer
      color="violet"
      radius="sm"
      size="md"
      active={active}
      onStepClick={setActive}
      // classNames={{
      //   separator: classes.stepperSeparator,
      //   stepIcon: classes.stepperBtn,
      //   step: classes.stepperStep,
      // }}
    >
      {children}
    </StepperContainer>
  );
};
