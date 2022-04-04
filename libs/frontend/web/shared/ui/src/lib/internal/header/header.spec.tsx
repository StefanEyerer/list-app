import { render } from '@testing-library/react';
import { Header } from './header';

describe('Header', () => {
  it('should render logout button if authenticated', () => {
    const { baseElement } = render(
      <Header
        isAuthenticated={true}
        user={{ name: 'someName', email: 'someEmail', image: 'someImage' }}
      />
    );
    expect(baseElement.innerHTML).toContain('Logout');
  });
  it('should render login button if not authenticated', () => {
    const { baseElement } = render(
      <Header
        isAuthenticated={false}
        user={{ name: 'someName', email: 'someEmail', image: 'someImage' }}
      />
    );
    expect(baseElement.innerHTML).toContain('Login');
  });
});
