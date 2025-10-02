import { arrayToUrlSearchParams, objectToUrlSearchParams } from '../helpers.ts'
import { request } from '../http.ts'
import { Dictionary } from '../types/const.types.ts'
import {
    IdUrlName,
    VacancySearchParams,
    VacancySearchParamsOld,
} from '../types/shared.types.ts'
import {
    AppTokenResponse,
    AreaLeavesSuggestsResponse,
    AreaResponse,
    AreaSuggestsResponse,
    CompaniesSuggestsResponse,
    DictResponse,
    DistrictsResponse,
    EducationalInstitutionsResponse,
    EmployerResponse,
    EmployersResponse,
    FieldsOfStudySuggestsResponse,
    GetEmployersOptions,
    GetMeResponse,
    IndustriesResponse,
    LanguagesResponse,
    LocalesResponse,
    MetroCityResponse,
    MetroResponse,
    PositionsSuggestsResponse,
    ProfessionalRolesResponse,
    ProfessionalRolesSuggestsResponse,
    ResumeSearchKeywordSuggestsResponse,
    SalaryStatisticsAreasResponse,
    SalaryStatisticsEmployerLevelsResponse,
    SalaryStatisticsIndustriesResponse,
    SalaryStatisticsProfessionalAreasResponse,
    SkillsResponse,
    SkillsSuggestsResponse,
    UserTokenResponse,
    VacancyPositionsSuggestsResponse,
    VacancySearchKeywordSuggestsResponse,
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

export async function getResumeLocales(): Promise<DictResponse[]> {
    return request<DictResponse[]>('/locales/resume', {
        method: 'GET',
    })
}

export async function getLocales(): Promise<LocalesResponse[]> {
    return request<LocalesResponse[]>('/resume', {
        method: 'GET',
    })
}

export async function getDictionaries(): Promise<Dictionary> {
    return request<Dictionary>('/dictionaries', {
        method: 'GET',
    })
}

export async function getLanguages(): Promise<LanguagesResponse> {
    return request<LanguagesResponse>('/languages', {
        method: 'GET',
    })
}

export async function getEducationalInstitutions(
    id: string[]
): Promise<EducationalInstitutionsResponse> {
    return request<EducationalInstitutionsResponse>(
        '/educational_institutions',
        {
            method: 'GET',
            queryParams: arrayToUrlSearchParams('id', id),
        }
    )
}

export async function getSkills(id: string[]): Promise<SkillsResponse> {
    return request<SkillsResponse>('/skills', {
        method: 'GET',
        queryParams: arrayToUrlSearchParams('id', id),
    })
}

export async function getProfessionalRoles(): Promise<ProfessionalRolesResponse> {
    return request<ProfessionalRolesResponse>('/professional_roles', {
        method: 'GET',
    })
}

export async function getEducationalInstitutionsFaculties(
    id: string
): Promise<DictResponse[]> {
    return request<DictResponse[]>(
        `/educational_institutions/${id}/faculties`,
        {
            method: 'GET',
        }
    )
}

export async function getIndustries(): Promise<IndustriesResponse> {
    return request<IndustriesResponse>('/industries', {
        method: 'GET',
    })
}

export async function getDistricts(): Promise<DistrictsResponse[]> {
    return request<DistrictsResponse[]>('/districts', {
        method: 'GET',
    })
}

export async function getMetro(): Promise<MetroResponse[]> {
    return request<MetroResponse[]>('/metro', {
        method: 'GET',
    })
}

export async function getCityMetro(cityId: string): Promise<MetroCityResponse> {
    return request<MetroCityResponse>(`/metro/${cityId}`, {
        method: 'GET',
    })
}

export async function getCountries(): Promise<IdUrlName[]> {
    return request<IdUrlName[]>('/areas/countries', {
        method: 'GET',
    })
}

export async function getRegions(
    additional_case?: 'prepositional'
): Promise<AreaResponse[]> {
    return request<AreaResponse[]>('/areas', {
        method: 'GET',
        queryParams: objectToUrlSearchParams({ additional_case }),
    })
}

export async function getRegionsFromId(
    areaId: string,
    additional_case?: 'prepositional'
): Promise<AreaResponse> {
    return request<AreaResponse>(`/areas/${areaId}`, {
        method: 'GET',
        queryParams: objectToUrlSearchParams({ additional_case }),
    })
}

export async function getPositionsSuggests(
    text: string
): Promise<PositionsSuggestsResponse> {
    return request<PositionsSuggestsResponse>(`/suggests/positions`, {
        method: 'GET',
        queryParams: objectToUrlSearchParams({ text }),
    })
}

export async function getEducationalInstitutionsSuggests(
    text: string
): Promise<EducationalInstitutionsResponse> {
    return request<EducationalInstitutionsResponse>(
        `/suggests/educational_institutions`,
        {
            method: 'GET',
            queryParams: objectToUrlSearchParams({ text }),
        }
    )
}

export async function getAreaLeavesSuggests(
    text: string,
    areaId?: string
): Promise<AreaLeavesSuggestsResponse> {
    return request<AreaLeavesSuggestsResponse>(`/suggests/area_leaves`, {
        method: 'GET',
        queryParams: objectToUrlSearchParams({ text, areaId }),
    })
}

export async function getSkillsSuggests(
    text: string
): Promise<SkillsSuggestsResponse> {
    return request<SkillsSuggestsResponse>(`/suggests/skill_set`, {
        method: 'GET',
        queryParams: objectToUrlSearchParams({ text }),
    })
}

export async function getVacancyPositionsSuggests(
    text: string
): Promise<VacancyPositionsSuggestsResponse> {
    return request<VacancyPositionsSuggestsResponse>(
        `/suggests/vacancy_positions`,
        {
            method: 'GET',
            queryParams: objectToUrlSearchParams({ text }),
        }
    )
}

export async function getProfessionalRolesSuggests(
    text: string
): Promise<ProfessionalRolesSuggestsResponse> {
    return request<ProfessionalRolesSuggestsResponse>(
        `/suggests/professional_roles`,
        {
            method: 'GET',
            queryParams: objectToUrlSearchParams({ text }),
        }
    )
}

export async function getResumeSearchKeywordSuggests(
    text: string
): Promise<ResumeSearchKeywordSuggestsResponse> {
    return request<ResumeSearchKeywordSuggestsResponse>(
        `/suggests/resume_search_keyword`,
        {
            method: 'GET',
            queryParams: objectToUrlSearchParams({ text }),
        }
    )
}

export async function getAreasSuggests(
    text: string,
    areaId?: string,
    includeParent?: boolean
): Promise<AreaSuggestsResponse> {
    return request<AreaSuggestsResponse>(`/suggests/areas`, {
        method: 'GET',
        queryParams: objectToUrlSearchParams({ text, areaId, includeParent }),
    })
}

export async function getVacancySearchKeywordSuggests(
    text: string
): Promise<VacancySearchKeywordSuggestsResponse> {
    return request<VacancySearchKeywordSuggestsResponse>(
        `/suggests/vacancy_search_keyword`,
        {
            method: 'GET',
            queryParams: objectToUrlSearchParams({
                text,
            }),
        }
    )
}

export async function getFieldsOfStudySuggests(
    text: string
): Promise<FieldsOfStudySuggestsResponse> {
    return request<FieldsOfStudySuggestsResponse>(`/suggests/fields_of_study`, {
        method: 'GET',
        queryParams: objectToUrlSearchParams({
            text,
        }),
    })
}

export async function getCompaniesSuggests(
    text: string
): Promise<CompaniesSuggestsResponse> {
    return request<CompaniesSuggestsResponse>(`/suggests/companies`, {
        method: 'GET',
        queryParams: objectToUrlSearchParams({
            text,
        }),
    })
}

export async function getEmployer(
    employerId: string
): Promise<EmployerResponse> {
    return request<EmployerResponse>(`/employers/${employerId}`, {
        method: 'GET',
    })
}

export async function getEmployers(
    options: Partial<GetEmployersOptions>
): Promise<EmployersResponse> {
    return request<EmployersResponse>(`/employers`, {
        method: 'GET',
        queryParams: objectToUrlSearchParams(options),
    })
}

export async function getSalaryStatisticsEmployerLevels(): Promise<
    SalaryStatisticsEmployerLevelsResponse[]
> {
    return request<SalaryStatisticsEmployerLevelsResponse[]>(
        `/salary_statistics/dictionaries/employee_levels`,
        {
            method: 'GET',
        }
    )
}

export async function getSalaryStatisticsAreas(): Promise<
    SalaryStatisticsAreasResponse[]
> {
    return request<SalaryStatisticsAreasResponse[]>(
        `/salary_statistics/dictionaries/salary_areas`,
        {
            method: 'GET',
        }
    )
}

export async function getSalaryStatisticsProfessionalAreas(): Promise<
    SalaryStatisticsProfessionalAreasResponse[]
> {
    return request<SalaryStatisticsProfessionalAreasResponse[]>(
        `/salary_statistics/dictionaries/professional_areas`,
        {
            method: 'GET',
        }
    )
}

export async function getSalaryStatisticsIndustries(): Promise<
    SalaryStatisticsIndustriesResponse[]
> {
    return request<SalaryStatisticsIndustriesResponse[]>(
        `/salary_statistics/dictionaries/salary_industries`,
        {
            method: 'GET',
        }
    )
}

export async function getMe(token: string): Promise<GetMeResponse> {
    return request<GetMeResponse>(`/me`, {
        method: 'GET',
        token,
    })
}
