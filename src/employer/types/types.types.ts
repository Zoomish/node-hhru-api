import { Id } from "../../types/shared.types.ts"


export interface PersonalManager extends Id {
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

export interface Manager extends Id {
    has_admin_rights: boolean
    has_multiple_manager_accounts: boolean
    is_main_contact_person: boolean
    manager_settings_url: string
}
