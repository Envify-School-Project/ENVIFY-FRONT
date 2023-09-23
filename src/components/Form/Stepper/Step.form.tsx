import React from 'react';
import { createFormContext } from '@mantine/form';
import { ScrollArea, Stepper as StepperContainer, Button } from '@mantine/core';

type FormValues<TValues> = {
  defaultValue?: TValues;
};

type StepFormProps<TValues> = {
  defaultValue?: TValues;
  children: React.ReactNode;
  label: string;
  description: string;
};

const [FormProvider, useFormContext, useForm] =
  createFormContext<FormValues<unknown>>();

export const StepForm = <TValues extends FormValues<unknown>>(
  props: StepFormProps<TValues>
) => {
  const form = useForm({
    initialValues: props.defaultValue,
  });

  return (
    <FormProvider form={form}>
      <form onSubmit={form.onSubmit(() => {})}>
        <StepperContainer.Step
          label={props.label}
          description={props.description}
          c="white"
        >
          <ScrollArea>{props.children}</ScrollArea>
          <Button variant="outline" type="submit">
            Next
          </Button>
        </StepperContainer.Step>
      </form>
    </FormProvider>
  );
};
