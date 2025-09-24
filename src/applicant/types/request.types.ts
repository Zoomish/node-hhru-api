export interface SimilarVacancySearchParams {
    page?: number
    per_page?: number
    text?: string
    search_field?: string | string[]
    experience?: string | string[]
    employment?: string | string[]
    schedule?: string | string[]
    area?: string | string[]
    metro?: string | string[]
    professional_role?: string
    industry?: string | string[]
    employer_id?: string | string[]
    excluded_employer_id?: string | string[]
    currency?: string
    salary?: number
    label?: string | string[]
    only_with_salary?: boolean
    period?: number
    date_from?: string
    date_to?: string
    top_lat?: number
    bottom_lat?: number
    left_lng?: number
    right_lng?: number
    order_by?: string
    sort_point_lat?: number
    sort_point_lng?: number
    clusters?: boolean
    describe_arguments?: boolean
    no_magic?: boolean
    premium?: boolean
    responses_count_enabled?: boolean
    part_time?: string | string[]
    locale?: string
    host?: string
}
export interface ResumeVisibilitySearchParams {
    text: string
    per_page?: number
    page?: number
    locale?: string
    host?: string
}

export type ResumeVisibilityListType = 'whitelist' | 'blacklist'
