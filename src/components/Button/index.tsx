import {
  Button as MantineButton,
  ButtonProps as MantineButtonProps,
} from '@/components/Mantine';
import Link from 'next/link';

type ButtonProps = MantineButtonProps & {
  redirectTo?: string;
  outlined?: boolean;
  variant?:
    | 'filled'
    | 'outline'
    | 'light'
    | 'white'
    | 'default'
    | 'subtle'
    | 'gradient'
    | 'arrow';
};

export const Button = ({
  redirectTo,
  variant = 'filled',
  children,
  ...props
}: ButtonProps) => {
  return (
    <MantineButton variant={variant} {...props}>
      {redirectTo ? <Link href={redirectTo}>{children}</Link> : children}
    </MantineButton>
  );
};
