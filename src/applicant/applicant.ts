import { request } from '../http.ts'
import {
    PhoneConfirmationBody,
    PhoneInfoResponse,
    PhoneSendCodeResponse,
    ResumeCreationAvailability,
    ResumeListResponse,
} from './types.ts'

export async function confirmPhone(token: string, body: PhoneConfirmationBody) {
    const formBody = new URLSearchParams({
        phone: body.phone,
        confirmation_code: body.confirmation_code,
    }).toString()

    return request('/resume_phone_confirm', {
        method: 'POST',
        body: formBody,
        token,
        rawBody: true,
    })
}

export async function getPhoneInfo(token: string, phone: string) {
    const query = new URLSearchParams({ phone }).toString()
    return request<PhoneInfoResponse>(`/resume_should_send_sms?${query}`, {
        method: 'GET',
        token,
    })
}

export async function sendPhoneConfirmationCode(token: string, phone: string) {
    const body = new URLSearchParams({ phone }).toString()
    return request<PhoneSendCodeResponse>('/resume_phone_generate_code', {
        method: 'POST',
        body,
        rawBody: true,
        token,
    })
}

export async function deleteResume(token: string, resumeId: string) {
    return request<void>(`/resumes/${resumeId}`, {
        method: 'DELETE',
        token,
    })
}

export async function checkResumeCreation(token: string): Promise<ResumeCreationAvailability> {
    return request<ResumeCreationAvailability>('/resumes/creation_availability', {
        method: 'GET',
        token,
    })
}

export async function publishResume(resumeId: string, token: string): Promise<void> {
    await request<void>(`/resumes/${resumeId}/publish`, {
        method: 'POST',
        token,
    })
}

export async function getResumes(token: string): Promise<ResumeListResponse> {
    return request<ResumeListResponse>('/resumes/mine', { token })
}
