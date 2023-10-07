import { render } from '../../testing-utils';
import { BlockScript } from '@/components/BlockScript';

describe('<BlockScript />', () => {
  it('Render component', () => {
    render(<BlockScript comment="" code="" />);
  });

  it('Get all props', () => {
    const { container, getByText } = render(
      <BlockScript comment="comment" code="code" />
    );

    expect(getByText('comment')).toBeTruthy();
    expect(getByText('code')).toBeTruthy();

    expect(container).toMatchSnapshot();
  });
});
