import { Id, IdName, IdUrlName, VacancyFull } from '../../types/shared.types.ts'

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

export interface VacancyDraft extends VacancyFull {
    manager: Id
    response_notifications: boolean
    assigned_manager: AssignedManager
    branded_template: IdName
    custom_employer_name: string | null
    meta_info: MetaInfo
    with_zp: boolean
}

interface MetaInfo {
    auto_publication: AutoPublication
    completed_fields_percentage: number
    draft_id: string
    insufficient_publications: InsufficientPublication[]
    insufficient_quotas: InsufficientPublication[]
    last_change_time: string | null
    publication_ready: boolean
    required_publications: InsufficientPublication[]
    scheduled_at: string | null
}

interface InsufficientPublication {
    billing_type: IdName
    count: number
    vacancy_type: string
}

interface AutoPublication {
    bill_uid: string
    cart_id: string
}

interface AssignedManager extends Id {
    full_name: string
    auction: Auction
}

export interface Auction {
    bid_cents: number | null
    budget_cents: number | null
    checked: boolean
}

export interface VacancyCreate extends Omit<IdUrlName, 'id'> {
    auto_publication: AutoPublication
    completed_fields_percentage: number
    draft_id: string
    insufficient_publications: InsufficientPublication[]
    insufficient_quotas: InsufficientPublication[]
    last_change_time: string | null
    publication_ready: boolean
    required_publications: InsufficientPublication[]
    scheduled_at: string | null
    areas: IdName[]
    assigned_manager: AssignedManagerVacancy
    closed_for_applicants: boolean
}

interface AssignedManagerVacancy {
    id: string
    full_name: string
}

interface AutoPublication {
    bill_uid: string
    cart_id: string
}

export interface EmployerPayableApiAction extends Id {
    activated_at: string
    balance: Balance
    expires_at: string
    service_type: IdName
}

interface Balance {
    actual: number
    initial: number
}

export interface EmployerMethodAccess extends Id {
    access: Access
    description: string
}

interface Access {
    has_access: boolean
}

export interface EmployerAvailablePublication {
    appearance: Appearance
    available_publications_count: number
    suitable_packages: SuitablePackage[]
    vacancy_properties: VacancyProperties
}

interface VacancyProperties {
    required: PropertyType[]
}

interface PropertyType {
    property_type: string
}

interface SuitablePackage {
    count: number
    invalid: boolean
    price_regions: PriceRegion[]
}

interface PriceRegion extends Id {
    areas_url: string
    title: string
}

interface Appearance {
    title: string
    description: string
}
