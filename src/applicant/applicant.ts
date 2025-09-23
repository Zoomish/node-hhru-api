import { request } from '../http.ts'
import {
    MyResumeItemsResponse,
    PhoneConfirmationBody,
    PhoneInfoResponse,
    PhoneSendCodeResponse,
    ResumeItemByStatusResponse,
    ResumeItemCreationAvailability,
    ResumeItemStatusResponse,
    ResumeItemViewsResponse,
    SuitableResumeItemsResponse,
    ResumeConditions,
} from './responses.types.ts'
import { ResumeItem } from './types.ts'

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
): Promise<ResumeItemCreationAvailability> {
    return request<ResumeItemCreationAvailability>(
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
): Promise<ResumeItemByStatusResponse> {
    return request<ResumeItemByStatusResponse>(
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
): Promise<ResumeItemStatusResponse> {
    return request<ResumeItemStatusResponse>(`/resumes/${resumeId}/status`, {
        method: 'GET',
        token,
    })
}

export async function getMyResumes(
    token: string
): Promise<MyResumeItemsResponse> {
    return request<MyResumeItemsResponse>('/resumes/mine', {
        method: 'GET',
        token,
    })
}

export async function getSuitableResumes(
    vacancyId: string,
    token: string
): Promise<SuitableResumeItemsResponse> {
    return request<SuitableResumeItemsResponse>(
        `/vacancies/${vacancyId}/suitable_resumes`,
        {
            method: 'GET',
            token,
        }
    )
}

export async function getResumeViews(
    resumeId: string,
    token: string,
    withEmployerLogo?: boolean
): Promise<ResumeItemViewsResponse> {
    const query = withEmployerLogo ? '?with_employer_logo=true' : ''
    return request<ResumeItemViewsResponse>(
        `/resumes/${resumeId}/views${query}`,
        {
            method: 'GET',
            token,
        }
    )
}

export async function getResume(
    resumeId: string,
    token: string,
    queryParams?: {
        with_negotiations_history?: boolean
        with_creds?: boolean
        with_job_search_status?: boolean
    }
): Promise<ResumeItem> {
    const query = new URLSearchParams()
    if (queryParams?.with_negotiations_history)
        query.append('with_negotiations_history', 'true')
    if (queryParams?.with_creds) query.append('with_creds', 'true')
    if (queryParams?.with_job_search_status)
        query.append('with_job_search_status', 'true')

    const queryString = query.toString() ? `?${query.toString()}` : ''
    return request<ResumeItem>(`/resumes/${resumeId}${queryString}`, {
        method: 'GET',
        token,
    })
}

export async function getResumeConditions(
    token: string
): Promise<ResumeConditions> {
    return request<ResumeConditions>('/resume_conditions', {
        method: 'GET',
        token,
    })
}
