import { List } from '@list-app/shared/api-interfaces';
import useSWR from 'swr';
import { apiUrl } from './internal/api-url';
import { fetcher } from './internal/fetcher';

export function usePublicShare(accessKey: string) {
  const { data, error, isValidating, mutate } = useSWR<List>(
    [`${apiUrl}/public/shares/${accessKey}`],
    fetcher
  );

  return {
    list: data,
    isError: !!error,
    isLoading: !data && !error,
    isValidating: isValidating,
    mutate: mutate,
  };
}
