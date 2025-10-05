import {
    Argument,
    Cluster,
    Employer,
    Fixes,
    IdName,
    IdUrlName,
    Pagination,
    Suggests,
    Vacancy,
    VacancyShort,
} from '../../types/shared.types.ts'
import {
    AdditionalProperties,
    EmployerBlacklisted,
    EmployerResumeVisibility,
    FieldCondition,
    FieldsCondition,
    ListFieldCondition,
    ModerationNote,
    Negotiation,
    NegotiationMessage,
    NegotiationMessageWithAssessment,
    PortfolioConditions,
    Profile,
    ResumeAccessTypeFull,
    ResumeCreds,
    ResumeItem,
    ResumeItemMiddle,
    ResumeItemProgress,
    ResumeItemShort,
    ResumeShort,
    SavedSearch,
    ScreenProfile,
    SkillsWithLevel,
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

export interface SuitableResumeItemsResponse
    extends Pagination<ResumeItemMiddle> {
    overall: ResumeItemOverall
}

export interface ResumeItemViewsResponse
    extends Pagination<ResumeItemViewItem> {
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

export interface SimilarVacanciesResponse extends Pagination<Vacancy> {
    clusters?: Cluster[] | null
    arguments?: Argument[] | null
    fixes?: Fixes | null
    suggests?: Suggests | null
}

export interface ResumeAccessTypeResponse {
    auto_hide_time_options: IdUrlName[]
    items: ResumeAccessTypeFull[]
}

export interface ResumeVisibilitySearchResponse
    extends Pagination<EmployerResumeVisibility> {}

export interface ResumeVisibilityListResponse extends Pagination<Employer> {
    limit: number
}

export interface BlacklistVacanciesResponse extends Pagination<VacancyShort> {
    limit_reached: boolean
}

export interface FavoritedVacanciesResponse
    extends BlacklistVacanciesResponse {}

export interface BlacklistEmployersResponse
    extends Pagination<EmployerBlacklisted> {
    limit_reached: boolean
}

export interface SavedSearchesResponse extends Pagination<SavedSearch> {}

export interface SavedSearchByIdResponse extends SavedSearch {}

export interface PortfolioConditionsResponse extends PortfolioConditions {}

export interface CreatePortfolioResponse {
    id: string
    medium: string | null
    small: string | null
    state: CreatePortfolioState
}

interface CreatePortfolioState {
    id: 'processing' | 'failed' | 'ok'
    name: string
}

export interface PortfolioResponse extends Pagination<PortfolioResponseItem> {}

interface PortfolioResponseItem extends CreatePortfolioResponse {
    description: string
}

export interface PhotoResponse extends Pagination<CreatePortfolioResponse> {}

export interface ResumeProfileResponse {
    additional_properties: AdditionalProperties
    conditions: ResumeConditions
    creds: ResumeCreds
    next_incomplete_screen_id: string | null
    profile: Profile
    profile_conditions: ResumeConditions
    resume: ResumeItemMiddle
    resumes: ResumesItem
    screens: ScreenProfile
    skills_with_levels: SkillsWithLevel[]
}

interface ResumesItem {
    conditions: ResumeConditions
    resume: ResumeShort
}

export interface ResumeProfileDictResponse {
    resume_any_job_titles: Items
    resume_default_titles: Items
    resume_popular_titles: Items
    resume_profile_communication_methods: Items
}

interface Items {
    items: RoleId
}

interface RoleId {
    name: string
    role_ids?: string[] | null
}

export interface NegotiationsSuccessResponse extends Pagination<Negotiation> {}

export interface NegotiationsMessageResponse extends Negotiation {}

export interface NegotiationsSendMessageResponse extends NegotiationMessage {}

export interface NegotiationsMessagesResponse
    extends Pagination<NegotiationMessageWithAssessment> {}
