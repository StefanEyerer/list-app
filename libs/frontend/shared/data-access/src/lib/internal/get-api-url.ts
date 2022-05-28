let apiUrl: string;

export const getApiUrl = async () => {
  if (!apiUrl) apiUrl = (await (await fetch(`/api/config`)).json())['apiUrl'];
  return apiUrl;
};
