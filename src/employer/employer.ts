import { request } from '../http.ts'
import {
    GetEmployerDepartmentsResponse,
    GetEmployerTestsResponse,
    GetEmployerVacancyAreasResponse,
    GetEmployerVacancyTemplatesResponse,
    GetVacanciesDraftsResponse,
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

export async function getVacanciesDrafts(
    token: string,
    draftId: string
): Promise<GetVacanciesDraftsResponse> {
    return request<GetVacanciesDraftsResponse>(`/vacancies/drafts/${draftId}`, {
        method: 'GET',
        token,
    })
}
