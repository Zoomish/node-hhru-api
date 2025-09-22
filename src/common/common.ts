import { request } from '../http.ts'
import { AppTokenResponse, AuthResponse, UserTokenResponse } from './types.ts'

export async function authorize(
    clientId: string,
    clientSecret: string,
    code: string,
    redirectUri: string
): Promise<AuthResponse> {
    return request<AuthResponse>('/oauth/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: {
            grant_type: 'authorization_code',
            client_id: clientId,
            client_secret: clientSecret,
            code,
            redirect_uri: redirectUri,
        },
    })
}

export async function getAppToken(
    clientId: string,
    clientSecret: string
): Promise<AppTokenResponse> {
    return request<AppTokenResponse>('https://hh.ru/oauth/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            grant_type: 'client_credentials',
            client_id: clientId,
            client_secret: clientSecret,
        }),
        rawBody: true,
    })
}

export async function getUserToken(
    clientId: string,
    clientSecret: string,
    code: string,
    redirectUri: string
): Promise<UserTokenResponse> {
    return request<UserTokenResponse>('/oauth/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            grant_type: 'authorization_code',
            client_id: clientId,
            client_secret: clientSecret,
            code,
            redirect_uri: redirectUri,
        }).toString(),
        rawBody: true,
    })
}

export async function refreshUserToken(
    clientId: string,
    clientSecret: string,
    refreshToken: string
): Promise<UserTokenResponse> {
    return request<UserTokenResponse>('/oauth/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            client_id: clientId,
            client_secret: clientSecret,
            refresh_token: refreshToken,
        }).toString(),
        rawBody: true,
    })
}
