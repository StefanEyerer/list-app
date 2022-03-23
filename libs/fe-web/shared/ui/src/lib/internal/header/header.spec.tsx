import { render } from '@testing-library/react';
import { Header } from './header';

describe('Header', () => {
  it('should render username if authenticated', () => {
    const { baseElement } = render(
      <Header isAuthenticated={true} username={'someUsername'} />
    );
    expect(baseElement.innerHTML).toContain('someUsername');
  });
  it('should not render username if not authenticated', () => {
    const { baseElement } = render(
      <Header isAuthenticated={false} username={'someUsername'} />
    );
    expect(baseElement.innerHTML).not.toContain('someUsername');
  });
});
