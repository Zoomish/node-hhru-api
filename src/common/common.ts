import { request } from '../http.ts'
import { AuthResponse } from './types.ts'

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
