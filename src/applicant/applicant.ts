import {
    arrayToUrlSearchParams,
    objectToFormData,
    objectToUrlSearchParams,
} from '../helpers.ts'
import { request } from '../http.ts'
import {
    AddEmployersToVisibilityListBody,
    ApplyVacancyBody,
    BlacklistEmployersResponse,
    BlacklistVacanciesResponse,
    MyResumeItemsResponse,
    PhoneConfirmationBody,
    PhoneInfoResponse,
    PhoneSendCodeResponse,
    ResumeAccessTypeResponse,
    ResumeConditions,
    ResumeItemByStatusResponse,
    ResumeItemCreationAvailability,
    ResumeItemFull,
    ResumeItemStatusResponse,
    ResumeItemViewsResponse,
    ResumeVisibilityListResponse,
    ResumeVisibilityListType,
    ResumeVisibilitySearchParams,
    ResumeVisibilitySearchResponse,
    SimilarVacanciesResponse,
    SimilarVacancySearchParams,
    SuitableResumeItemsResponse,
    VacancyFull,
} from './types/index.ts'

export async function confirmPhone(
    token: string,
    body: PhoneConfirmationBody
): Promise<void> {
    return request<void>('/resume_phone_confirm', {
        method: 'POST',
        body: objectToUrlSearchParams(body),
        token,
        contentType: 'application/x-www-form-urlencoded',
    })
}

export async function getPhoneInfo(
    token: string,
    phone: string
): Promise<PhoneInfoResponse> {
    return request<PhoneInfoResponse>(`/resume_should_send_sms`, {
        method: 'GET',
        token,
        queryParams: objectToUrlSearchParams({ phone }),
    })
}

export async function sendPhoneConfirmationCode(
    token: string,
    phone: string
): Promise<PhoneSendCodeResponse> {
    return request<PhoneSendCodeResponse>('/resume_phone_generate_code', {
        method: 'POST',
        body: objectToUrlSearchParams({ phone }),
        contentType: 'application/x-www-form-urlencoded',
        token,
    })
}

export async function deleteResume(
    token: string,
    resumeId: string
): Promise<void> {
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
    return request<ResumeItemViewsResponse>(`/resumes/${resumeId}/views`, {
        method: 'GET',
        token,
        queryParams: withEmployerLogo ? 'with_employer_logo=true' : '',
    })
}

export async function getResume(
    resumeId: string,
    token: string,
    queryParams?: {
        with_negotiations_history?: boolean
        with_creds?: boolean
        with_job_search_status?: boolean
    }
): Promise<ResumeItemFull> {
    return request<ResumeItemFull>(`/resumes/${resumeId}`, {
        method: 'GET',
        token,
        queryParams: objectToUrlSearchParams(queryParams),
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
    params?: Partial<SimilarVacancySearchParams>
): Promise<SimilarVacanciesResponse> {
    return request<SimilarVacanciesResponse>(
        `/resumes/${resumeId}/similar_vacancies`,
        {
            method: 'GET',
            token,
            queryParams: objectToUrlSearchParams(params),
        }
    )
}

export async function getAccessTypes(
    token: string,
    resumeId: string
): Promise<ResumeAccessTypeResponse> {
    return request<ResumeAccessTypeResponse>(
        `/resumes/${resumeId}/access_types`,
        {
            method: 'GET',
            token,
        }
    )
}

export async function searchVisibilityEmployers(
    token: string,
    resumeId: string,
    listType: ResumeVisibilityListType,
    params: ResumeVisibilitySearchParams
): Promise<ResumeVisibilitySearchResponse> {
    return request<ResumeVisibilitySearchResponse>(
        `/resumes/${resumeId}/${listType}/search`,
        {
            method: 'GET',
            token,
            queryParams: objectToUrlSearchParams(params),
        }
    )
}

export async function getVisibilityList(
    token: string,
    resumeId: string,
    listType: ResumeVisibilityListType
): Promise<ResumeVisibilityListResponse> {
    return request<ResumeVisibilityListResponse>(
        `/resumes/${resumeId}/${listType}`,
        {
            method: 'GET',
            token,
        }
    )
}

export async function addToVisibilityList(
    token: string,
    resumeId: string,
    listType: ResumeVisibilityListType,
    body: AddEmployersToVisibilityListBody
): Promise<ResumeVisibilitySearchResponse> {
    return request<ResumeVisibilitySearchResponse>(
        `/resumes/${resumeId}/${listType}`,
        {
            method: 'POST',
            token,
            body,
        }
    )
}

export async function clearVisibilityList(
    token: string,
    resumeId: string,
    listType: ResumeVisibilityListType
): Promise<void> {
    return request<void>(`/resumes/${resumeId}/${listType}`, {
        method: 'DELETE',
        token,
    })
}

export async function removeFromVisibilityList(
    token: string,
    resumeId: string,
    listType: ResumeVisibilityListType,
    id: string[]
): Promise<void> {
    return request<void>(`/resumes/${resumeId}/${listType}/employer`, {
        method: 'DELETE',
        token,
        queryParams: arrayToUrlSearchParams('id', id),
    })
}

export async function getVacancy(
    token: string,
    vacancyId: string
): Promise<VacancyFull> {
    return request<VacancyFull>(`/vacancies/${vacancyId}`, {
        method: 'GET',
        token,
    })
}

export async function applyVacancy(
    token: string,
    body: ApplyVacancyBody
): Promise<void> {
    return request<void>(`/negotiations`, {
        method: 'POST',
        token,
        body: objectToFormData(body),
        contentType: 'multipart/form-data',
    })
}

export async function getBlacklistVacancies(
    token: string
): Promise<BlacklistVacanciesResponse> {
    return request<BlacklistVacanciesResponse>(`/vacancies/blacklisted`, {
        method: 'GET',
        token,
    })
}

export async function addVacancyToBlacklist(
    token: string,
    vacancyId: string
): Promise<void> {
    return request<void>(`/vacancies/blacklisted/${vacancyId}`, {
        method: 'PUT',
        token,
    })
}

export async function removeVacancyFromBlacklist(
    token: string,
    vacancyId: string
): Promise<void> {
    return request<void>(`/vacancies/blacklisted/${vacancyId}`, {
        method: 'DELETE',
        token,
    })
}

export async function getBlacklistEmployers(
    token: string
): Promise<BlacklistEmployersResponse> {
    return request<BlacklistEmployersResponse>(`/employers/blacklisted`, {
        method: 'GET',
        token,
    })
}

export async function addEmployerToBlacklist(
    token: string,
    employerId: string
): Promise<void> {
    return request<void>(`/employers/blacklisted/${employerId}`, {
        method: 'PUT',
        token,
    })
}

export async function removeEmployerFromBlacklist(
    token: string,
    employerId: string
): Promise<void> {
    return request<void>(`/employers/blacklisted/${employerId}`, {
        method: 'DELETE',
        token,
    })
}
