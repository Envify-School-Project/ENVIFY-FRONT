'use client';
import { useConfigFormContext } from '../configForm.context';
import { getPackageProperties } from '@/utils/api/package.api';
import { useQuery } from 'react-query';
import { BlockProperties } from '@/components/BlockProperties';
import { useMemo } from 'react';
import { Box } from '@mantine/core';

export const ConfigProperties = () => {
  const { data: packageProperties } = useQuery(
    'packageProperties',
    getPackageProperties
  );

  const form = useConfigFormContext();

  console.log(packageProperties);

  const selectedPackageProperties = useMemo(() => {
    if (!packageProperties) return [];

    const packageVersionsId = form.values.packages.map(
      (pck) => pck.packageVersions.id
    );
    // console.log(packageVersionsId.includes([5]));
    return packageProperties
      .filter((properties) =>
        packageVersionsId.includes(properties.packageVersionId)
      )
      .map((packageProperties) => ({
        ...packageProperties,
        name: form.values.packages.find(
          (pck) => pck.packageVersions.id == packageProperties.packageVersionId
        )?.name,
      }));
  }, [packageProperties, form]);

  console.log(selectedPackageProperties);

  return (
    <>
      {selectedPackageProperties.length > 0 ? (
        selectedPackageProperties.map((item, index) => (
          <BlockProperties
            key={index}
            name={item.name as string}
            packageProperties={JSON.parse(item.properties as string)}
          />
        ))
      ) : (
        <EmptyBlockProperties />
      )}
    </>
  );
};

const EmptyBlockProperties = () => {
  return (
    <Box>
      Vous n'avez pas de configurations supplémentaires. Veuillez continuer pour
      la génération du script
    </Box>
  );
};
