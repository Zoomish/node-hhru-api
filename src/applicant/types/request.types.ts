import { Dictionary } from '../../types/const.ts'
import { Id } from './types.type.ts'

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

export interface ResumeVisibilitySearchParams {
    text: string
    per_page?: number
    page?: number
    locale?: string
    host?: string
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
