export const fetcher = (url: string, token?: string) => {
  if (!token)
    return fetch(url).then((res) => {
      if (!res.ok) throw new Error('An error occured');
      return res.json();
    });
  return fetch(url, { headers: { Authorization: `Bearer ${token}` } }).then(
    (res) => {
      if (!res.ok) throw new Error('An error occured');
      return res.json();
    }
  );
};
