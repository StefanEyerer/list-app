import { apiUrl } from './internal/api-url';

export function deleteShare(id: string, token: string) {
  return fetch(`${apiUrl}/shares/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'DELETE',
  });
}
