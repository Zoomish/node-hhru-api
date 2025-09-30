import {
    ContactsVacancy,
    EmploymentForm,
    Experience,
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
