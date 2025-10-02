import {
    ContactsVacancy,
    EmploymentForm,
    Experience,
    IdName,
    IdText,
    IdTextUrl,
    Url,
    Vacancy,
} from '../../types/shared.types.ts'

export interface VacancySearchItem
    extends Omit<
        Vacancy,
        'adv_response_url' | 'accept_only_for_part_time' | 'description'
    > {
    contacts: ContactsVacancy | null
    employment_form: EmploymentForm | null
    experience: Experience
}

export interface ProfessionalRoleItem extends IdName {
    roles: Role[]
}

interface Role extends IdName {
    accept_incomplete_resumes: boolean
    is_default: boolean
    search_deprecated: boolean
    search_deprecated_datetime: string | null
    select_deprecated: boolean
    select_deprecated_datetime: string | null
}

export interface PositionsSuggest extends IdText {
    professional_roles: PositionsSuggestProfessionalRole[]
    specializations: PositionsSuggestsSpecializations[]
}

interface PositionsSuggestProfessionalRole extends IdName {
    accept_incomplete_resumes: boolean
}

interface PositionsSuggestsSpecializations extends IdName {
    profarea_id: string
    profarea_name: string
}

export interface VacancyPositionsSuggest extends IdText {
    professional_roles: PositionsSuggestProfessionalRole[]
}

export interface ProfessionalRolesSuggest extends IdText {
    professional_roles: ProfessionalRolesSuggestProfessionalRole[]
}

interface ProfessionalRolesSuggestProfessionalRole extends IdText {
    accept_incomplete_resumes: boolean
}

export interface CompaniesSuggest extends IdTextUrl {
    area: IdName
    industries: IdName[]
    logo_urls: LogoUrl
}

interface LogoUrl {
    90: string
}

export interface Branding extends Constructors {}

interface Constructors {
    constructor: Constructor
}
interface Constructor extends Url {
    header_picture: HeaderPicture
    widgets: Widgets
}

interface HeaderPicture {
    resized_path: string
}

interface Widgets {
    items: Widget[]
    type: 'gallery'
}

interface Widget {
    picture_id: string
    resized_path: string
}
