import { Dictionary } from '../const.ts'
export interface IdName {
    id: string
    name: string
}
export interface IdUrlName {
    id: string
    name: string
    url: string
}

export interface FileUrl {
    url: string
}
export interface Download {
    pdf: FileUrl
    rtf: FileUrl
}

export interface Photo {
    id?: string
    medium: string
    small: string
}

export interface Salary {
    amount: number | null
    currency: string | null
    title?: string | null
}

export interface TotalExperience {
    months: number | null
}
export interface AccessType {
    type: IdName
}
export interface LogoUrls {
    90?: string
    240?: string
    original: string
}

export interface Certificate {
    achieved_at: string
    owner: string | null
    title: string
    type: 'custom' | 'microsoft'
    url: string | null
}

export interface ExperienceItem {
    area: IdUrlName
    company: string | null
    company_id: string | null
    company_url: string | null
    employer: Employer | null
    end: string | null
    industries: IdName[]
    industry: IdUrlName
    position: string
    start: string
}

export interface Education {
    additional?: BaseEducation[] | null
    attestation?: BaseEducation[] | null
    elementary?: ElementaryEducation[] | null
    primary?: HigherEducation[] | null
}
export interface BaseEducation {
    id: string | null
    name: string
    organization?: string
    result?: string | null
    year: number
}
export interface ElementaryEducation extends BaseEducation {
    level: IdUrlName
}
export interface HigherEducation extends BaseEducation {
    name_id?: string | null
    organization_id?: string | null
    result_id?: string | null
    university_acronym?: string | null
    education_level: IdUrlName
}

export interface ResumeGender {
    id: Dictionary['gender'][number]['id']
    name: Dictionary['gender'][number]['name']
}

export interface ResumeHiddenFields {
    id: Dictionary['resume_hidden_fields'][number]['id']
    name: Dictionary['resume_hidden_fields'][number]['name']
}

export interface ResumeItem {
    id: string
    alternate_url: string
    created_at: string
    updated_at: string
    finished: boolean
    requires_completion: boolean
    marked: boolean
    age: number | null
    first_name: string | null
    last_name: string | null
    middle_name: string | null
    gender: ResumeGender
    photo: Photo | null
    platform: string & { real_id: string }
    salary: Salary | null
    total_experience: TotalExperience | null
    employment_form: IdName[]
    work_format: IdName[]
    access: AccessType
    status: IdName
    hidden_fields: ResumeHiddenFields[]
    actions: Download
    download: Download
    education: Education
    experience: ExperienceItem[]
    certificate: Certificate[]
    url: string
    auto_hide_time: IdUrlName | null
    can_view_full_info: boolean | null
}

export interface ResumeItemShort {
    id: string
    title: string | null
    url: string
    alternate_url: string
}

export interface ResumeItemProgress {
    mandatory: IdName[]
    recommended: IdName[]
    percentage: number
}

export interface ModerationNote extends IdName {
    field?: string
    pointer?: string
}

export interface FieldCondition {
    required?: boolean | null
    min_length?: number | null
    max_length?: number | null
    min_value?: number | null
    max_value?: number | null
    min_date?: string | null
    max_date?: string | null
    regexp?: string | null
}

export interface ListFieldCondition extends FieldCondition {
    min_count?: number | null
    max_count?: number | null
}

export interface FieldsCondition extends FieldCondition {
    fields?: Record<string, FieldCondition | FieldsCondition | null> | null
}

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
export interface Address {
    building?: string | null
    city?: string | null
    lat?: number | null
    lng?: number | null
    metro?: MetroStation | null
    raw?: string | null
    street?: string | null
    id?: string | null
}

export interface MetroStation {
    lat: number | null
    line_id: string
    line_name: string
    lng: number | null
    station_id: string
    station_name: string
}

export interface Employer {
    id?: string | null
    name: string
    trusted: boolean
    url?: string | null
    alternate_url?: string | null
    logo_urls?: Record<string, string> | null
    accredited_it_employer?: boolean
    employer_rating?: any
}

export interface Department {
    id?: string
    name: string
}

export interface ProfessionalRole {
    id: string
    name: string
}

export interface SalaryRange {
    from?: number | null
    to?: number | null
    currency: string
    gross: boolean
    frequency?: { id: string; name: string } | null
    mode?: { id: string; name: string }
}

export interface WorkFormat {
    id: string
    name: string
}

export interface WorkSchedule {
    id: Dictionary['schedule'][number]['id']
    name: Dictionary['schedule'][number]['name']
}

export interface VacancySnippet {
    show_logo_in_search?: boolean
    video?: any
    snippet_picture_url?: string | null
    snippet_video_url?: string | null
}

export interface VacancyCounters {
    responses: number
    total_responses: number
}

export interface Vacancy {
    id: string
    name: string
    alternate_url: string
    apply_alternate_url: string
    description?: string | null
    archived?: boolean | null
    accept_incomplete_resumes: boolean
    accept_temporary?: boolean | null
    address?: Address | null
    metro_stations?: MetroStation[]
    created_at?: string
    department?: Department | null
    employer?: Employer
    fly_in_fly_out_duration?: { id: string; name: string }[] | null
    has_test: boolean
    insider_interview?: { id: string; url: string } | null
    internship?: boolean | null
    night_shifts?: boolean | null
    premium?: boolean | null
    professional_roles: ProfessionalRole[]
    published_at?: string
    relations?: Array<
        | 'favorited'
        | 'got_response'
        | 'got_invitation'
        | 'got_rejection'
        | 'blacklisted'
        | null
    >
    response_letter_required: boolean
    response_url?: string | null
    salary?: SalaryRange | null
    salary_range?: SalaryRange | null
    schedule?: WorkSchedule | null
    show_contacts?: boolean | null
    sort_point_distance?: number | null
    type: { id: string; name: string }
    url: string
    work_format?: WorkFormat[] | null
    work_schedule_by_days?: WorkSchedule[] | null
    working_days?: any[] | null
    working_hours?: WorkSchedule[] | null
    working_time_intervals?: any[] | null
    working_time_modes?: any[] | null
    counters?: VacancyCounters
    snippet?: VacancySnippet
    accept_only_for_part_time?: string[]
}
