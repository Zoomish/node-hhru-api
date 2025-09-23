import { request } from '../http.ts'
import {
    PhoneConfirmationBody,
    PhoneInfoResponse,
    PhoneSendCodeResponse,
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

export async function getResumes(token: string): Promise<ResumeListResponse> {
    return request<ResumeListResponse>('/resumes/mine', { token })
}
