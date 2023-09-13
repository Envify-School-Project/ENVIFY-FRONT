import React from 'react';
import { Code, Text, Box } from '@mantine/core';
import classes from './BlockScript.module.css';

type BlockScriptProps = {
  comment?: string;
  code?: string;
};

export const BlockScript = ({ comment, code }: BlockScriptProps) => {
  return (
    <Box className={classes.blockScriptContainer} p="sm">
      <Text
        size="md"
        mb="xs"
        ff="ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace"
      >
        {comment}
      </Text>
      <Code
        classNames={{
          root: classes.blockScriptCode,
        }}
        fz="md"
        c="white"
      >
        {code}
      </Code>
    </Box>
  );
};
