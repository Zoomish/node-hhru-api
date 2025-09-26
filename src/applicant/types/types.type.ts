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
interface LogoUrls {
    90?: string
    240?: string
    original: string
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

interface EducationLevel {
    id: Dictionary['education_level'][number]['id']
    name: Dictionary['education_level'][number]['name']
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

interface WorkFormat {
    id: Dictionary['work_format'][number]['id']
    name: Dictionary['work_format'][number]['name']
}

interface ResumeHiddenFields {
    id: Dictionary['resume_hidden_fields'][number]['id']
    name: Dictionary['resume_hidden_fields'][number]['name']
}

interface EmploymentForm {
    id: Dictionary['employment_form'][number]['id']
    name: Dictionary['employment_form'][number]['name']
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

interface Language extends IdName {
    level: LanguageLevel
}

interface LanguageLevel {
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

interface DriverLicenseTypes {
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

interface Address {
    building?: string | null
    city?: string | null
    lat?: number | null
    lng?: number | null
    metro?: MetroStation | null
    raw?: string | null
    street?: string | null
    id?: string | null
}

interface MetroStation {
    lat: number | null
    line_id: string
    line_name: string
    lng: number | null
    station_id: string
    station_name: string
    area: IdUrlName
}

interface MetroStationResume {
    lat: number
    lng: number
    id: string
    name: string
    order: number
    line: MetroLine
}

interface MetroLine extends IdName {
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

interface EmployerRating {
    reviews_count: number
    total_rating: number
}

interface EmployerVakancy extends Omit<Employer, 'accredited_it_employer'> {
    accredited_it_employer: boolean
    blacklisted: boolean
    applicant_services: ApplicantServices
}

interface ApplicantServices {
    target_employer: TargetEmployer
}

interface TargetEmployer {
    count: number
}

export interface EmployerResumeVisibility extends Employer {
    selected: boolean
}

interface Department {
    id: string
    name: string
}

interface ProfessionalRole {
    id: string
    name: string
}

interface SalaryRange {
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
interface ClusterItem {
    count: number
    name: string
    type: 'metro_station' | 'metro_line'
    url: string
    metro_line?: MetroLine
    metro_station?: MetroStation
}

interface WorkSchedule {
    id: Dictionary['schedule'][number]['id']
    name: Dictionary['schedule'][number]['name']
}

interface VacancySnippet {
    show_logo_in_search?: boolean
    video?: any
    snippet_picture_url?: string | null
    snippet_video_url?: string | null
}

interface VacancyCounters {
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

interface VacancyType {
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

interface VideoVacancy {
    cover_picture: CoverPicture
    snippet_picture: Omit<IdUrlName, 'name' | 'id'>
    snippet_video: SnippetVideo
    video: SnippetVideo
}

interface SnippetVideo extends Omit<IdUrlName, 'name' | 'id'> {
    upload_id: number
}

interface CoverPicture {
    resized_height: number
    resized_path: string
    resized_width: number
}

interface VacancyProperties {
    appearance: Appearance
    properties: Properties
}

interface Appearance {
    title: string
}

interface Properties {
    end_time: string
    start_time: string
    parameters: string[]
    property_type: PropertyType
}
type PropertyType =
    | 'HH_ANONYMOUS'
    | 'HH_STANDARD_PLUS'
    | 'HH_STANDARD'
    | 'HH_FREE'
    | 'HH_PREMIUM'
    | 'HH_ADVERTISING'
    | 'HH_PAY_FOR_PERFORMANCE'
    | 'ZP_CROSSPOSTING'

interface Test extends Id {
    required: boolean
}

interface Experience {
    id: Dictionary['experience'][number]['id']
    name: Dictionary['experience'][number]['name']
}

interface AgeRestriction {
    id: Dictionary['age_restriction'][number]['id']
    name: Dictionary['age_restriction'][number]['name']
}

interface FlyInFlyOutDuration {
    id: Dictionary['fly_in_fly_out_duration'][number]['id']
    name: Dictionary['fly_in_fly_out_duration'][number]['name']
}

interface ContactsVacancy {
    call_tracking_enabled: boolean | null
    email: string | null
    name: string | null
    phones: PhoneContacts[] | null
}

interface PhoneContacts {
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
