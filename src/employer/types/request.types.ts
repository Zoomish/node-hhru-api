import { Dictionary } from '../../types/const.types.ts'
import {
    ContactsVacancy,
    DriverLicenseTypes,
    EmploymentForm,
    Experience,
    FlyInFlyOutDuration,
    Id,
    IdName,
    Name,
    ProfessionalRole,
    SalaryRange,
    VacancyProperties,
    WorkFormat,
    WorkHours,
    WorkSchedule,
} from '../../types/shared.types.ts'
import { Auction } from './types.types.ts'

export interface UpdateVacanciesDraftsBody extends Name {
    closed_for_applicants: boolean
    vacancy_properties: VacancyProperties
    accept_handicapped: boolean
    accept_incomplete_resumes: boolean
    accept_temporary: boolean
    address: Address
    age_restriction: AgeRestriction
    allow_messages: boolean
    areas: Id[]
    assigned_manager_id: string
    auction: Auction
    branded_template: Id
    code: string
    contacts: Omit<ContactsVacancy, 'call_tracking_enabled'>
    custom_employer_name: string
    department: Id
    description: string
    driver_license_types: DriverLicenseTypes[]
    employment_form: Omit<EmploymentForm, 'name'>[]
    experience: Omit<Experience, 'name'>[]
    fly_in_fly_out_duration: Omit<FlyInFlyOutDuration, 'name'>[]
    internship: boolean
    key_skills: Name[]
    languages: Language[]
    night_shifts: boolean
    professional_roles: Omit<ProfessionalRole, 'name'>[]
    response_letter_required: boolean
    response_notifications: boolean
    response_url: string
    salary_range: Omit<SalaryRange, 'mode'>
    scheduled_at: string
    test: IdName
    with_zp: boolean
    work_format: Omit<WorkFormat, 'name'>[]
    work_schedule_by_days: Omit<WorkSchedule, 'name'>[]
    working_hours: Omit<WorkHours, 'name'>[]
}

interface Language {
    id: string
    level: LanguageLevel
}

interface LanguageLevel {
    id: Dictionary['language_level'][number]['id']
}

interface Address extends Id {
    show_metro_only: boolean
}

interface AgeRestriction {
    id: Dictionary['age_restriction'][number]['id']
}
