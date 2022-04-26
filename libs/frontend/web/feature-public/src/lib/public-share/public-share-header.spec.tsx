import { render, screen } from '@testing-library/react';
import { PublicShareHeader } from './public-share-header';

describe('PublicShareHeader', () => {
  it('should render title', () => {
    const someList = {
      id: '1',
      name: 'Name 1',
      description: 'Description 1',
      items: [],
    };

    render(<PublicShareHeader list={someList} />);

    expect(screen.queryByText('Name 1')).toBeTruthy();
    expect(screen.queryByText('Description 1')).toBeTruthy();
  });
  it('should render name and description of shared list', () => {
    const someList = {
      id: '1',
      name: 'Name 1',
      description: 'Description 1',
      items: [],
    };

    render(<PublicShareHeader list={someList} />);

    expect(
      screen.queryByText('This List Has Been Shared With You')
    ).toBeTruthy();
  });
});
