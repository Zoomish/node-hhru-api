import { Dictionary } from '../../types/const.types.ts'
import {
    Id,
    LngLat,
    PaginationRequest,
    VacancySearchParamsOld,
} from '../../types/shared.types.ts'
import {
    AdditionalProperties,
    Profile,
    ResumeItemMiddle,
    UpdateMeFIO,
    UpdateMeInSearch,
} from './types.types.ts'

export interface ResumeVisibilitySearchParams extends PaginationRequest {
    text: string
}

export type ResumeVisibilityListType = 'whitelist' | 'blacklist'

export interface AddEmployersToVisibilityListBody {
    items: Id[]
}

export interface ApplyVacancyBody {
    message?: string
    resume_id: string
    vacancy_id: string
}

export interface CreateSavedSearchParams extends VacancySearchParamsOld {}

export type UpdateMeBody = UpdateMeFIO | UpdateMeInSearch

export interface UpdatePortfolioBody {
    description: string
}

export interface CreatePortfolioBody {
    description?: string
    file: string
    type: 'photo' | 'portfolio'
}

export interface UpdateResumeProfileBody {
    additional_properties?: Partial<AdditionalProperties>
    creds?: Creds
    current_screen_id: string
    profile?: Partial<Profile>
    resume?: Partial<ResumeItemMiddle>
}

interface Creds {
    question_to_answer_map: { [key: string]: string[] }
}

export interface CreateResumeProfileBody extends LngLat {
    entry_point:
        | 'default'
        | 'vacancy_response'
        | 'onboarding_short'
        | 'onboarding_area_creds'
    vacancy_id: number
    additional_properties: Partial<AdditionalProperties>
    clone_resume_id: string
    update_profile: boolean
}

export interface GetNegotiationsQuery extends PaginationRequest {
    order_by: Dictionary['negotiations_order'][number]['id']
    order: 'asc' | 'desc'
    vacancy_id: string
    status: Dictionary['applicant_negotiation_status'][number]['id']
    has_updates: boolean
    with_job_search_status: boolean
    with_generated_collections: boolean
}
