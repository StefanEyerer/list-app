import { createShare, deleteList } from '@list-app/frontend/shared/data-access';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { AllListsContent } from './all-lists-content';

const mockRouter = { push: jest.fn() };
jest.mock('next/router', () => ({ useRouter: () => mockRouter }));
const mockSession = { data: { id_token: 'someToken' } };
jest.mock('next-auth/react', () => ({ useSession: () => mockSession }));
jest.mock('@list-app/frontend/shared/data-access', () => ({
  createShare: jest.fn().mockResolvedValue(null),
  deleteList: jest.fn().mockResolvedValue(null),
}));

describe('AllListsContent', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should render info text if no lists are present', () => {
    const someLists = { items: [] };

    render(<AllListsContent lists={someLists} mutate={jest.fn()} />);

    expect(screen.queryByText('You have no lists yet.')).toBeTruthy();
  });
  it('should render name and description of lists if lists are present', () => {
    const someLists = {
      items: [
        {
          id: '1',
          name: 'Name 1',
          description: 'Description 1',
          items: [],
        },
        {
          id: '2',
          name: 'Name 2',
          description: 'Description 2',
          items: [],
        },
      ],
    };

    render(<AllListsContent lists={someLists} mutate={jest.fn()} />);

    expect(screen.queryByText('Name 1')).toBeTruthy();
    expect(screen.queryByText('Description 1')).toBeTruthy();
    expect(screen.queryByText('Name 2')).toBeTruthy();
    expect(screen.queryByText('Description 2')).toBeTruthy();
  });
  it('should navigate to list if list is clicked', async () => {
    const someLists = {
      items: [
        {
          id: '1',
          name: 'Name 1',
          description: 'Description 1',
          items: [],
        },
      ],
    };
    render(<AllListsContent lists={someLists} mutate={jest.fn()} />);

    await act(async () => {
      fireEvent.click(screen.getByTestId('navigate'));
    });

    expect(mockRouter.push).toHaveBeenCalledWith('/lists/1');
  });
  it('should share list if share icon is clicked', async () => {
    const someLists = {
      items: [
        {
          id: '1',
          name: 'Name 1',
          description: 'Description 1',
          items: [],
        },
      ],
    };
    render(<AllListsContent lists={someLists} mutate={jest.fn()} />);

    await act(async () => {
      fireEvent.click(screen.getByTestId('share'));
    });

    expect(createShare).toHaveBeenCalledWith({ listId: '1' }, 'someToken');
  });
  it('should delete list if delete icon is clicked', async () => {
    const someLists = {
      items: [
        {
          id: '1',
          name: 'Name 1',
          description: 'Description 1',
          items: [],
        },
      ],
    };
    render(<AllListsContent lists={someLists} mutate={jest.fn()} />);

    await act(async () => {
      fireEvent.click(screen.getByTestId('delete'));
    });

    expect(deleteList).toHaveBeenCalledWith('1', 'someToken');
  });
});
