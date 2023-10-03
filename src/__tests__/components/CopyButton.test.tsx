import { render, fireEvent } from '../../testing-utils';
import { ButtonCopy } from '@/components/Button/Copy.Button';

describe('<ButtonCopy />', () => {
  it('Render component', () => {
    render(<ButtonCopy value="" />);
  });

  it('Click button', () => {
    const { container } = render(<ButtonCopy value="value" />);

    expect(fireEvent.click(container)).toBeTruthy();

    expect(container).toMatchSnapshot();
  });
});
