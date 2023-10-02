import { render, screen } from '../../testing-utils';
import { BlockScript } from '@/components/BlockScript';

describe('Block Script', () => {
  it('Render component', () => {
    render(<BlockScript comment="" code="" />);
  });

  it('Render props', () => {
    const { component, getByText } = render(
      <BlockScript comment="comment" code="code" />
    );

    expect(getByText('comment')).toBeTruthy();
    expect(getByText('code')).toBeTruthy();
    expect(component).toMatchSnapshot();
  });
});
