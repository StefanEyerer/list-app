import { updateList } from '@list-app/frontend-shared-data-access';
import { fireEvent, render, screen } from '@testing-library/react';
import { SingleListHeader } from './single-list-header';

const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath;
const mockSession = { data: { id_token: 'someToken' } };
jest.mock('next-auth/react', () => ({ useSession: () => mockSession }));
jest.mock('@list-app/frontend-shared-data-access', () => ({
  updateList: jest.fn().mockResolvedValue(null),
}));

describe('SingleListHeader', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should render name and description of list', () => {
    const someList = {
      id: '1',
      name: 'Name 1',
      description: 'Description 1',
      items: [],
      userId: '1',
    };

    render(<SingleListHeader list={someList} mutate={jest.fn()} />);

    expect(screen.queryByText('Name 1')).toBeTruthy();
    expect(screen.queryByText('Description 1')).toBeTruthy();
  });
  it('should update list if button is clicked and text for new item is provided', () => {
    const someList = {
      id: '1',
      name: 'Name 1',
      description: 'Description 1',
      items: [],
      userId: '1',
    };

    render(<SingleListHeader list={someList} mutate={jest.fn()} />);
    fireEvent.input(screen.getByTestId('text'), {
      target: { value: 'Some Text' },
    });
    fireEvent.click(screen.getByTestId('add'));

    expect(updateList).toHaveBeenCalledWith(
      '1',
      { items: [{ id: '500', text: 'Some Text' }] },
      'someToken'
    );
  });
  it('should not update list if button is clicked and no text for new item is provided', () => {
    const someList = {
      id: '1',
      name: 'Name 1',
      description: 'Description 1',
      items: [],
      userId: '1',
    };

    render(<SingleListHeader list={someList} mutate={jest.fn()} />);
    fireEvent.click(screen.getByTestId('add'));

    expect(updateList).not.toHaveBeenCalled();
  });
});
