import fetch, { Response } from "node-fetch";

export interface RequestOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: any;
  token?: string;
}

export async function request<T>(
  url: string,
  options: RequestOptions = {}
): Promise<T> {
  const { method = "GET", headers = {}, body, token } = options;

  const response: Response = await fetch(`https://api.hh.ru${url}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    throw new Error(`HH API Error: ${response.status} ${response.statusText}`);
  }

  return response.json() as Promise<T>;
}
