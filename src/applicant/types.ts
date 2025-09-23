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

export interface Employer extends Id {
    name: string
    url: string
    alternate_url: string
    vacancies_url: string
    logo_urls?: LogoUrls | null
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
    platform: Id & { real_id: string }
    salary: Salary | null
    total_experience: TotalExperience | null
    employment_form: IdName[]
    work_format: IdName[]
    access: AccessType
    status: IdName
    hidden_fields: IdName[]
    actions: Download
    download: Download
    education: Education
    experience: ExperienceItem[]
    certificate: Certificate[]
    url: string
    auto_hide_time: IdUrlName | null
    can_view_full_info: boolean | null
}

export interface ResumeItemShort extends Id {
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
