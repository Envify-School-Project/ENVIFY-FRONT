import { render, screen } from '../../testing-utils';
import { BlockScript } from '@/components/BlockScript';

describe('Test Block Script Component', () => {
  it('Render props', () => {
    render(<BlockScript comment="comment" code="code" />);
    const comment = screen.getByText('comment');
    const code = screen.getByText('code');
    expect(comment).toBeInTheDocument();
  });
});
