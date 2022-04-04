import { UpdateListBody } from '@list-app/shared/api-interfaces';
import { apiUrl } from './internal/api-url';

export function updateList(id: string, body: UpdateListBody, token: string) {
  return fetch(`${apiUrl}/lists/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...body }),
  });
}
