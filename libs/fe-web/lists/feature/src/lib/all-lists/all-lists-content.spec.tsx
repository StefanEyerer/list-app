import { deleteList } from '@list-app/shared/frontend/data-access';
import { fireEvent, render, screen } from '@testing-library/react';
import { AllListsContent } from './all-lists-content';

const mockRouter = { push: jest.fn() };
jest.mock('next/router', () => ({ useRouter: () => mockRouter }));
const mockSession = { data: { id_token: 'someToken' } };
jest.mock('next-auth/react', () => ({ useSession: () => mockSession }));
jest.mock('@list-app/shared/frontend/data-access', () => ({
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
          userId: '1',
        },
        {
          id: '2',
          name: 'Name 2',
          description: 'Description 2',
          items: [],
          userId: '2',
        },
      ],
    };

    render(<AllListsContent lists={someLists} mutate={jest.fn()} />);

    expect(screen.queryByText('Name 1')).toBeTruthy();
    expect(screen.queryByText('Description 1')).toBeTruthy();
    expect(screen.queryByText('Name 2')).toBeTruthy();
    expect(screen.queryByText('Description 2')).toBeTruthy();
  });
  it('should navigate to list if list is clicked', () => {
    const someLists = {
      items: [
        {
          id: '1',
          name: 'Name 1',
          description: 'Description 1',
          items: [],
          userId: '1',
        },
      ],
    };

    render(<AllListsContent lists={someLists} mutate={jest.fn()} />);
    fireEvent.click(screen.getByTestId('navigate'));

    expect(mockRouter.push).toHaveBeenCalledWith('/lists/1');
  });
  it('should delete list if delete icon is clicked', () => {
    const someLists = {
      items: [
        {
          id: '1',
          name: 'Name 1',
          description: 'Description 1',
          items: [],
          userId: '1',
        },
      ],
    };

    render(<AllListsContent lists={someLists} mutate={jest.fn()} />);
    fireEvent.click(screen.getByTestId('delete'));

    expect(deleteList).toHaveBeenCalledWith('1', 'someToken');
  });
});
