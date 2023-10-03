import { render, screen, fireEvent } from '../../testing-utils';
import { LoginForm } from '@/components/Form/Login.form';

describe('<LoginForm />', () => {
  it('Render component', () => {
    render(<LoginForm />);
  });

  it('Get text, placeholder', () => {
    const { container, getByText, getByPlaceholderText } = render(
      <LoginForm />
    );

    expect(getByText('Welcome back')).toBeTruthy();
    expect(getByText('Sign in to your account')).toBeTruthy();
    expect(getByText('Sign in')).toBeTruthy();

    expect(getByPlaceholderText('Your email')).toBeTruthy();
    expect(getByPlaceholderText('Your password')).toBeTruthy();

    expect(container).toMatchSnapshot();
  });

  it('Check value form', () => {
    const { container, getByDisplayValue } = render(<LoginForm />);

    const button = screen.getByRole('button');

    fireEvent.click(button);
    expect(getByDisplayValue('envifyadmin@gmail.com')).toBeTruthy();
    expect(getByDisplayValue('test1')).toBeTruthy();

    expect(container).toMatchSnapshot();
  });
});
