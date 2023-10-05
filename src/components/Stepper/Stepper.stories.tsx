import type { StoryObj, Meta } from '@storybook/react';
import { Step, Stepper } from './Stepper';
import { Container } from '@mantine/core';
import { StepperFormProvider, StepperProvider } from './Stepper.provider';
import { StepperButtons } from './StepperButton';
import { ConfigNameBlock } from '@/app/dashboard/config/create/block/ConfigName.block';
import { SelectPackage } from '@/app/dashboard/config/create/block/SelectPackage.block';
import { UseFormInput } from '@mantine/form/lib/types';
import {
  ConfigContext,
  ConfigFormProvider,
  useConfigForm,
} from '@/app/dashboard/config/create/configForm.context';

const meta: Meta<typeof StepperFormProvider> = {
  title: 'components/Forms/StepperForm',
  component: StepperFormProvider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      toc: true, // 👈 Enables the table of contents
    },
  },
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof StepperFormProvider>;

const formInput: UseFormInput<ConfigContext> = {
  initialValues: {
    configName: '',
    packages: [],
  },
  validate: {
    configName: (value) =>
      value && value?.length > 2 ? null : 'Invalid package name',
    packages: (value) =>
      value && value?.length > 0 ? null : 'Please select packages',
  },
};

export const Default: Story = {
  render: () => (
    <StepperFormProvider
      formInput={formInput}
      FormProvider={ConfigFormProvider}
      useForm={useConfigForm}
    >
      <StepperProvider>
        <Stepper>
          <Step
            label="Choose a config name"
            description="To save and identify it"
          >
            <ConfigNameBlock />
          </Step>
          <Step
            label="Select your modules"
            description="Container, packages, db... "
          >
            <SelectPackage />
          </Step>
        </Stepper>
        <StepperButtons stepsValidation={['configName', 'packages']} />
      </StepperProvider>
    </StepperFormProvider>
  ),
};
