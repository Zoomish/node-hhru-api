import { GetMeResponse } from '../common/types/responses.types.ts'
import {
    arrayToUrlSearchParams,
    objectToFormData,
    objectToUrlSearchParams,
} from '../helpers.ts'
import { request } from '../http.ts'
import { VacancyFull } from '../types/shared.types.ts'
import {
    AddEmployersToVisibilityListBody,
    ApplyVacancyBody,
    BlacklistEmployersResponse,
    BlacklistVacanciesResponse,
    CreatePortfolioBody,
    CreatePortfolioResponse,
    CreateResumeProfileBody,
    CreateSavedSearchParams,
    FavoritedVacanciesResponse,
    GetNegotiationsQuery,
    MyResumeItemsResponse,
    NegotiationsMessageResponse,
    NegotiationsMessagesResponse,
    NegotiationsSendMessageResponse,
    NegotiationsSuccessResponse,
    PhoneConfirmationBody,
    PhoneInfoResponse,
    PhoneSendCodeResponse,
    PhotoResponse,
    PortfolioConditionsResponse,
    PortfolioResponse,
    ResumeAccessTypeResponse,
    ResumeConditions,
    ResumeItemByStatusResponse,
    ResumeItemCreationAvailability,
    ResumeItemFull,
    ResumeItemStatusResponse,
    ResumeItemViewsResponse,
    ResumeProfileDictResponse,
    ResumeProfileResponse,
    ResumeVisibilityListResponse,
    ResumeVisibilityListType,
    ResumeVisibilitySearchParams,
    ResumeVisibilitySearchResponse,
    SavedSearchByIdResponse,
    SavedSearchesResponse,
    SuitableResumeItemsResponse,
    UpdateMeBody,
    UpdatePortfolioBody,
    UpdateResumeProfileBody,
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

export async function getFavouritesVacancies(
    token: string
): Promise<FavoritedVacanciesResponse> {
    return request<FavoritedVacanciesResponse>(`/vacancies/favorited`, {
        method: 'GET',
        token,
    })
}

export async function addVacancyToFavourites(
    token: string,
    vacancyId: string
): Promise<void> {
    return request<void>(`/vacancies/favorited/${vacancyId}`, {
        method: 'PUT',
        token,
    })
}

export async function removeVacancyFromFavourites(
    token: string,
    vacancyId: string
): Promise<void> {
    return request<void>(`/vacancies/favorited/${vacancyId}`, {
        method: 'DELETE',
        token,
    })
}

export async function getSavedSearches(
    token: string,
    page: number,
    per_page: number
): Promise<SavedSearchesResponse> {
    return request<SavedSearchesResponse>(`/saved_searches/vacancies`, {
        method: 'GET',
        token,
        queryParams: objectToUrlSearchParams({ page, per_page }),
    })
}

export async function createSavedSearch(
    token: string,
    options?: Partial<CreateSavedSearchParams>
): Promise<void> {
    return request<void>(`/saved_searches/vacancies`, {
        method: 'POST',
        token,
        queryParams: objectToUrlSearchParams(options),
    })
}

export async function getSavedSearch(
    token: string,
    id: string
): Promise<SavedSearchByIdResponse> {
    return request<SavedSearchByIdResponse>(`/saved_searches/vacancies/${id}`, {
        method: 'GET',
        token,
    })
}

export async function updateSavedSearch(
    token: string,
    id: string,
    name?: string,
    subscription?: boolean
): Promise<void> {
    return request<void>(`/saved_searches/vacancies/${id}`, {
        method: 'PUT',
        token,
        queryParams: objectToUrlSearchParams({ name, subscription }),
    })
}

export async function deleteSavedSearch(
    token: string,
    id: string
): Promise<void> {
    return request<void>(`/saved_searches/vacancies/${id}`, {
        method: 'DELETE',
        token,
    })
}

export async function updateMe(
    token: string,
    body: UpdateMeBody
): Promise<GetMeResponse> {
    return request<GetMeResponse>(`/me`, {
        method: 'POST',
        token,
        body: objectToUrlSearchParams(body),
        contentType: 'application/x-www-form-urlencoded',
    })
}

export async function getPortfolioConditions(
    token: string
): Promise<PortfolioConditionsResponse> {
    return request<PortfolioConditionsResponse>(
        `/artifacts/portfolio/conditions`,
        {
            method: 'GET',
            token,
        }
    )
}

export async function getPortfolio(token: string): Promise<PortfolioResponse> {
    return request<PortfolioResponse>(`/artifacts/portfolio`, {
        method: 'GET',
        token,
    })
}

export async function updatePortfolio(
    token: string,
    id: string,
    body: UpdatePortfolioBody
): Promise<void> {
    return request<void>(`/artifacts/${id}`, {
        method: 'POST',
        token,
        body: objectToFormData(body),
        contentType: 'multipart/form-data',
    })
}

export async function deletePortfolio(
    token: string,
    id: string
): Promise<void> {
    return request<void>(`/artifacts/${id}`, {
        method: 'DELETE',
        token,
    })
}

export async function createPortfolio(
    token: string,
    body: CreatePortfolioBody
): Promise<CreatePortfolioResponse> {
    return request<CreatePortfolioResponse>(`/artifacts`, {
        method: 'POST',
        token,
        body: objectToFormData(body),
        contentType: 'multipart/form-data',
    })
}

export async function getPhotoConditions(
    token: string
): Promise<PortfolioConditionsResponse> {
    return request<PortfolioConditionsResponse>(`/artifacts/photo/conditions`, {
        method: 'GET',
        token,
    })
}

export async function getPhoto(token: string): Promise<PhotoResponse> {
    return request<PhotoResponse>(`/artifacts/photo`, {
        method: 'POST',
        token,
    })
}

export async function getResumeProfile(
    token: string,
    resumeId: string
): Promise<ResumeProfileResponse> {
    return request<ResumeProfileResponse>(`/resume_profile/${resumeId}`, {
        method: 'GET',
        token,
    })
}

export async function updateResumeProfile(
    token: string,
    resumeId: string,
    body: UpdateResumeProfileBody
): Promise<ResumeProfileResponse> {
    return request<ResumeProfileResponse>(`/resume_profile/${resumeId}`, {
        method: 'PUT',
        token,
        body,
    })
}

export async function createResumeProfile(
    token: string,
    resumeId: string,
    body?: Partial<CreateResumeProfileBody>
): Promise<ResumeProfileResponse> {
    return request<ResumeProfileResponse>(`/resume_profile/${resumeId}`, {
        method: 'POST',
        token,
        body,
    })
}

export async function getResumeProfileDict(
    token: string
): Promise<ResumeProfileDictResponse> {
    return request<ResumeProfileDictResponse>(`/resume_profile/dictionaries`, {
        method: 'GET',
        token,
    })
}

export async function getNegotiations(
    token: string,
    query?: Partial<GetNegotiationsQuery>
): Promise<NegotiationsSuccessResponse> {
    return request<NegotiationsSuccessResponse>(`/negotiations`, {
        method: 'GET',
        token,
        queryParams: objectToUrlSearchParams(query),
    })
}

export async function updateNegotiationMessage(
    token: string,
    nid: string,
    mid: string
): Promise<void> {
    return request<void>(`/negotiations/${nid}/messages/${mid}`, {
        method: 'PUT',
        token,
    })
}

export async function deleteNegotiation(
    token: string,
    nid: string,
    with_decline_message: boolean
): Promise<void> {
    return request<void>(`/negotiations/active/${nid}`, {
        method: 'DELETE',
        token,
        queryParams: objectToUrlSearchParams({ with_decline_message }),
    })
}

export async function getNegotiationMessage(
    token: string,
    id: string
): Promise<NegotiationsMessageResponse> {
    return request<NegotiationsMessageResponse>(`/negotiations/${id}`, {
        method: 'GET',
        token,
    })
}

export async function createNegotiationMessage(
    token: string,
    nid: string,
    message: string
): Promise<NegotiationsSendMessageResponse> {
    return request<NegotiationsSendMessageResponse>(
        `/negotiations/${nid}/messages`,
        {
            method: 'POST',
            token,
            body: objectToUrlSearchParams({ message }),
            contentType: 'application/x-www-form-urlencoded',
        }
    )
}

export async function getNegotiationMessages(
    token: string,
    nid: string,
    with_text_only: boolean
): Promise<NegotiationsMessagesResponse> {
    return request<NegotiationsMessagesResponse>(
        `/negotiations/${nid}/messages`,
        {
            method: 'GET',
            token,
            queryParams: objectToUrlSearchParams({ with_text_only }),
        }
    )
}
