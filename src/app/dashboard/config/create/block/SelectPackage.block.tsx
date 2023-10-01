import { CheckboxCard } from '@/components/Card/CheckboxCard';
import { Grid, GridCol } from '@mantine/core';
import { useConfigFormContext } from '../configForm.context';

export const SelectPackage = () => {
  const form = useConfigFormContext();

  const handleChange = (
    packageName: string,
    packageVersion: string,
    checked: boolean
  ) => {
    const index = form.values.packages.findIndex(
      (val) => val.name === packageName
    );
    if (checked) {
      const packageData = {
        name: packageName,
        version: packageVersion,
      };

      if (index === -1) form.insertListItem('packages', packageData);
      else form.setFieldValue(`packages.${index}.version`, packageData.version);
    } else if (index > -1) form.removeListItem('packages', index);
  };

  return (
    <Grid>
      {packages?.map((pkg, index) => (
        <GridCol span={4} key={index}>
          <CheckboxCard
            image={pkg.logo}
            title={pkg.name}
            version={pkg.version}
            onChange={handleChange}
          />
        </GridCol>
      ))}
    </Grid>
  );
};

const packages = [
  {
    name: 'Node',
    alias: 'node',
    version: ['18.0.0', '2.0.0'],
    logo: 'https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png',
  },
  {
    name: 'PostgreSQL',
    alias: 'postgresql',
    version: ['14.0', '13.4'],
    logo: 'https://cdn.iconscout.com/icon/free/png-256/postgresql-11-1175122.png',
  },
  {
    name: 'Docker',
    alias: 'docker',
    version: ['20.10.8', '19.03.13'],
    logo: 'https://cdn.iconscout.com/icon/free/png-256/docker-226091.png',
  },
  {
    name: 'Certbot',
    alias: 'certbot',
    version: ['1.19.0', '1.18.0'],
    logo: 'https://cdn.iconscout.com/icon/free/png-256/certbot-1175037.png',
  },
];
