import { request } from '../http.ts'
import { CurrentUser } from './types.ts'

export async function getCurrentUser(token: string): Promise<CurrentUser> {
    return request<CurrentUser>('/me', {
        token,
    })
}
