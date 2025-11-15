import fetch, { HeadersInit, Response } from 'node-fetch'
import { HHError } from './error.ts'
import { ContentType, Methods } from './types/const.types.ts'
import { HHApiError } from './types/errors.js'

interface RequestOptions {
    method: Methods
    headers: Record<string, string>
    body: unknown
    token: string
    contentType: ContentType
    useOldAddress: boolean
    queryParams: string | URLSearchParams
}

interface HttpConfig {
    locale?: string
    host?: string
    userAgent: string
}

const defaultConfig: HttpConfig = {
    userAgent: 'example/1.0 (example@gmail.com)',
}

let globalConfig: HttpConfig = { ...defaultConfig }

export function setHttpConfig(config: Partial<HttpConfig>): void {
    globalConfig = { ...globalConfig, ...config }
}

function buildUrl(
    path: string,
    useOldAddress: boolean,
    queryParams?: string | URLSearchParams
): string {
    const baseUrl = `https://${useOldAddress ? 'hh.ru' : 'api.hh.ru'}${path}`
    const searchParams = queryParams ? `?${queryParams.toString()}` : ''
    return baseUrl + searchParams
}

function buildHeaders(
    contentType: ContentType,
    token?: string,
    customHeaders?: Record<string, string>
): HeadersInit {
    const headers: HeadersInit = {
        'Content-Type': contentType,
        'HH-User-Agent': globalConfig.userAgent,
        ...customHeaders,
    }

    if (token) {
        headers.Authorization = `Bearer ${token}`
    }

    return headers
}

function buildBody(
    contentType: ContentType,
    body: unknown
): BodyInit | undefined {
    if (body === undefined) return undefined

    return contentType === 'application/json'
        ? JSON.stringify(body)
        : (body as BodyInit)
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
        useOldAddress = false,
        queryParams = '',
    } = options

    const targetUrl = buildUrl(url, useOldAddress, queryParams)
    const requestHeaders = buildHeaders(contentType, token, headers)
    const requestBody = buildBody(contentType, body)

    const response: Response = await fetch(targetUrl, {
        method,
        headers: requestHeaders,
        body: requestBody,
    })

    const responseData = await response.json().catch(() => ({}))

    console.log(requestHeaders, requestBody)

    if (!response.ok) {
        throw new HHError<HHApiError>(
            response.status,
            responseData as HHApiError
        )
    }

    return responseData as T
}
