import { Lists } from '@list-app/shared/api-interfaces';
import useSWR from 'swr';
import { fetcher } from './internal/fetcher';

export function useLists(token: string) {
  const { data, error, isValidating, mutate } = useSWR<Lists>(
    ['/lists', token],
    fetcher
  );

  return {
    lists: data,
    isError: !!error,
    isLoading: !data && !error,
    isValidating: isValidating,
    mutate: mutate,
  };
}
