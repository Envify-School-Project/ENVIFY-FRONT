import {
  Button as MantineButton,
  ButtonProps as MantineButtonProps,
} from '@/components/Mantine';
import Link from 'next/link';
import { GiHexagonalNut } from 'react-icons/gi';

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

export const ButtonLogo = (
  <Button variant="subtle" redirectTo="/" h={48} p={12}>
    <GiHexagonalNut size={24} color="#fff" />
  </Button>
);
