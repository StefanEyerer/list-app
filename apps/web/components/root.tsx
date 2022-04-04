import { Layout } from '@list-app/frontend/web/shared-ui';
import { useSession } from 'next-auth/react';
import { Auth } from './auth';

interface RootProps {
  children: JSX.Element;
  requiresAuth: boolean;
}

export default function Root({ children, requiresAuth }: RootProps) {
  const { data } = useSession();

  return (
    <Layout
      isAuthenticated={!!data?.user}
      user={{
        name: data?.user?.name || '',
        email: data?.user?.email || '',
        image: data?.user?.image || '',
      }}
    >
      {requiresAuth ? <Auth>{children}</Auth> : children}
    </Layout>
  );
}
