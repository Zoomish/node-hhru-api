import {
    Employer,
    ExperienceItem,
    IdName,
    IdUrlName,
    ModerationNote,
    ResumeItem,
    ResumeItemProgress,
    ResumeItemShort,
} from './types.ts'

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
    counters: Counters
}
export type Counters = Record<
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
    items: ResumeItem[]
}

export interface ResumeItemOverall {
    already_applied: number
    not_published: number
    unavailable: number
}

export interface SuitableResumeItem
    extends Omit<ResumeItem, 'total_experience' | 'auto_hide_time'> {
    area: IdUrlName
    auto_hide_time: IdName
    real_id: string
    total_experience: ExperienceItem | null
}

export interface SuitableResumeItemsResponse {
    found: number
    page: number
    pages: number
    per_page: number
    items: SuitableResumeItem[]
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
    employer: Employer | { name: string }
    viewed: boolean
    ResumeItem: ResumeItemShort
}
