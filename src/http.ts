import fetch, { Response } from 'node-fetch'
import { HHError } from './error.ts'
import { Methods } from './types/const.ts'
import { HHApiError } from './types/errors.types.ts'

interface RequestOptions {
    method: Methods
    headers: Record<string, string>
    body: any
    token: string
    rawBody: boolean
    oldAddress: boolean
    queryParams: string
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
        oldAddress = false,
        queryParams = '',
    } = options

    const response: Response = await fetch(
        `https://${oldAddress ? 'hh.ru' : 'api.hh.ru'}${url}?${queryParams}`,
        {
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
        }
    )

    const json = await response.json().catch(() => ({}))
    if (!response.ok) {
        throw new HHError(response.status, json as HHApiError)
    }

    return json as Promise<T>
}
