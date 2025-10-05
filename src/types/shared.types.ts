import { Dictionary, PropertyType } from './const.types.ts'

export interface Id {
    id: string
}

export interface Text {
    text: string
}

export interface Name {
    name: string
}

export interface Url {
    url: string
}

export interface IdName extends Id, Name {}

export interface IdText extends Id, Text {}

export interface IdTextUrl extends IdText, Url {}

export interface IdUrlName extends IdName, Url {}

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

export interface MetroLineWithStations extends Omit<MetroLine, 'area'> {
    stations: MetroLineStation[]
}

interface MetroLineStation extends LngLat, IdName {
    line: MetroLineStationItem
    order: number
}

interface MetroLineStationItem extends IdName {
    hex_color: string
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

export interface WorkHours {
    id: Dictionary['working_hours'][number]['id']
    name: Dictionary['working_hours'][number]['name']
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

export interface Fixes {
    fixed: string
    original: string
}

export interface Suggests {
    found: number
    value: string
}

export interface Address extends Partial<LngLat> {
    building?: string | null
    city?: string | null
    metro?: MetroStation | null
    raw?: string | null
    street?: string | null
    id?: string | null
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
    premium: boolean | null
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
    metro_stations?: MetroStation[]
    fly_in_fly_out_duration?: FlyInFlyOutDuration[] | null
    internship?: boolean | null
    night_shifts?: boolean | null
    professional_roles: ProfessionalRole[]
    schedule?: WorkSchedule | null
    work_format?: WorkFormat[] | null
    work_schedule_by_days?: WorkSchedule[] | null
    working_hours?: WorkHours[] | null
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
    employment_form: EmploymentForm | null
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

export interface Language extends IdName {
    level: LanguageLevel
}

interface LanguageLevel {
    id: Dictionary['language_level'][number]['id']
    name: Dictionary['language_level'][number]['name']
}

export interface EmploymentForm {
    id: Dictionary['employment_form'][number]['id']
    name: Dictionary['employment_form'][number]['name']
}

export interface DriverLicenseTypes {
    id: Dictionary['driver_license_types'][number]['id']
}

export interface WorkFormat {
    id: Dictionary['work_format'][number]['id']
    name: Dictionary['work_format'][number]['name']
}

export interface ProfessionalRole {
    id: string
    name: string
}

export interface WorkSchedule {
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

export interface VacancyProperties {
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
interface Test extends Id {
    required: boolean
}

export interface Experience {
    id: Dictionary['experience'][number]['id']
    name: Dictionary['experience'][number]['name']
}

interface AgeRestriction {
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

interface PhoneContacts {
    city: string
    comment: string | null
    country: string
    formatted: string
    number: string
}

export interface SalaryRange {
    from?: number | null
    to?: number | null
    currency: string
    gross: boolean
    frequency?: IdName | null
    mode?: IdName
}

export interface EmployerVakancy extends Employer {
    blacklisted: boolean
    applicant_services: ApplicantServices
}

export interface Employer extends IdUrlName {
    trusted: boolean
    alternate_url: string
    logo_urls?: LogoUrls | null
    vacancies_url: string
    accredited_it_employer?: boolean
    employer_rating?: EmployerRating
}

interface EmployerRating {
    reviews_count: number
    total_rating: number
}

interface LogoUrls {
    90?: string
    240?: string
    original: string
}

interface ApplicantServices {
    target_employer: TargetEmployer
}

interface TargetEmployer {
    count: number
}

interface Department {
    id: string
    name: string
}

interface VacancyType {
    id: Dictionary['vacancy_type'][number]['id']
    name: Dictionary['vacancy_type'][number]['name']
}

export interface ValidationError {
    reason: string
    value: string
}
