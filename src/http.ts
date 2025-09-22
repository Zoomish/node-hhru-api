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

    const response: Response = await fetch(`https://api.hh.ru${url}`, {
        method,
        headers: {
            'Content-Type': rawBody
                ? 'application/x-www-form-urlencoded'
                : 'application/json',
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
            ...headers,
        },
        body: rawBody ? body : JSON.stringify(body),
    })

    if (!response.ok) {
        throw new Error(
            `HH API Error: ${response.status} ${response.statusText} fetching from ${url}\n` +
                (await response.text())
        )
    }

    return response.json() as Promise<T>
}
