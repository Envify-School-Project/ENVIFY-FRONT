// const [FormProvider, useFormContext, useForm] =
//   createFormContext<FormValues<unknown>>();

import React, { createContext, useContext, useMemo, useState } from 'react';

type StepperContextData = {
  activeStep: number;
  nextStep: () => void;
  prevStep: () => void;
};

const StepperContext = createContext<StepperContextData | undefined>(undefined);

export const StepperProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeStep, setActiveStep] = useState(1);

  const nextStep = () => setActiveStep((prevStep) => prevStep + 1);

  const prevStep = () => setActiveStep((prevStep) => prevStep - 1);

  const value = useMemo(
    () => ({
      activeStep,
      nextStep,
      prevStep,
    }),
    [activeStep, nextStep, prevStep]
  );

  return (
    <StepperContext.Provider value={value}>{children}</StepperContext.Provider>
  );
};

export const useStepperContext = () => useContext(StepperContext);
