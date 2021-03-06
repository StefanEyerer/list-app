import { Share } from '@list-app/shared/api-interfaces';
import useSWR from 'swr';
import { fetcher } from './internal/fetcher';

export function useShare(id: string, token: string) {
  const { data, error, isValidating, mutate } = useSWR<Share>(
    [`/shares/${id}`, token],
    fetcher
  );

  return {
    share: data,
    isError: !!error,
    isLoading: !data && !error,
    isValidating: isValidating,
    mutate: mutate,
  };
}
