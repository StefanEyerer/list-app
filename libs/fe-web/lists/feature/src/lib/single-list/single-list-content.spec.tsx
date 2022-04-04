import { updateList } from '@list-app/shared/frontend/data-access';
import { fireEvent, render, screen } from '@testing-library/react';
import { SingleListContent } from './single-list-content';

const mockSession = { data: { id_token: 'someToken' } };
jest.mock('next-auth/react', () => ({ useSession: () => mockSession }));
jest.mock('@list-app/shared/frontend/data-access', () => ({
  updateList: jest.fn().mockResolvedValue(null),
}));

describe('SingleListContent', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should render info text if no list items are present', () => {
    const someList = {
      id: '1',
      name: 'Name 1',
      description: 'Description 1',
      items: [],
      userId: '1',
    };

    render(<SingleListContent list={someList} mutate={jest.fn()} />);

    expect(screen.queryByText('You have no list items yet.')).toBeTruthy();
  });
  it('should render text of list items if list items are present', () => {
    const someList = {
      id: '1',
      name: 'Name 1',
      description: 'Description 1',
      items: [
        { id: '11', text: 'Text 11' },
        { id: '22', text: 'Text 22' },
      ],
      userId: '1',
    };

    render(<SingleListContent list={someList} mutate={jest.fn()} />);

    expect(screen.queryByText('Text 11')).toBeTruthy();
    expect(screen.queryByText('Text 22')).toBeTruthy();
  });
  it('should delete list item if delete icon is clicked', () => {
    const someList = {
      id: '1',
      name: 'Name 1',
      description: 'Description 1',
      items: [{ id: '11', text: 'Text 11' }],
      userId: '1',
    };

    render(<SingleListContent list={someList} mutate={jest.fn()} />);
    fireEvent.click(screen.getByTestId('delete'));

    expect(updateList).toHaveBeenCalledWith('1', { items: [] }, 'someToken');
  });
});
