import { render, screen } from '../../testing-utils';
import { ButtonCopy } from '@/components/Button/Copy.Button';

describe('Button Copy', () => {
  it('Render component', () => {
    render(<ButtonCopy value="" />);
  });

  it('Snapshot', () => {
    expect(render(<ButtonCopy value="value" />)).toMatchSnapshot();
  });
});
