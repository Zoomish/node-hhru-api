import { Dictionary } from '../../types/const.ts'

export interface VacancySearchParams {
    page: number
    per_page: number
    text: string
    search_field:
        | Dictionary['vacancy_search_fields'][number]['id']
        | Dictionary['vacancy_search_fields'][number]['id'][]
    experience:
        | Dictionary['experience'][number]['id']
        | Dictionary['experience'][number]['id'][]
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
    accept_temporary: boolean
    employment_form: Dictionary['employment_form'][number]['id']
    work_schedule_by_days: Dictionary['work_schedule_by_days'][number]['id']
    working_hours: Dictionary['working_hours'][number]['id']
    work_format: Dictionary['work_format'][number]['id']
    excluded_text: string
    education: 'not_required_or_not_specified' | 'special_secondary' | 'higher'
}
