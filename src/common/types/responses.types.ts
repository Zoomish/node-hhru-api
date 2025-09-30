import {
    Argument,
    Cluster,
    Fixes,
    Id,
    IdName,
    Pagination,
    Suggests,
} from '../../types/shared.types.ts'
import { VacancySearchItem } from './types.types.ts'

export interface AppTokenResponse {
    access_token: string
    token_type: string
    expires_in: number
}

export interface AppTokenResponse {
    access_token: string
    token_type: string
}

export interface UserTokenResponse extends AppTokenResponse {
    refresh_token: string
    expires_in: number
}

export interface VacancySearchResponse extends Pagination<VacancySearchItem> {
    alternate_url: string
    clusters?: Cluster[] | null
    arguments?: Argument[] | null
    fixes?: Fixes | null
    suggests?: Suggests | null
}

export interface DictResponse extends IdName {}

export interface LocalesResponse extends IdName {
    current: boolean
}

export interface LanguagesResponse extends IdName {
    uid: string
}

export interface EducationalInstitutionsResponse {
    items: EducationalInstitution[]
}

interface EducationalInstitution extends Id {
    acronym: string | null
    area: IdName
    synonyms: string | null
    text: string
}

export interface SkillsResponse {
    items: Skill[]
}

interface Skill extends Id {
    text: string
}

export interface ProfessionalRolesResponse {
    categories: ProfessionalRole[]
}

interface ProfessionalRole extends IdName {
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
