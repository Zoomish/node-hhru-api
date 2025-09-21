import { request } from '../http.ts'
import { ResumeListResponse } from './types.ts'

export async function getResumes(token: string): Promise<ResumeListResponse> {
    return request<ResumeListResponse>('/resumes/mine', { token })
}
