import { List } from '@list-app/shared/api-interfaces';
import useSWR from 'swr';
import { apiUrl } from './internal/api-url';
import { fetcher } from './internal/fetcher';

export function useList(id: string) {
  const { data, error, isValidating, mutate } = useSWR<List>(
    `${apiUrl}/lists/${id}`,
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
