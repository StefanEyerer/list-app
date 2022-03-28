import { UpdateListBody } from '@list-app/shared/api-interfaces';
import { apiUrl } from './internal/api-url';

export function updateList(id: string, body: UpdateListBody) {
  return fetch(`${apiUrl}/lists/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...body }),
  });
}
