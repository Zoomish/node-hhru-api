import {
    Dictionary,
    Locales,
    NegotiationSource,
    ParticipantType,
} from '../../types/const.types.ts'
import {
    Address,
    DriverLicenseTypes,
    Employer,
    EmploymentForm,
    Id,
    IdName,
    IdUrlName,
    Language,
    LngLat,
    MetroLine,
    VacancyShort,
    WorkFormat,
} from '../../types/shared.types.ts'

interface FileUrl {
    url: string
}
interface Download {
    pdf: FileUrl
    rtf: FileUrl
}

interface Photo {
    id?: string
    medium: string
    small: string
}

interface Salary {
    amount: number | null
    currency: Dictionary['currency'][number]['code'] | null
    title?: string | null
}

interface TotalExperience {
    months: number | null
}
interface ResumeAccessType {
    id: Dictionary['resume_access_type'][number]['id']
    name: Dictionary['resume_access_type'][number]['name']
}
interface AccessType {
    type: ResumeAccessType
}

interface Certificate {
    achieved_at: string
    owner: string | null
    title: string
    type: 'custom' | 'microsoft'
    url: string | null
}

interface ExperienceItem {
    area: IdUrlName
    company?: string | null
    company_id?: string | null
    company_url?: string | null
    employer?: Employer | null
    end: string | null
    industries: IdName[]
    industry: IdUrlName
    position: string
    start: string
}

interface Education {
    additional?: BaseEducation[] | null
    attestation?: BaseEducation[] | null
    elementary?: ElementaryEducation[] | null
    primary?: HigherEducation[] | null
    level: IdName
}

interface BaseEducation {
    id: string | null
    name: string
    organization?: string
    result?: string | null
    year: number
}
interface ElementaryEducation extends BaseEducation {
    level: IdUrlName
}
interface HigherEducation extends BaseEducation {
    name_id?: string | null
    organization_id?: string | null
    result_id?: string | null
    university_acronym?: string | null
    education_level: IdUrlName
}

interface Gender {
    id: Dictionary['gender'][number]['id']
    name: Dictionary['gender'][number]['name']
}

interface ResumeHiddenFields {
    id: Dictionary['resume_hidden_fields'][number]['id']
    name: Dictionary['resume_hidden_fields'][number]['name']
}
interface PaidServices extends IdName {
    active?: boolean
    expires?: string
}

interface ContactInfo {
    comment?: string | null
    contact_value: string | null
    kind: string
    links: {
        android: string
        ios: string
        web: string
    } | null
    need_verification: boolean | null
    preferred: boolean
    type: IdName
    verified: boolean
}

interface SimilarVacancies {
    counters: Counters
    url: string
}
interface BusinessTripReadiness {
    id: Dictionary['business_trip_readiness'][number]['id']
    name: Dictionary['business_trip_readiness'][number]['name']
}

