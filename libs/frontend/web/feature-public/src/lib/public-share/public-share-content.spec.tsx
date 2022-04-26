import { render, screen } from '@testing-library/react';
import { PublicShareContent } from './public-share-content';

describe('PublicShareContent', () => {
  it('should render info text if no list items are present', () => {
    const someList = {
      id: '1',
      name: 'Name 1',
      description: 'Description 1',
      items: [],
    };

    render(<PublicShareContent list={someList} />);

    expect(screen.queryByText('The list seems to be empty.')).toBeTruthy();
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
    };

    render(<PublicShareContent list={someList} />);

    expect(screen.queryByText('Text 11')).toBeTruthy();
    expect(screen.queryByText('Text 22')).toBeTruthy();
  });
});
