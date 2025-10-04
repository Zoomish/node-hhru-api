import { Id, IdName, IdUrlName, Pagination } from '../../types/shared.types.ts'
import { Manager, PersonalManager } from './types.types.ts'

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
