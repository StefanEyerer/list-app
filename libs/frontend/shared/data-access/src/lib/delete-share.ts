import { getApiUrl } from './internal/get-api-url';

export async function deleteShare(id: string, token: string) {
  const apiUrl = await getApiUrl();
  return fetch(`${apiUrl}/shares/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'DELETE',
  });
}
