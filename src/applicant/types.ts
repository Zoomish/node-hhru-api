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

export interface ResumeCreationAvailability {
    created: number
    is_creation_available: boolean
    max: number
    remaining: number
}

export interface ResumeByStatusResponse {
    already_applied: ResumeItem[]
    not_published: ResumeItem[]
    suitable: ResumeItem[]
    unavailable: ResumeItem[]
    counters: Counters
}

export interface Counters {
    already_applied: number
    not_published: number
    suitable: number
    unavailable: number
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
    gender: IdUrlName
    photo: Photo | null
    platform: Platform
    salary: Salary | null
    total_experience: TotalExperience | null
    employment_form: IdName[]
    work_format: IdName[]
    access: AccessType
    status: IdName
    hidden_fields: IdName[]
    actions: ResumeDownload
    download: ResumeDownload
    education: Education
    experience: ExperienceItem[]
    certificate: Certificate[]
    url: string
    auto_hide_time: IdUrlName | null
    can_view_full_info: boolean | null
}

export interface ResumeDownload {
    pdf: FileUrl
    rtf: FileUrl
}

export interface FileUrl {
    url: string
}

export interface IdName {
    id: string
    name: string
}

export interface Photo {
    id: string
    medium: string
    small: string
}

export interface Platform {
    id: string
    real_id: string
}

export interface Salary {
    amount: number | null
    currency: string | null
    title: string | null
}

export interface TotalExperience {
    months: number | null
}

export interface AccessType {
    type: IdName
}

export interface Certificate {
    achieved_at: string
    owner: string | null
    title: string
    type: 'custom' | 'microsoft'
    url: string | null
}

export interface Education {
    additional: AdditionalEducation[] | null
    attestation: Attestation[] | null
    elementary: ElementaryEducation[] | null
    primary: HigherEducation[] | null
}

export interface AdditionalEducation {
    id: string | null
    name: string
    organization: string
    result: string | null
    year: number
}

export interface Attestation {
    id: string | null
    name: string
    organization: string
    result: string | null
    year: number
}

export interface ElementaryEducation {
    id: string | null
    name: string
    year: number
    level: IdUrlName
}

export interface HigherEducation {
    id: string | null
    name: string
    name_id: string | null
    organization: string | null
    organization_id: string | null
    result: string | null
    result_id: string | null
    university_acronym: string | null
    year: number
    education_level: IdUrlName
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

export interface Employer {
    alternate_url: string
    id: string
    logo_urls: LogoUrls | null
    name: string
    url: string
}

export interface LogoUrls {
    original: string
}

export interface IdUrlName {
    id: string
    name: string
    url: string
}
export interface Id {
    id: string
}

export interface ResumeStatusResponse {
    blocked: boolean
    can_publish_or_update: boolean | null
    finished: boolean
    status: IdName
    moderation_note: ModerationNote[]
    progress: ResumeProgress
    publish_url: string
}

export interface ModerationNote {
    field?: string
    id: string
    name: string
    pointer?: string
}

export interface ResumeProgress {
    mandatory: IdName[]
    recommended: IdName[]
    percentage: number
}

export interface MyResumesResponse {
    found: number
    page: number
    pages: number
    per_page: number
    items: ResumeItem[]
}

export interface ResumeOverall {
    already_applied: number
    not_published: number
    unavailable: number
}

export interface SuitableResumeItem {
    actions: ResumeDownload
    age: number | null
    alternate_url: string
    area: IdUrlName
    auto_hide_time: IdName
    can_view_full_info: boolean | null
    certificate: Certificate[]
    created_at: string
    download: ResumeDownload
    education: Education
    experience: ExperienceItem[]
    first_name: string | null
    gender: IdName | null
    hidden_fields: IdName[]
    id: string
    last_name: string | null
    marked: boolean
    middle_name: string | null
    photo: object | null
    platform: Id
    real_id: string
    salary: Salary | null
    total_experience: ExperienceItem | null
    updated_at: string
    url: string
    employment_form: object[]
    work_format: object[]
    access: object
    finished: boolean
    requires_completion: boolean
    status: IdName
}

export interface SuitableResumesResponse {
    found: number
    page: number
    pages: number
    per_page: number
    items: SuitableResumeItem[]
    overall: ResumeOverall
}
