import { CreateListBody } from '@list-app/shared/api-interfaces';
import { apiUrl } from './internal/api-url';

export function createList(body: CreateListBody) {
  return fetch(`${apiUrl}/lists`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...body }),
  });
}
