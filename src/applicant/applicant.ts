import { request } from '../http.ts'
import {
    MyResumesResponse,
    PhoneConfirmationBody,
    PhoneInfoResponse,
    PhoneSendCodeResponse,
    ResumeByStatusResponse,
    ResumeCreationAvailability,
    ResumeStatusResponse,
    SuitableResumesResponse,
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

export async function checkResumeCreation(
    token: string
): Promise<ResumeCreationAvailability> {
    return request<ResumeCreationAvailability>(
        '/resumes/creation_availability',
        {
            method: 'GET',
            token,
        }
    )
}

export async function publishResume(
    resumeId: string,
    token: string
): Promise<void> {
    await request<void>(`/resumes/${resumeId}/publish`, {
        method: 'POST',
        token,
    })
}

export async function getResumesByStatus(
    token: string,
    vacancy_id: string
): Promise<ResumeByStatusResponse> {
    return request<ResumeByStatusResponse>(
        `/vacancies/${vacancy_id}/resumes_by_status`,
        {
            method: 'GET',
            token,
        }
    )
}

export async function getResumeStatus(
    resumeId: string,
    token: string
): Promise<ResumeStatusResponse> {
    return request<ResumeStatusResponse>(`/resumes/${resumeId}/status`, {
        method: 'GET',
        token,
    })
}

export async function getMyResumes(token: string): Promise<MyResumesResponse> {
    return request<MyResumesResponse>('/resumes/mine', {
        method: 'GET',
        token,
    })
}

export async function getSuitableResumes(
    vacancyId: string,
    token: string
): Promise<SuitableResumesResponse> {
    return request<SuitableResumesResponse>(
        `/vacancies/${vacancyId}/suitable_resumes`,
        {
            method: 'GET',
            token,
        }
    )
}
