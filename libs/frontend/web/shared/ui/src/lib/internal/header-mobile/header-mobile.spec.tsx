import { render } from '@testing-library/react';
import { HeaderMobile } from './header-mobile';

describe('HeaderMobile', () => {
  it('should not render login button if authenticated', () => {
    const { baseElement } = render(
      <HeaderMobile
        isAuthenticated={true}
        user={{ name: 'someName', email: 'someEmail', image: 'someImage' }}
      />
    );
    expect(baseElement.innerHTML).not.toContain('Login');
  });
  it('should render login button if not authenticated', () => {
    const { baseElement } = render(
      <HeaderMobile
        isAuthenticated={false}
        user={{ name: 'someName', email: 'someEmail', image: 'someImage' }}
      />
    );
    expect(baseElement.innerHTML).toContain('Login');
  });
});
