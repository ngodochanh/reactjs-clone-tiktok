const baseURL: string = process.env.REACT_APP_BASE_URL ?? '';

export async function get(endpoint: string, options: RequestInit = {}) {
  const url = `${baseURL}${endpoint}`;

  const response = await fetch(url, options);

  return response.json();
}
