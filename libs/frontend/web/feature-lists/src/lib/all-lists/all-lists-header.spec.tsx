import { fireEvent, render, screen } from '@testing-library/react';
import { AllListsHeader } from './all-lists-header';

const mockRouter = { push: jest.fn() };
jest.mock('next/router', () => ({ useRouter: () => mockRouter }));

describe('AllListsHeader', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should render title', () => {
    render(<AllListsHeader />);

    expect(screen.queryByText('My Lists')).toBeTruthy();
  });
  it('should navigate to create list if button is clicked', () => {
    render(<AllListsHeader />);

    fireEvent.click(screen.getByTestId('navigate'));

    expect(mockRouter.push).toHaveBeenCalledWith('/lists/create');
  });
});
