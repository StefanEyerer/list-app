import { Shares } from '@list-app/shared/api-interfaces';
import useSWR from 'swr';
import { fetcher } from './internal/fetcher';

export function useShares(token: string) {
  const { data, error, isValidating, mutate } = useSWR<Shares>(
    ['/shares', token],
    fetcher
  );

  return {
    shares: data,
    isError: !!error,
    isLoading: !data && !error,
    isValidating: isValidating,
    mutate: mutate,
  };
}
