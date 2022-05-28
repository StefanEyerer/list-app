import { getApiUrl } from './get-api-url';

export const fetcher = async (path: string, token?: string) => {
  const apiUrl = await getApiUrl();
  const url = `${apiUrl}${path}`;
  if (!token)
    return fetch(url).then((res) => {
      if (!res.ok) throw new Error('An error occured');
      return res.json();
    });
  return fetch(url, { headers: { Authorization: `Bearer ${token}` } }).then(
    (res) => {
      if (!res.ok) throw new Error('An error occured');
      return res.json();
    }
  );
};
