import { CreateShareBody } from '@list-app/shared/api-interfaces';
import { getApiUrl } from './internal/get-api-url';

export async function createShare(body: CreateShareBody, token: string) {
  const apiUrl = await getApiUrl();
  return fetch(`${apiUrl}/shares`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...body }),
  });
}
