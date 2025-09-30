import { Dictionary } from './const.ts'

export interface Id {
    id: string
}
export interface IdName extends Id {
    name: string
}
export interface IdUrlName extends IdName {
    url: string
}
export type Pagination<T> = {
    found: number
    page: number
    pages: number
    per_page: number
    items: T[]
}

export type PaginationRequest = {
    page: number
    per_page: number
}

export type LngLat = {
    lng: number
    lat: number
}

export interface Cluster extends IdName {
    items: ClusterItem[]
}
interface ClusterItem {
    count: number
    name: string
    type: 'metro_station' | 'metro_line'
    url: string
    metro_line?: MetroLine
    metro_station?: MetroStation
}

export interface MetroLine extends IdName {
    hex_color: string
    area: IdUrlName
}

export interface MetroStation extends LngLat {
    line_id: string
    line_name: string
    station_id: string
    station_name: string
    area: IdUrlName
}

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

export interface VacancySearchParamsOld {
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

export interface Argument {
    argument: string
    cluster_group: IdName
    disable_url: string
    hex_color: string | null
    metro_type: string | null
    name: string | null
    value: string
    value_description: string | null
}



export interface Fixes {
    fixed: string
    original: string
}

export interface Suggests {
    found: number
    value: string
}
