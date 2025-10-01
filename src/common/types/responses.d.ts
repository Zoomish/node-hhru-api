import {
    Argument,
    Cluster,
    Fixes,
    Id,
    IdName,
    IdText,
    IdTextUrl,
    IdUrlName,
    MetroLineWithStations,
    Pagination,
    Suggests,
} from '../../types/shared.js'
import {
    CompaniesSuggest,
    PositionsSuggest,
    ProfessionalRole,
    ProfessionalRolesSuggest,
    VacancyPositionsSuggest,
    VacancySearchItem,
} from './types.js'

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
    items: IdText[]
}

export interface ProfessionalRolesResponse {
    categories: ProfessionalRole[]
}

export interface IndustriesResponse extends IdName {
    industries: IdName[]
}

export interface DistrictsResponse extends IdName {
    area_id: string
}

export interface MetroResponse extends IdUrlName {
    lines: MetroLineWithStations[]
}

export interface MetroCityResponse extends IdName {
    lines: MetroLineWithStations[]
}

export interface AreaResponse extends IdName {
    name_prepositional: string | null
    parent_id: string | null
    utc_offset: string | null
    areas: AreaResponse[]
}

export interface PositionsSuggestsResponse {
    items: PositionsSuggest[]
}

export interface AreaLeavesSuggestsResponse {
    items: IdTextUrl[]
}

export interface SkillsSuggestsResponse {
    items: IdText[]
}

export interface VacancyPositionsSuggestsResponse {
    items: VacancyPositionsSuggest[]
}

export interface ProfessionalRolesSuggestsResponse {
    items: ProfessionalRolesSuggest[]
}

export interface ResumeSearchKeywordSuggestsResponse {
    items: Text[]
}

export interface AreaSuggestsResponse {
    items: IdTextUrl[]
}

export interface VacancySearchKeywordSuggestsResponse {
    items: Text[]
}

export interface FieldsOfStudySuggestsResponse {
    items: IdText[]
}

export interface CompaniesSuggestsResponse {
    items: CompaniesSuggest[]
}
