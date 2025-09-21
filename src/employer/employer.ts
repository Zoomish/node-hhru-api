import { request } from '../http.ts'
import { EmployerMeResponse } from './types.ts'

export async function getEmployerMe(
    token: string
): Promise<EmployerMeResponse> {
    return request<EmployerMeResponse>('/employers/me', { token })
}
