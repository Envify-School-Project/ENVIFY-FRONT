'use client';
import { Step, Stepper } from '@/components/Stepper/Stepper';
import {
  StepperFormProvider,
  StepperProvider,
} from '@/components/Stepper/Stepper.provider';
import { ConfigNameBlock } from './block/ConfigName.block';
import { SelectPackage } from './block/SelectPackage.block';
import { StepperButtons } from '@/components/Stepper/StepperButton';
import { UseFormInput, hasLength, isNotEmpty } from '@mantine/form';
import { ConfigFormProvider, useConfigForm } from './configForm.context';
import { ConfigInput } from '@/utils/types/config.type';
import { ConfigProperties } from './block/ConfigProperties.block';

export const configCreateFormInput: UseFormInput<ConfigInput> = {
  initialValues: {
    name: '',
    description: '',
    os: {
      versionId: 0,
      versionNumber: '',
      name: '',
    },
    packages: [],
  },
  validate: {
    name: hasLength(
      { min: 3, max: 10 },
      'the config name should be more than 2 characters long'
    ),
    packages: isNotEmpty('Please Select a Package'),
    os: {
      versionId: hasLength({ min: 1 }, 'Please Select an Os'),
      name: hasLength({ min: 1 }, 'Please Select an Os'),
      versionNumber: hasLength({ min: 1 }, 'Please Select an Os version'),
    },
  },
};

export const ConfigCreateStepper = () => {
  return (
    <StepperFormProvider
      formInput={configCreateFormInput}
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
          <Step
            label="Select you properties"
            description="Choose your personal propeties"
          >
            <ConfigProperties />
          </Step>
        </Stepper>
        <StepperButtons
          stepsValidation={[
            ['name', 'os.name', 'os.versionNumber'],
            'packages',
            'packagesProperties',
          ]}
        />
      </StepperProvider>
    </StepperFormProvider>
  );
};
