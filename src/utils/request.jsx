const baseURL = 'https://tiktok.fullstack.edu.vn/api';

export async function get(endpoint, options = {}) {
  const url = `${baseURL}${endpoint}`;

  const response = await fetch(url, options);

  return response.json();
}
