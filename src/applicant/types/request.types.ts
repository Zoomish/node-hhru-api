import { Dictionary, LngLat, PaginationRequest } from '../../types/const.ts'
import {
    AdditionalProperties,
    Id,
    Profile,
    ResumeItemMiddle,
    UpdateMeFIO,
    UpdateMeInSearch,
} from './types.type.ts'

export interface SimilarVacancySearchParams {
    page: number
    per_page: number
    text: string
    search_field:
        | Dictionary['vacancy_search_fields'][number]['id']
        | Dictionary['vacancy_search_fields'][number]['id'][]
    experience:
        | Dictionary['experience'][number]['id']
        | Dictionary['experience'][number]['id'][]
    employment:
        | Dictionary['employment'][number]['id']
        | Dictionary['employment'][number]['id'][]
    schedule:
        | Dictionary['schedule'][number]['id']
        | Dictionary['schedule'][number]['id'][]
    area: string | string[]
    metro: string | string[]
    professional_role: string
    industry: string | string[]
    employer_id: string | string[]
    excluded_employer_id: string | string[]
    currency: Dictionary['currency'][number]['code']
    salary: number
    label:
        | Dictionary['vacancy_label'][number]['id']
        | Dictionary['vacancy_label'][number]['id'][]
    only_with_salary: boolean
    period: number
    date_from: string
    date_to: string
    top_lat: number
    bottom_lat: number
    left_lng: number
    right_lng: number
    order_by: Dictionary['vacancy_search_order'][number]['id']
    sort_point_lat: number
    sort_point_lng: number
    clusters: boolean
    describe_arguments: boolean
    no_magic: boolean
    premium: boolean
    responses_count_enabled: boolean
    part_time: PartTime | PartTime[]
}
type PartTime =
    | Dictionary['working_days'][number]['id']
    | Dictionary['working_time_intervals'][number]['id']
    | Dictionary['working_time_modes'][number]['id']
    | 'part'
    | 'project'
    | 'accept_temporary'

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

export interface CreateSavedSearchParams extends SimilarVacancySearchParams {}

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
