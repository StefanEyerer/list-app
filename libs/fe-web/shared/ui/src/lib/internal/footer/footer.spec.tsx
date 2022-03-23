import { render } from '@testing-library/react';
import { Footer } from './footer';

describe('Footer', () => {
  it('should render copyright info', () => {
    const { baseElement } = render(<Footer />);
    expect(baseElement.innerHTML).toContain('Copyright');
    expect(baseElement.innerHTML).toContain('Stefan Eyerer');
  });
});
