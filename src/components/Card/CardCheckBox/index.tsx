'use client';

import { Checkbox, Text, Image, Select, Box, Flex } from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';
import React, { useState } from 'react';
import classes from './CardCheckBox.module.css';

type CardCheckBoxProps = {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?(checked: boolean): void;
  image: string;
  title: string;
  version: string[];
};

export const CardCheckBox = ({
  checked,
  defaultChecked,
  onChange,
  image,
  title,
  version,
}: CardCheckBoxProps) => {
  const [value, handleChange] = useUncontrolled({
    value: checked,
    defaultValue: defaultChecked,
    finalValue: false,
    onChange,
  });

  const [selectValue, setSelectValue] = useState('');

  const handleValue = (value: string) => {
    setSelectValue(value);
    console.log(selectValue);
  };

  return (
    <Flex
      align="center"
      justify="space-between"
      className={classes.cardCheckBoxContainer}
    >
      <Flex align="center">
        <Image src={image} alt={title} w="48" mr="xs" />

        <Box mr="sm">
          <Text c="white">{title}</Text>
          <Select
            data={version}
            placeholder={version[0]}
            classNames={{
              dropdown: classes.cardCheckBoxDropdown,
              input: classes.cardCheckBoxInput,
              option: classes.cardCheckBoxOption,
            }}
            onChange={handleValue}
          />
        </Box>
      </Flex>

      <Checkbox
        classNames={{
          input: classes.cardCheckBoxBtn,
        }}
        onClick={() => handleChange(!value)}
        tabIndex={-1}
      />
    </Flex>
  );
};
