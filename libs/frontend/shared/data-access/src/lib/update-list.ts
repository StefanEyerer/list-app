import { UpdateListBody } from '@list-app/shared/api-interfaces';
import { getApiUrl } from './internal/get-api-url';

export async function updateList(
  id: string,
  body: UpdateListBody,
  token: string
) {
  const apiUrl = await getApiUrl();
  return fetch(`${apiUrl}/lists/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...body }),
  });
}
