'use client';
import { Checkbox, Text, Select, Box, Flex, Avatar } from '@mantine/core';
import React, { useState } from 'react';
import classes from './CardCheckBox.module.css';

type CardCheckBoxProps = {
  title: string;
  version: string[];
  onChange: (configName: string, version: string, checked: boolean) => void;
  image?: string;
  defaultChecked?: boolean;
};

export const CheckboxCard = (props: CardCheckBoxProps) => {
  const [selectedVersion, setSelectedVersion] = useState(props.version[0]);
  const [packageChecked, setPackageChecked] = useState(false);

  const handelPackageCheked = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.currentTarget.checked;
    setPackageChecked(isChecked);
    props.onChange(props.title, selectedVersion, isChecked);
  };

  const handleVersion = (versionValue: string) => {
    setSelectedVersion(versionValue);
    props.onChange(props.title, versionValue, packageChecked);
  };

  return (
    <Flex
      align="center"
      justify="space-between"
      className={classes.cardCheckBoxContainer}
    >
      <Flex align="center" gap="sm">
        <Flex display="flex" align="center" justify="center">
          <Avatar src={props.image} alt={props.title} size={48} />
        </Flex>
        <Box>
          <Text c="white">{props.title}</Text>
          <Select
            data={props.version}
            placeholder={selectedVersion}
            onChange={handleVersion}
          />
        </Box>
      </Flex>
      <Checkbox onChange={handelPackageCheked} tabIndex={-1} />
    </Flex>
  );
};
