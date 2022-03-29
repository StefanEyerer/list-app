import { render, screen } from '@testing-library/react';
import { CreateListHeader } from './create-list-header';

describe('CreateListHeader', () => {
  it('should render title', () => {
    render(<CreateListHeader />);

    expect(screen.queryByText('Create New List')).toBeTruthy();
  });
});
