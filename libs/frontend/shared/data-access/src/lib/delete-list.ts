import { getApiUrl } from './internal/get-api-url';

export async function deleteList(id: string, token: string) {
  const apiUrl = await getApiUrl();
  return fetch(`${apiUrl}/lists/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'DELETE',
  });
}
