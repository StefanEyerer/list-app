import { createList } from '@list-app/frontend-shared-data-access';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { CreateListContent } from './create-list-content';

const mockRouter = { push: jest.fn() };
jest.mock('next/router', () => ({ useRouter: () => mockRouter }));
const mockSession = { data: { id_token: 'someToken' } };
jest.mock('next-auth/react', () => ({ useSession: () => mockSession }));
jest.mock('@list-app/frontend-shared-data-access', () => ({
  createList: jest.fn().mockResolvedValue(null),
}));

describe('CreateListContent', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should navigate to lists after new list is created', async () => {
    render(<CreateListContent />);

    fireEvent.input(screen.getByTestId('name'), {
      target: { value: 'Some Name' },
    });
    fireEvent.input(screen.getByTestId('description'), {
      target: { value: 'Some Description' },
    });
    fireEvent.click(screen.getByTestId('create'));
    await waitFor(() => !screen.queryByTestId('create'));

    expect(mockRouter.push).toHaveBeenCalledWith('/lists');
  });
  it('should create a new list if button is clicked and title and description are provided', () => {
    render(<CreateListContent />);

    fireEvent.input(screen.getByTestId('name'), {
      target: { value: 'Some Name' },
    });
    fireEvent.input(screen.getByTestId('description'), {
      target: { value: 'Some Description' },
    });
    fireEvent.click(screen.getByTestId('create'));

    expect(createList).toHaveBeenCalledWith(
      { name: 'Some Name', description: 'Some Description' },
      'someToken'
    );
  });
  it('should create a new list if button is clicked and only title is provided', () => {
    render(<CreateListContent />);

    fireEvent.input(screen.getByTestId('name'), {
      target: { value: 'Some Name' },
    });
    fireEvent.click(screen.getByTestId('create'));

    expect(createList).toHaveBeenCalledWith(
      { name: 'Some Name', description: '' },
      'someToken'
    );
  });
  it('should not create a new list if button is clicked and no title is provided', () => {
    render(<CreateListContent />);

    fireEvent.input(screen.getByTestId('description'), {
      target: { value: 'Some Description' },
    });
    fireEvent.click(screen.getByTestId('create'));

    expect(createList).not.toHaveBeenCalled();
  });
});
