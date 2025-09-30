import { objectToUrlSearchParams } from '../helpers.ts'
import { request } from '../http.ts'
import {
    VacancySearchParams,
    VacancySearchParamsOld,
} from '../types/shared.types.ts'
import {
    AppTokenResponse,
    UserTokenResponse,
    VacancySearchResponse,
} from './types/index.ts'

export async function getAppToken(
    clientId: string,
    clientSecret: string
): Promise<AppTokenResponse> {
    return request<AppTokenResponse>('/oauth/token', {
        method: 'POST',
        body: new URLSearchParams({
            grant_type: 'client_credentials',
            client_id: clientId,
            client_secret: clientSecret,
        }),
        contentType: 'application/x-www-form-urlencoded',
        oldAddress: true,
    })
}

export async function getUserToken(
    clientId: string,
    clientSecret: string,
    code: string,
    redirectUri?: string
): Promise<UserTokenResponse> {
    return request<UserTokenResponse>('/oauth/token', {
        method: 'POST',
        body: new URLSearchParams({
            grant_type: 'authorization_code',
            client_id: clientId,
            client_secret: clientSecret,
            code,
            redirect_uri: redirectUri ?? '',
        }).toString(),
        contentType: 'application/x-www-form-urlencoded',
        oldAddress: true,
    })
}

export async function refreshUserToken(
    clientId: string,
    clientSecret: string,
    refreshToken: string
): Promise<UserTokenResponse> {
    return request<UserTokenResponse>('/oauth/token', {
        method: 'POST',
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            client_id: clientId,
            client_secret: clientSecret,
            refresh_token: refreshToken,
        }).toString(),
        contentType: 'application/x-www-form-urlencoded',
        oldAddress: true,
    })
}

export async function searchVacancies(
    token: string,
    query?: Partial<VacancySearchParams>
): Promise<VacancySearchResponse> {
    return request<VacancySearchResponse>('/vacancies', {
        method: 'GET',
        token,
        queryParams: objectToUrlSearchParams(query),
    })
}

export async function searchSuitableVacancies(
    token: string,
    vacancyId: string,
    query?: Partial<VacancySearchParamsOld>
): Promise<VacancySearchResponse> {
    return request<VacancySearchResponse>(
        `/vacancies/${vacancyId}/related_vacancies`,
        {
            method: 'GET',
            token,
            queryParams: objectToUrlSearchParams(query),
        }
    )
}

export async function searchSimilarVacancies(
    token: string,
    vacancyId: string,
    query?: Partial<VacancySearchParamsOld>
): Promise<VacancySearchResponse> {
    return request<VacancySearchResponse>(
        `/vacancies/${vacancyId}/similar_vacancies`,
        {
            method: 'GET',
            token,
            queryParams: objectToUrlSearchParams(query),
        }
    )
}
