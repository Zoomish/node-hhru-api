import { request } from '../http.ts'
import {
    MyResumeItemsResponse,
    PhoneConfirmationBody,
    PhoneInfoResponse,
    PhoneSendCodeResponse,
    ResumeConditions,
    ResumeItemByStatusResponse,
    ResumeItemCreationAvailability,
    ResumeItemStatusResponse,
    ResumeItemViewsResponse,
    SimilarVacanciesResponse,
    SuitableResumeItemsResponse,
} from './responses.types.ts'
import { ResumeItem, SimilarVacancySearchParams } from './types.ts'

function objectToUrlSearchParams(obj?: object): string {
    if (!obj) return ''
    return new URLSearchParams(
        Object.entries(obj ?? {}).flatMap(([key, value]) => {
            if (value === undefined || value === null) return []
            if (Array.isArray(value)) return value.map((v) => [key, String(v)])
            return [[key, String(value)]]
        })
    ).toString()
}

export async function confirmPhone(token: string, body: PhoneConfirmationBody) {
    return request('/resume_phone_confirm', {
        method: 'POST',
        body: objectToUrlSearchParams(body),
        token,
        rawBody: true,
    })
}

export async function getPhoneInfo(token: string, phone: string) {
    return request<PhoneInfoResponse>(
        `/resume_should_send_sms?${objectToUrlSearchParams({ phone })}`,
        {
            method: 'GET',
            token,
        }
    )
}

export async function sendPhoneConfirmationCode(token: string, phone: string) {
    return request<PhoneSendCodeResponse>('/resume_phone_generate_code', {
        method: 'POST',
        body: objectToUrlSearchParams({ phone }),
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
    return request<ResumeItem>(
        `/resumes/${resumeId}?${objectToUrlSearchParams(queryParams)}`,
        {
            method: 'GET',
            token,
        }
    )
}

export async function getResumeConditions(
    token: string
): Promise<ResumeConditions> {
    return request<ResumeConditions>('/resume_conditions', {
        method: 'GET',
        token,
    })
}

export async function getResumeConditionsById(
    token: string,
    resumeId: string
): Promise<ResumeConditions> {
    return request<ResumeConditions>(`/resumes/${resumeId}/conditions`, {
        method: 'GET',
        token,
    })
}

export async function getSimilarVacancies(
    token: string,
    resumeId: string,
    params?: SimilarVacancySearchParams
): Promise<SimilarVacanciesResponse> {
    return request<SimilarVacanciesResponse>(
        `/resumes/${resumeId}/similar_vacancies?${objectToUrlSearchParams(params)}`,
        {
            method: 'GET',
            token,
        }
    )
}
