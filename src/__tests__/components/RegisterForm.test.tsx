import { render } from '../../testing-utils';
import { RegisterForm } from '@/components/Form/Register.form';

describe('<RegisterForm />', () => {
  it('Render component', () => {
    render(<RegisterForm />);
  });

  it('Get text, placeholder', () => {
    const { container, getByText, getByPlaceholderText } = render(
      <RegisterForm />
    );

    expect(getByText('Get Started')).toBeTruthy();
    expect(getByText('Create a new account')).toBeTruthy();
    expect(getByText('Register')).toBeTruthy();

    expect(getByPlaceholderText('Your username')).toBeTruthy();
    expect(getByPlaceholderText('Your first name')).toBeTruthy();
    expect(getByPlaceholderText('Your last name')).toBeTruthy();
    expect(getByPlaceholderText('Your email')).toBeTruthy();
    expect(getByPlaceholderText('Your password')).toBeTruthy();
    expect(getByPlaceholderText('Confirm your password')).toBeTruthy();

    expect(container).toMatchSnapshot();
  });
});
