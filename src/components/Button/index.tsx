import {
  Button as MantineButton,
  ButtonProps as MantineButtonProps,
} from '@/components/Mantine';
import Link from 'next/link';

type ButtonProps = MantineButtonProps & {
  href?: string;
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
