import { objectToUrlSearchParams } from '../helpers.ts'
import { request } from '../http.ts'
import { UpdateVacanciesDraftsBody } from './types/request.types.ts'
import {
    CreateVacanciesDraftsResponse,
    GetEmployerDepartmentsResponse,
    GetEmployerTestsResponse,
    GetEmployerVacancyAreasResponse,
    GetEmployerVacancyTemplatesResponse,
    GetVacanciesDraftsDuplicatesResponse,
    GetVacanciesDraftsResponse,
    GetVacancyDraftsResponse,
    PublishVacanciesByDraftsResponse,
    UpdateVacanciesDraftsResponse,
} from './types/responses.types.ts'

export async function getEmployerTests(
    token: string,
    employerId: string
): Promise<GetEmployerTestsResponse> {
    return request<GetEmployerTestsResponse>(`/employers/${employerId}/tests`, {
        method: 'GET',
        token,
    })
}

export async function getEmployerVacancyAreas(
    token: string,
    employerId: string
): Promise<GetEmployerVacancyAreasResponse> {
    return request<GetEmployerVacancyAreasResponse>(
        `/employers/${employerId}/vacancy_areas/active`,
        {
            method: 'GET',
            token,
        }
    )
}

export async function getEmployerDepartments(
    token: string,
    employerId: string
): Promise<GetEmployerDepartmentsResponse> {
    return request<GetEmployerDepartmentsResponse>(
        `/employers/${employerId}/departments`,
        {
            method: 'GET',
            token,
        }
    )
}

export async function getEmployerVacancyTemplates(
    token: string,
    employerId: string
): Promise<GetEmployerVacancyTemplatesResponse> {
    return request<GetEmployerVacancyTemplatesResponse>(
        `/employers/${employerId}/vacancy_branded_templates`,
        {
            method: 'GET',
            token,
        }
    )
}

export async function getVacancyDrafts(
    token: string,
    draftId: string
): Promise<GetVacancyDraftsResponse> {
    return request<GetVacancyDraftsResponse>(`/vacancies/drafts/${draftId}`, {
        method: 'GET',
        token,
    })
}

export async function updateVacancyDrafts(
    token: string,
    draftId: string,
    body: Partial<UpdateVacanciesDraftsBody>
): Promise<UpdateVacanciesDraftsResponse> {
    return request<UpdateVacanciesDraftsResponse>(
        `/vacancies/drafts/${draftId}`,
        {
            method: 'PUT',
            token,
            body,
        }
    )
}

export async function deleteVacancyDrafts(
    token: string,
    draftId: string
): Promise<void> {
    return request<void>(`/vacancies/drafts/${draftId}`, {
        method: 'DELETE',
        token,
    })
}

export async function publishVacancyByDrafts(
    token: string,
    draftId: string
): Promise<PublishVacanciesByDraftsResponse> {
    return request<PublishVacanciesByDraftsResponse>(
        `/vacancies/drafts/${draftId}/publish`,
        {
            method: 'POST',
            token,
        }
    )
}

export async function getVacanciesDraftsDuplicates(
    token: string,
    draftId: string
): Promise<GetVacanciesDraftsDuplicatesResponse> {
    return request<GetVacanciesDraftsDuplicatesResponse>(
        `/vacancies/drafts/${draftId}/duplicates`,
        {
            method: 'GET',
            token,
        }
    )
}

export async function createVacancyDrafts(
    token: string,
    body: Partial<UpdateVacanciesDraftsBody>
): Promise<CreateVacanciesDraftsResponse> {
    return request<CreateVacanciesDraftsResponse>(`/vacancies/drafts`, {
        method: 'POST',
        token,
        body,
    })
}

export async function getVacanciesDrafts(
    token: string,
    page: number,
    per_page: number
): Promise<GetVacanciesDraftsResponse> {
    return request<GetVacanciesDraftsResponse>(`/vacancies/drafts`, {
        method: 'GET',
        token,
        queryParams: objectToUrlSearchParams({ page, per_page }),
    })
}

export async function deleteVacancyAutoPublish(
    token: string,
    draftId: string
): Promise<void> {
    return request<void>(`/vacancies/auto_publication`, {
        method: 'DELETE',
        token,
        queryParams: objectToUrlSearchParams({ draft_id: draftId }),
    })
}
