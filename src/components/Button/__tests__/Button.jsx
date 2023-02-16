import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '../Button';

describe('Button', () => {
  it('should render correct', () => {
    const buttonText = 'ClickMe';
    render(<Button>{buttonText}</Button>);

    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });

  it('should invoke callback on click', () => {
    const mock = jest.fn();

    const buttonText = 'ClickMe';
    render(<Button onClick={mock}>{buttonText}</Button>);

    const button = screen.getByText(buttonText);

    fireEvent.click(button);

    expect(mock).toHaveBeenCalled();
  });
});
