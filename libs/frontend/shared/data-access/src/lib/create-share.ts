import { CreateShareBody } from '@list-app/shared/api-interfaces';
import { apiUrl } from './internal/api-url';

export function createShare(body: CreateShareBody, token: string) {
  return fetch(`${apiUrl}/shares`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...body }),
  });
}
