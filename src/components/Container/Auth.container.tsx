'use client';
import { GiHexagonalNut } from 'react-icons/gi';
import { ButtonIcon } from '../Button';
import { Features } from '../Form/Features';
import { Box, Flex, Grid, GridCol, createStyles } from '../Mantine';

type AuthContainerProps = {
  children: JSX.Element;
};

export const AuthContainer = (props: AuthContainerProps) => {
  const { classes } = useStyles();
  return (
    <Grid columns={10} my={0}>
      <GridCol className={classes.leftGrid} span={4} py={0}>
        <Box py={30} px={100}>
          <ButtonIcon href={'/'} mb="lg">
            <GiHexagonalNut />
          </ButtonIcon>
          {props.children}
        </Box>
      </GridCol>
      <GridCol span={6}>
        <Flex align="center" justify="center" className="h-100">
          <Features />
        </Flex>
      </GridCol>
    </Grid>
  );
};

const useStyles = createStyles((theme) => ({
  leftGrid: {
    height: '100vh',
    backgroundColor: `${theme.colors.dark[5]}`,
    borderRight: `1px solid ${theme.colors.dark[4]}`,
  },
}));
