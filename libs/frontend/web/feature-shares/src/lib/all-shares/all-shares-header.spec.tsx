import { render, screen } from '@testing-library/react';
import { AllSharesHeader } from './all-shares-header';

describe('AllSharesHeader', () => {
  it('should render title', () => {
    render(<AllSharesHeader />);

    expect(screen.queryByText('My Shared Lists')).toBeTruthy();
  });
});
