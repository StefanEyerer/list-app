import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import { PublicRootContent } from './public-root-content';

const mockRouter = { push: jest.fn() };
jest.mock('next/router', () => ({ useRouter: () => mockRouter }));

describe('PublicRootContent', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should navigate to shared list if accessKey is provided', async () => {
    render(<PublicRootContent />);

    await act(async () => {
      fireEvent.input(screen.getByTestId('accessKey'), {
        target: { value: 'foobar' },
      });
      fireEvent.click(screen.getByTestId('navigate'));
    });
    await waitFor(() => !screen.queryByTestId('navigate'));

    expect(mockRouter.push).toHaveBeenCalledWith('/public/shares/foobar');
  });
  it('should not navigate away if no accessKey is provided', async () => {
    render(<PublicRootContent />);

    await act(async () => {
      fireEvent.click(screen.getByTestId('navigate'));
    });

    expect(mockRouter.push).not.toHaveBeenCalled();
  });
});
