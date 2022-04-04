import { apiUrl } from './internal/api-url';

export function deleteList(id: string, token: string) {
  return fetch(`${apiUrl}/lists/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'DELETE',
  });
}
