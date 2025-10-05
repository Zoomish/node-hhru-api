import {
    Id,
    IdName,
    IdUrlName,
    Pagination,
    ValidationError,
} from '../../types/shared.types.ts'
import {
    EmployerAvailablePublication,
    EmployerMethodAccess,
    EmployerPayableApiAction,
    Manager,
    PersonalManager,
    VacancyCreate,
    VacancyDraft,
} from './types.types.ts'

export interface MeEmployer extends Id {
    auth_type: 'employer'
    is_admin: boolean
    is_applicant: boolean
    is_application: boolean
    is_employer: boolean
    is_employer_integration: boolean
    email: string | null
    first_name: string
    last_name: string
    middle_name?: string | null
    phone?: string | null
    employer: IdName
    manager: Manager
    personal_manager: PersonalManager
    [key: string]: any
}

export interface MeEmployerIntergration extends Id {
    auth_type: 'employer_integration'
    is_admin: boolean
    is_applicant: boolean
    is_application: boolean
    is_employer: boolean
    is_employer_integration: boolean
    employer: IdName
    personal_manager: PersonalManager
    [key: string]: any
}
export interface GetEmployerTestsResponse {
    items: IdName[]
}

export interface GetEmployerVacancyAreasResponse
    extends Pagination<IdUrlName> {}

export interface GetEmployerDepartmentsResponse {
    items: IdName[]
}

export interface GetEmployerVacancyTemplatesResponse {
    items: VacancyTemplate[]
}

interface VacancyTemplate extends IdName {
    version_id: string
}

export interface GetVacancyDraftsResponse extends VacancyDraft {}

export interface UpdateVacanciesDraftsResponse extends IdName {
    ignored_fields: string[]
    publication_ready: boolean
    validation_errors: ValidationError
}

export interface PublishVacanciesByDraftsResponse {
    vacancy_ids: number[]
}

export interface GetVacanciesDraftsDuplicatesResponse {
    found: number
    has_duplicates: boolean
    items: number[]
}

export interface CreateVacanciesDraftsResponse
    extends UpdateVacanciesDraftsResponse {}

export interface GetVacanciesDraftsResponse extends Pagination<VacancyCreate> {}

export interface GetEmployerPayableApiActionsResponse {
    items: EmployerPayableApiAction[]
}

export interface GetEmployerMethodAccessResponse {
    items: EmployerMethodAccess[]
}

export interface GetEmployerAvailablePublicationsResponse {
    publication_variants: EmployerAvailablePublication[]
}
