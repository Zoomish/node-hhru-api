import {
    Argument,
    Cluster,
    Employer,
    FieldCondition,
    FieldsCondition,
    Fixes,
    IdName,
    ListFieldCondition,
    ModerationNote,
    ResumeItem,
    ResumeItemMiddle,
    ResumeItemProgress,
    ResumeItemShort,
    Suggests,
    Vacancy,
} from './index.ts'

export interface PhoneConfirmationBody {
    phone: string
    confirmation_code: string
}
export interface PhoneInfoResponse {
    phone: {
        city: string
        country: string
        formatted: string
        need_verification: boolean
        number: string
        restricted_country: boolean
        verified: boolean
    }
}
export interface PhoneSendCodeResponse {
    can_request_code_again_in: number
    code_length: number
    notification_type: string
}

export interface ResumeItemCreationAvailability {
    created: number
    is_creation_available: boolean
    max: number
    remaining: number
}

export interface ResumeItemByStatusResponse {
    already_applied: ResumeItem[]
    not_published: ResumeItem[]
    suitable: ResumeItem[]
    unavailable: ResumeItem[]
    counters: CounterResume
}
export type CounterResume = Record<
    'already_applied' | 'not_published' | 'suitable' | 'unavailable',
    number
>

export interface ResumeItemStatusResponse {
    blocked: boolean
    can_publish_or_update: boolean | null
    finished: boolean
    status: IdName
    moderation_note: ModerationNote[]
    progress: ResumeItemProgress
    publish_url: string
}

export interface MyResumeItemsResponse {
    found: number
    page: number
    pages: number
    per_page: number
    items: ResumeItemMiddle[]
}

export interface ResumeItemOverall {
    already_applied: number
    not_published: number
    unavailable: number
}

export interface SuitableResumeItemsResponse {
    found: number
    page: number
    pages: number
    per_page: number
    items: ResumeItemMiddle[]
    overall: ResumeItemOverall
}

export interface ResumeItemViewsResponse {
    found: number
    page: number
    pages: number
    per_page: number
    items: ResumeItemViewItem[]
    ResumeItem: ResumeItemShort
}

export interface ResumeItemViewItem {
    created_at: string
    employer: Employer
    viewed: boolean
    ResumeItem: ResumeItemShort
}

export interface ResumeConditions {
    access?: FieldsCondition | null
    area?: FieldCondition | null
    auto_hide_time?: FieldCondition | null
    birth_date?: FieldCondition | null
    business_trip_readiness?: FieldCondition | null
    citizenship?: ListFieldCondition | null
    contact?: FieldsCondition | null
    district?: FieldCondition | null
    driver_license_types?: ListFieldCondition | null
    education?: FieldsCondition | null
    employments?: ListFieldCondition | null
    experience?: FieldsCondition | null
    first_name?: FieldCondition | null
    gender?: FieldCondition | null
    has_vehicle?: FieldCondition | null
    hidden_fields?: ListFieldCondition | null
    language?: FieldsCondition | null
    last_name?: FieldCondition | null
    middle_name?: FieldCondition | null
    metro?: FieldCondition | null
    nationality?: ListFieldCondition | null
    position?: FieldCondition | null
    preferred_contact?: ListFieldCondition | null
    relocation?: FieldsCondition | null
    salary?: FieldsCondition | null
    schedules?: ListFieldCondition | null
    site?: ListFieldCondition | null
    skills?: FieldCondition | null
    summary?: FieldCondition | null
    title?: FieldCondition | null
    travel_time?: FieldCondition | null
    work_ticket?: ListFieldCondition | null
    work_formats?: ListFieldCondition | null
}

export interface SimilarVacanciesResponse {
    found: number
    page: number
    pages: number
    per_page: number
    items: Vacancy[]
    clusters?: Cluster[] | null
    arguments?: Argument[] | null
    fixes?: Fixes | null
    suggests?: Suggests | null
}
