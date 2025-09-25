import { Dictionary, Locales } from '../../types/const.ts'

export interface Id {
    id: string
}
export interface IdName extends Id {
    name: string
}
export interface IdUrlName extends IdName {
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
    currency: Dictionary['currency'][number]['code'] | null
    title?: string | null
}

export interface TotalExperience {
    months: number | null
}
export interface ResumeAccessType {
    id: Dictionary['resume_access_type'][number]['id']
    name: Dictionary['resume_access_type'][number]['name']
}
export interface AccessType {
    type: ResumeAccessType
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

export interface Education {
    additional?: BaseEducation[] | null
    attestation?: BaseEducation[] | null
    elementary?: ElementaryEducation[] | null
    primary?: HigherEducation[] | null
    level: IdName
}

export interface EducationLevel {
    id: Dictionary['education_level'][number]['id']
    name: Dictionary['education_level'][number]['name']
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

export interface Gender {
    id: Dictionary['gender'][number]['id']
    name: Dictionary['gender'][number]['name']
}

export interface WorkFormat {
    id: Dictionary['work_format'][number]['id']
    name: Dictionary['work_format'][number]['name']
}

export interface ResumeHiddenFields {
    id: Dictionary['resume_hidden_fields'][number]['id']
    name: Dictionary['resume_hidden_fields'][number]['name']
}

export interface EmploymentForm {
    id: Dictionary['employment_form'][number]['id']
    name: Dictionary['employment_form'][number]['name']
}

export interface PaidServices extends IdName {
    active?: boolean
    expires?: string
}

export interface ContactInfo {
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

export interface SimilarVacancies {
    counters: Counters
    url: string
}
export interface BusinessTripReadiness {
    id: Dictionary['business_trip_readiness'][number]['id']
    name: Dictionary['business_trip_readiness'][number]['name']
}

export interface Employments {
    id: Dictionary['employment'][number]['id']
    name: Dictionary['employment'][number]['name']
}

export interface Language extends IdName {
    level: LanguageLevel
}

export interface LanguageLevel {
    id: Dictionary['language_level'][number]['id']
    name: Dictionary['language_level'][number]['name']
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

export interface DriverLicenseTypes {
    id: Dictionary['driver_license_types'][number]['id']
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

export interface ResumeItemShort {
    id: string
    title: string | null
    url: string
    alternate_url: string
}

export interface Portfolio {
    description: string
    medium: string
    small: string
}
export interface Owner {
    id: string
    comments: Comments
}
export interface Comments {
    url: string
    counters: Counters
}
export interface Counters {
    total: number
}
export interface NegotiationsHistory {
    url: string
    vacancies: VacanciesNegotiationsHistory
}

export interface VacanciesNegotiationsHistory {
    archived: boolean
    can_edit: boolean
    id: string
    messages_url: string
    name: string
    negotiations_url: string
    url: string
    items: NegotiationsHistoryItem[]
}
export interface NegotiationsHistoryItem {
    created_at: string
    with_message: boolean
    employer_state: IdName
}
export interface JobSearchStatus {
    id: Dictionary['job_search_statuses_employer'][number]['id']
    name: Dictionary['job_search_statuses_employer'][number]['name']
    last_change_time: string
}

export interface ResumeItemProgress {
    mandatory: IdName[]
    recommended: IdName[]
    percentage: number
}

export interface ResumeSite {
    type: ContactsSiteType
    url: string
}

export interface ContactsSiteType {
    id: Dictionary['resume_contacts_site_type'][number]['id']
    name: Dictionary['resume_contacts_site_type'][number]['name']
}
export interface TravelTime {
    id: Dictionary['travel_time'][number]['id']
    name: Dictionary['travel_time'][number]['name']
}

export interface Locale {
    id: Locales[number]['id']
    name: Locales[number]['name']
}

export interface Schedule {
    id: Dictionary['schedule'][number]['id']
    name: Dictionary['schedule'][number]['name']
}

export interface Relocation {
    area: IdUrlName
    district: IdName
    type: RelocationType
}

export interface RelocationType {
    id: Dictionary['relocation_type'][number]['id']
    name: Dictionary['relocation_type'][number]['name']
}

export interface Recommendation {
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

export interface ListFieldCondition extends FieldCondition {
    min_count?: number | null
    max_count?: number | null
}

export interface FieldsCondition extends FieldCondition {
    fields?: Record<string, FieldCondition | FieldsCondition | null> | null
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
    area: IdUrlName
}

export interface MetroStationResume {
    lat: number
    lng: number
    id: string
    name: string
    order: number
    line: MetroLine
}

export interface MetroLine extends IdName {
    hex_color: string
    area: IdUrlName
}

export interface Employer extends IdUrlName {
    trusted: boolean
    alternate_url: string
    logo_urls?: LogoUrls | null
    vacancies_url: string
    accredited_it_employer?: boolean
    employer_rating?: EmployerRating
}

export interface EmployerBlacklisted
    extends Omit<Employer, 'accredited_it_employer' | 'employer_rating'> {
    open_vacancies: number
}

export interface EmployerRating {
    reviews_count: number
    total_rating: number
}

export interface EmployerVakancy
    extends Omit<Employer, 'accredited_it_employer'> {
    accredited_it_employer: boolean
    blacklisted: boolean
    applicant_services: ApplicantServices
}

export interface ApplicantServices {
    target_employer: TargetEmployer
}

export interface TargetEmployer {
    count: number
}

export interface EmployerResumeVisibility extends Employer {
    selected: boolean
}

export interface Department {
    id: string
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
    frequency?: IdName | null
    mode?: IdName
}

export interface Cluster extends IdName {
    items: ClusterItem[]
}
export interface ClusterItem {
    count: number
    name: string
    type: 'metro_station' | 'metro_line'
    url: string
    metro_line?: MetroLine
    metro_station?: MetroStation
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

export interface Fixes {
    fixed: string
    original: string
}

export interface Suggests {
    found: number
    value: string
}

export interface VacancyType {
    id: Dictionary['vacancy_type'][number]['id']
    name: Dictionary['vacancy_type'][number]['name']
}

export interface VacancyShort {
    address?: Address | null
    adv_response_url: string
    alternate_url: string
    apply_alternate_url: string
    archived: boolean
    area: IdUrlName
    created_at: string
    department?: Department | null
    employer?: EmployerVakancy
    has_test: boolean
    id: string
    insider_interview?: Omit<IdUrlName, 'name'> | null
    name: string
    premium: boolean
    published_at: string
    relations?: Dictionary['vacancy_relation'][number]['id'][] | null
    response_letter_required: boolean
    response_url?: string | null
    salary_range?: SalaryRange | null
    show_contacts?: boolean | null
    sort_point_distance?: number | null
    type: VacancyType
    url: string
}

export interface Vacancy extends VacancyShort {
    description?: string | null
    accept_incomplete_resumes: boolean
    accept_temporary?: boolean | null
    address?: Address | null
    metro_stations?: MetroStation[]
    fly_in_fly_out_duration?: FlyInFlyOutDuration[] | null
    internship?: boolean | null
    night_shifts?: boolean | null
    professional_roles: ProfessionalRole[]
    schedule?: WorkSchedule | null
    work_format?: WorkFormat[] | null
    work_schedule_by_days?: WorkSchedule[] | null
    working_hours?: WorkSchedule[] | null
    counters?: VacancyCounters
    snippet?: VacancySnippet
    accept_only_for_part_time?: string[]
}

export interface VacancyFull extends Vacancy {
    accept_handicapped: boolean
    age_restriction: AgeRestriction
    allow_messages: boolean
    approved: boolean
    closed_for_applicants: boolean | null
    code: string | null
    contacts: ContactsVacancy | null
    driver_license_types: DriverLicenseTypes[]
    employment_form: EmploymentForm
    experience: Experience
    initial_created_at: string
    key_skills: Omit<IdName, 'id'>[]
    languages: Language[]
    negotiations_url: string
    suitable_resumes_url: string | null
    test: Test
    vacancy_properties: VacancyProperties
    video_vacancy: VideoVacancy
}

export interface VideoVacancy {
    cover_picture: CoverPicture
    snippet_picture: Omit<IdUrlName, 'name' | 'id'>
    snippet_video: SnippetVideo
    video: SnippetVideo
}

export interface SnippetVideo extends Omit<IdUrlName, 'name' | 'id'> {
    upload_id: number
}

export interface CoverPicture {
    resized_height: number
    resized_path: string
    resized_width: number
}

export interface VacancyProperties {
    appearance: Appearance
    properties: Properties
}

export interface Appearance {
    title: string
}

export interface Properties {
    end_time: string
    start_time: string
    parameters: string[]
    property_type: PropertyType
}
export type PropertyType =
    | 'HH_ANONYMOUS'
    | 'HH_STANDARD_PLUS'
    | 'HH_STANDARD'
    | 'HH_FREE'
    | 'HH_PREMIUM'
    | 'HH_ADVERTISING'
    | 'HH_PAY_FOR_PERFORMANCE'
    | 'ZP_CROSSPOSTING'

export interface Test extends Id {
    required: boolean
}

export interface Experience {
    id: Dictionary['experience'][number]['id']
    name: Dictionary['experience'][number]['name']
}

export interface AgeRestriction {
    id: Dictionary['age_restriction'][number]['id']
    name: Dictionary['age_restriction'][number]['name']
}

export interface FlyInFlyOutDuration {
    id: Dictionary['fly_in_fly_out_duration'][number]['id']
    name: Dictionary['fly_in_fly_out_duration'][number]['name']
}

export interface ContactsVacancy {
    call_tracking_enabled: boolean | null
    email: string | null
    name: string | null
    phones: PhoneContacts[] | null
}

export interface PhoneContacts {
    city: string
    comment: string | null
    country: string
    formatted: string
    number: string
}

export interface ResumeAccessTypeFull extends ResumeAccessType {
    active: boolean | null
    limit: number | null
    list_url: string | null
    total: number | null
}

export interface CountUrl {
    count: number
    url: string
}

export interface SavedSearch extends IdName {
    created_at: string
    subscription: boolean
    items: CountUrl
    new_items: CountUrl
}

export interface Me extends Id {
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

export interface MeCounters {
    new_resume_views: number
    resumes_count: number
    unread_negotiations: number
}

export interface MeVideos {
    items: MeVideo[]
}

export interface MeVideo extends Id {
    download_url: DownloadUrl
}

export interface DownloadUrl {
    url: string
    expires_at: string
}

export interface UserStatuses {
    job_search_status: JobSearchStatus
}
