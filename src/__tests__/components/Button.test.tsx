import { render, screen, userEvent } from '../../testing-utils';
import { Button } from '@/components/Button';

describe('Button', () => {
  it('Render component', () => {
    render(<Button />);
  });

  it('Snapshot', () => {
    expect(render(<Button />)).toMatchSnapshot();
  });

  // it('Button with link', () => {
  //   const component = <Button href="/mylink" />;
  //   const callback = jest.fn();
  //   let ele = document.body; // DOMElement

  //   // execute the module
  //   expect(Button(component, ele, callback)).toEqual('html dom');
  //   expect(callback).toHaveBeenCalled();
  // });
});
