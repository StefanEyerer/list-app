import { List } from '@list-app/shared/api-interfaces';
import useSWR from 'swr';
import { fetcher } from './internal/fetcher';

export function useList(id: string, token: string) {
  const { data, error, isValidating, mutate } = useSWR<List>(
    [`/lists/${id}`, token],
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
