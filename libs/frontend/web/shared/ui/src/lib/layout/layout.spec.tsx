import { render } from '@testing-library/react';
import { Layout } from './layout';

describe('Layout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Layout>
        <h1>SomeChildren</h1>
      </Layout>
    );
    expect(baseElement).toBeTruthy();
  });
});