interface Employments {
    id: Dictionary['employment'][number]['id']
    name: Dictionary['employment'][number]['name']
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
    gender: Gender
    photo: Photo | null
    platform: string
    salary: Salary | null
    total_experience: TotalExperience | null
    area: IdUrlName
    employment_form: EmploymentForm[]
    work_format: WorkFormat[]
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

export interface ResumeItemMiddle extends ResumeItem {
    new_views: number
    next_publish_at: string | null
    real_id: string
    blocked: boolean
    can_publish_or_update: boolean | null
    paid_services: PaidServices[]
    total_views: number
    views_url: string
    contact: ContactInfo[]
    similar_vacancies: SimilarVacancies
    tags: {
        id: string
    }[]
}

export interface ResumeItemFull extends ResumeItemMiddle {
    business_trip_readiness: BusinessTripReadiness
    citizenship: IdUrlName[]
    driver_license_types: DriverLicenseTypes[]
    employments: Employments
    has_vehicle: boolean
    language: Language[]
    metro: MetroStationResume
    recommendation: Recommendation[]
    relocation: Relocation
    resume_locale: Locale
    schedules: Schedule[]
    site: ResumeSite[]
    skill_set: string[]
    skills: string[]
    travel_time: TravelTime
    work_ticket: IdUrlName
    contacts_open_until_date: string | null
    favorited: boolean
    job_search_status: JobSearchStatus
    negotiations_history: NegotiationsHistory
    owner: Owner
    portfolio: Portfolio
    view_without_contacts_reason: string | null
}

export interface ResumeItemShort extends Omit<IdUrlName, 'name'> {
    title: string | null
    alternate_url: string
}

export interface ResumeShort extends Id {
    photo: Photo | null
    status: IdName
    title: string
}

interface Portfolio {
    description: string
    medium: string
    small: string
}
interface Owner {
    id: string
    comments: Comments
}
interface Comments {
    url: string
    counters: Counters
}
interface Counters {
    total: number
}
interface NegotiationsHistory {
    url: string
    vacancies: VacanciesNegotiationsHistory
}

interface VacanciesNegotiationsHistory {
    archived: boolean
    can_edit: boolean
    id: string
    messages_url: string
    name: string
    negotiations_url: string
    url: string
    items: NegotiationsHistoryItem[]
}
interface NegotiationsHistoryItem {
    created_at: string
    with_message: boolean
    employer_state: IdName
}
interface JobSearchStatus {
    id: Dictionary['job_search_statuses_employer'][number]['id']
    name: Dictionary['job_search_statuses_employer'][number]['name']
    last_change_time: string
}

export interface ResumeItemProgress {
    mandatory: IdName[]
    recommended: IdName[]
    percentage: number
}

interface ResumeSite {
    type: ContactsSiteType
    url: string
}

interface ContactsSiteType {
    id: Dictionary['resume_contacts_site_type'][number]['id']
    name: Dictionary['resume_contacts_site_type'][number]['name']
}
interface TravelTime {
    id: Dictionary['travel_time'][number]['id']
    name: Dictionary['travel_time'][number]['name']
}

interface Locale {
    id: Locales[number]['id']
    name: Locales[number]['name']
}

interface Schedule {
    id: Dictionary['schedule'][number]['id']
    name: Dictionary['schedule'][number]['name']
}

interface Relocation {
    area: IdUrlName
    district: IdName
    type: RelocationType
}

interface RelocationType {
    id: Dictionary['relocation_type'][number]['id']
    name: Dictionary['relocation_type'][number]['name']
}

interface Recommendation {
    contact: string
    name: string
    organization: string
    position: string
}

export interface ModerationNote {
    id: Dictionary['resume_moderation_note'][number]['id']
    name: Dictionary['resume_moderation_note'][number]['name']
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
interface MetroStationResume extends LngLat, IdName {
    order: number
    line: MetroLine
}

export interface EmployerBlacklisted
    extends Omit<Employer, 'accredited_it_employer' | 'employer_rating'> {
    open_vacancies: number
}

export interface EmployerResumeVisibility extends Employer {
    selected: boolean
}

export interface ResumeAccessTypeFull extends ResumeAccessType {
    active: boolean | null
    limit: number | null
    list_url: string | null
    total: number | null
}

interface CountUrl {
    count: number
    url: string
}

export interface SavedSearch extends IdName {
    created_at: string
    subscription: boolean
    items: CountUrl
    new_items: CountUrl
}

export interface MeApplicant extends Id {
    auth_type: 'applicant'
    is_admin: boolean
    is_applicant: boolean
    is_application: boolean
    is_employer: boolean
    is_employer_integration: boolean
    email: string | null
    first_name: string
    last_name: string
    middle_name: string | null
    phone: string | null
    counters: MeCounters
    is_in_search: boolean
    negotiations_url: string
    profile_videos: MeVideos
    resumes_url: string
    user_statuses: UserStatuses
    [key: string]: any
}

interface MeCounters {
    new_resume_views: number
    resumes_count: number
    unread_negotiations: number
}

interface MeVideos {
    items: MeVideo[]
}

interface MeVideo extends Id {
    download_url: DownloadUrl
}

interface DownloadUrl {
    url: string
    expires_at: string
}

interface UserStatuses {
    job_search_status: JobSearchStatus
}

export interface UpdateMeFIO {
    first_name: string
    last_name: string
    middle_name: string
}

export interface UpdateMeInSearch {
    is_in_search: boolean
}

export interface PortfolioConditions {
    counters: PortfolioConditionsCounters
    fields: PortfolioConditionsField
}

interface PortfolioConditionsCounters {
    max: number
    uploaded: number
}

interface PortfolioConditionsField {
    description: ConditionsDescription
    file: ConditionsFile
    type: Pick<ConditionsDescription, 'required'>
}

interface ConditionsDescription {
    max_length: number
    min_length: number
    required: boolean
}

interface ConditionsFile {
    max_size: number
    mime_type: string[]
    required: boolean
}

export interface AdditionalProperties {
    any_job: boolean
    job_by_education: boolean
}

export interface ResumeCreds {
    answers: { [key: string]: AnswerId }
    question_to_answer_map: { [key: string]: string[] }
    questions: { [key: string]: QuestionId }
}

interface AnswerId {
    answer_group: string
    answer_id: string
    ask_questions_after: string[]
    description: string | null
    positive_title: string
    skip_at_result: boolean
    title: string
}

interface QuestionId {
    description: string | null
    is_active: boolean
    possible_answers: string[]
    question_id: string
    question_title: string
    question_type: string
    required: boolean
    skip_title_at_view: boolean
    view_title: string | null
}

interface Area extends LngLat, IdUrlName {}

export interface Profile {
    address_coordinates: LngLat | null
    area: Area
    birth_date: string | null
    citizenship: IdUrlName[]
    communication_methods: { [key: string]: CommunicationMethod }
    driver_license_types: DriverLicenseTypes[]
    education: Education
    first_name: string | null
    gender: Gender | null
    has_vehicle: boolean
    language: Language[]
    last_name: string | null
    metro: MetroStationResume
    middle_name: string | null
    other_communication_methods: OtherCommunicationMethods[] | null
    preferred_work_all_areas: boolean | null
    preferred_work_areas: PreferredWorkAreas[]
    relocation: Relocation
    status: IdName
    work_ticket: IdUrlName
}

interface PreferredWorkAreas {
    area: IdUrlName
    districts: District[]
    lines: Omit<MetroLine, 'area'>
    stations: MetroStationResume[]
}

interface District extends IdUrlName {
    area_id: string
}

interface OtherCommunicationMethods {
    description?: string | null
    value: string
}

interface CommunicationMethod {
    description?: string | null
    error_message?: string | null
    placeholder?: string | null
    position?: number | null
    regexp?: string | null
    title?: string | null
    value: string | null
}

export interface ScreenProfile {
    fields_options: { [key: string]: FieldsOptions }
    messages: { [key: string]: Message }
    screen_content: ScreenContent[]
    screen_id: string
    screen_type: 'static' | 'dynamic'
    title: string
}

interface ScreenContent {
    content_id: string
    content_type: 'cred' | 'skill_levels'
}

interface Message {
    fields: string[]
    text: string
}

interface FieldsOptions {
    fields: object
    visibility: 'show' | 'hide'
}

export interface SkillsWithLevel extends IdName {
    category: 'LANG' | 'SKILL'
    level: Level
    practice: Practice
    theory: Theory
}

interface Theory extends Id {
    attempted_at: string
    level: Level
    method: Method
    result: Result
    validity: Validity
    verified: boolean
    verified_by: 'NONE' | 'THEORY' | 'PRACTICE' | 'THEORY_AND_PRACTICE'
    [key: string]: any
}

interface Practice extends Id {
    attempted_at: string
    level: Level
    method: Method
    result: Result
    validity: Validity
    [key: string]: any
}

interface Validity {
    state: string
    valid_until: string | null
    [key: string]: any
}

interface Result {
    antifraud_verdict:
        | 'FRAUD_DETECTED'
        | 'UNKNOWN'
        | 'VERIFIED'
        | 'FAILED_TO_VERIFY'
        | 'EVALUATION_WAS_NOT_REQUESTED'
    score: Score
    status: string
    type: string
    [key: string]: any
}

interface Score {
    actual: number
    max: number
}

interface Method extends IdName {
    branding_settings: BrandingSettings | null
    description: string
    headline: Headline | null
    icon: Headline | null
    platform: 'KAK_DELA_QUIZ'
    source: Source
    [key: string]: any
}

interface Source extends IdName {
    description: string | null
    headline: Headline | null
    href: string | null
    icon: Headline | null
    [key: string]: any
}

interface Headline {
    dark: { [key: string]: string }
    defaults: { [key: string]: string }
    light: { [key: string]: string }
}

interface BrandingSettings {
    age_label: string
    cta_button_enabled: boolean
    enabled: boolean
    [key: string]: any
}

interface Level extends IdName {
    internal_id: string
    rank: number
    [key: string]: any
}

export interface Negotiation extends Omit<IdUrlName, 'name'> {
    applicant_question_state: boolean
    counters: NegotiationCounter
    created_at: string
    has_updates: boolean
    messaging_status: Dictionary['messaging_status'][number]['id']
    professional_roles: Id[]
    source: NegotiationSource
    state: NegotiationState
    updated_at: string
    viewed_by_opponent: boolean
    decline_allowed: boolean
    hidden: boolean
    job_search_status: Omit<JobSearchStatus, 'last_change_time'>
    phone_calls: PhoneCalls
    tags: Id[]
    vacancy: VacancyShort
    interview_review: Id
    resume: ResumeItemShort
}

interface PhoneCalls {
    items: PhoneCallItem[]
    picked_up_phone_by_opponent: boolean
}

interface PhoneCallItem extends Id {
    creation_time: string
    duration_seconds: number | null
    last_change_time: string | null
    status: Dictionary['phone_call_status'][number]['id']
}

interface NegotiationState {
    id: Dictionary['negotiations_state'][number]['id']
    name: Dictionary['negotiations_state'][number]['name']
}

interface NegotiationCounter {
    messages: number
    unread_messages: number
}

export interface NegotiationMessage extends Id {
    author: { participant_type: ParticipantType }
    created_at: string
    editable: boolean
    read: boolean
    state: IdName
    text: string | null
    viewed_by_me: boolean
    viewed_by_opponent: boolean
    address: Address | null
}

export interface NegotiationMessageWithAssessment extends NegotiationMessage {
    assessments: Assessment
}

interface Assessment extends IdName {
    actions: Action[]
}

interface Action extends IdName {
    alternate_url: string
    disable_reason: string
    enabled: boolean
}
