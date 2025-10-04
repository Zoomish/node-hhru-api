import { request } from '../http.ts'
import {
    GetEmployerDepartmentsResponse,
    GetEmployerTestsResponse,
    GetEmployerVacancyAreasResponse,
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
