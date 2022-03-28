import { apiUrl } from './internal/api-url';

export function deleteList(id: string) {
  return fetch(`${apiUrl}/lists/${id}`, {
    method: 'DELETE',
  });
}
