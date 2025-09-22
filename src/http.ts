import fetch, { Response } from 'node-fetch'

interface RequestOptions {
    method: string
    headers: Record<string, string>
    body: any
    token: string
    rawBody: boolean
}

interface HttpConfig {
    locale?: string
    host?: string
    userAgent: string
}

let globalConfig: HttpConfig = {
    userAgent: 'NodeHH-API/1.0 (zoomish39@gmail.com)',
}

export function setHttpConfig(config: Partial<HttpConfig>) {
    globalConfig = { ...globalConfig, ...config }
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
            'HH-User-Agent': globalConfig.userAgent,
            ...headers,
        },
        body: rawBody ? body : JSON.stringify(body),
    })
    console.log(response.headers)

    if (!response.ok) {
        throw new Error(
            `HH API Error: ${response.status} ${response.statusText} fetching from ${url}\n` +
                (await response.text())
        )
    }

    return response.json() as Promise<T>
}
