import { render, screen } from '@testing-library/react';
import { PublicRootHeader } from './public-root-header';

describe('PublicRootHeader', () => {
  it('should render title', () => {
    render(<PublicRootHeader />);

    expect(
      screen.queryByText('Enter The Access Key For A Shared List To View It')
    ).toBeTruthy();
  });
});
