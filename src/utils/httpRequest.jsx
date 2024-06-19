const baseURL = process.env.REACT_APP_BASE_URL;

export async function get(endpoint, options = {}) {
  const url = `${baseURL}${endpoint}`;

  const response = await fetch(url, options);

  return response.json();
}
