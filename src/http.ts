import fetch, { Response } from 'node-fetch'
import { HHError } from './error.ts'
import { ContentType, Methods } from './types/const.types.ts'
import { HHApiError } from './types/errors.js'

interface RequestOptions {
    method: Methods
    headers: Record<string, string>
    body: any
    token: string
    contentType: ContentType
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
        contentType = 'application/json',
        oldAddress = false,
        queryParams = '',
    } = options

    return fetch(
        `https://${oldAddress ? 'hh.ru' : 'api.hh.ru'}${url}?${queryParams}`,
        {
            method,
            headers: {
                'Content-Type': contentType,
                ...(token ? { Authorization: `Bearer ${token}` } : {}),
                'HH-User-Agent': globalConfig.userAgent,
                ...headers,
            },
            body:
                contentType !== 'application/json'
                    ? body
                    : JSON.stringify(body),
        }
    )
        .then((response: Response) => {
            return response.json().catch(() => ({})) as T
        })
        .catch((error) => {
            throw new HHError<HHApiError>(
                error.status,
                error.json().catch(() => ({})) as HHApiError
            )
        })
}
