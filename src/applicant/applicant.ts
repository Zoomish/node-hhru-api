import { request } from '../http.ts'
import { ResumeListResponse } from './types.ts'

export async function getResumes(token: string): Promise<ResumeListResponse> {
    const resumes = await request<ResumeListResponse>('/resumes/mine', {
        token,
    })
    console.log(resumes)

    return resumes
}
