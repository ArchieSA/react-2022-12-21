import { fireEvent, render, screen } from '@testing-library/react';
import { Rating } from '../Rating';

describe('Rating', () => {
  it('should render correct', async () => {
    const { debug } = await render(<Rating value={3} />);

    expect(screen.getAllByAltText('gold').length).toBe(3);
    expect(screen.getAllByAltText('black').length).toBe(2);
  });

  it('should invoke callback on click', async () => {
    let value = 0;
    const mock = jest.fn((newValue) => (value = newValue));

    const { rerender } = await render(<Rating value={value} onChange={mock} />);

    const stars = screen.getAllByAltText('black');

    await fireEvent.click(stars[3]);

    expect(mock).toHaveBeenCalled();
    expect(value).toBe(4);

    await rerender(<Rating value={value} onChange={mock} />);

    expect(screen.getAllByAltText('gold').length).toBe(4);
  });
});
