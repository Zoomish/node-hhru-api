import fetch, { Response } from 'node-fetch'

interface RequestOptions {
    method: string
    headers: Record<string, string>
    body: any
    token: string
    rawBody: boolean
}

export async function request<T>(
    url: string,
    options: Partial<RequestOptions> = {}
): Promise<T> {
    const {
        method = 'GET',
        headers = {},
        body,
        token,
        rawBody = false,
    } = options

    const response: Response = await fetch(
        url.startsWith('http') ? url : `https://api.hh.ru${url}`,
        {
            method,
            headers: {
                ...(rawBody ? {} : { 'Content-Type': 'application/json' }),
                ...(token ? { Authorization: `Bearer ${token}` } : {}),
                ...headers,
            },
            body: body ? (rawBody ? body : JSON.stringify(body)) : undefined,
        }
    )

    if (!response.ok) {
        throw new Error(
            `HH API Error: ${response.status} ${response.statusText}\n` +
                (await response.text())
        )
    }

    return response.json() as Promise<T>
}
