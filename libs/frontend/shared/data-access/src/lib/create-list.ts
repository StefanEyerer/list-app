import { CreateListBody } from '@list-app/shared/api-interfaces';
import { apiUrl } from './internal/api-url';

export function createList(body: CreateListBody, token: string) {
  return fetch(`${apiUrl}/lists`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...body }),
  });
}
