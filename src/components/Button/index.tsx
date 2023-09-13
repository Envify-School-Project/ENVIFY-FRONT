import {
  Button as MantineButton,
  ButtonProps as MantineButtonProps,
} from '@mantine/core';
import Link from 'next/link';

type ButtonProps = MantineButtonProps & {
  href?: string;
  variant?: MantineButtonProps['variant'] | 'arrow';
};

export const Button = ({
  href,
  variant = 'filled',
  children,
  ...props
}: ButtonProps) => {
  return href ? (
    <MantineButton component={Link} href={href} variant={variant} {...props}>
      {children}
    </MantineButton>
  ) : (
    <MantineButton variant={variant} {...props}>
      {children}
    </MantineButton>
  );
};

export const ButtonIcon = ({ children, ...props }: ButtonProps) => (
  <Button {...props} variant="subtle" href="/" h={48} p={12}>
    {children}
  </Button>
);