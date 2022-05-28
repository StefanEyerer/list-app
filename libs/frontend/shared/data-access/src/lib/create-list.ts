import { CreateListBody } from '@list-app/shared/api-interfaces';
import { getApiUrl } from './internal/get-api-url';

export async function createList(body: CreateListBody, token: string) {
  const apiUrl = await getApiUrl();
  return fetch(`${apiUrl}/lists`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...body }),
  });
}
