import { Id, IdName } from '../../types/shared.types.ts'

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

interface PersonalManager extends Id {
    email: string
    first_name: string
    last_name: string
    is_available: boolean
    photo_urls: PhotoUrls
    unavailable: Unavailable
}

interface Unavailable {
    until: string
}

interface PhotoUrls {
    big: string | null
    small: string | null
}

interface Manager extends Id {
    has_admin_rights: boolean
    has_multiple_manager_accounts: boolean
    is_main_contact_person: boolean
    manager_settings_url: string
}
