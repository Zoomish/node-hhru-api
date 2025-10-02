import { Dictionary } from '../../types/const.types.ts'
import { PaginationRequest } from '../../types/shared.types.ts'

export interface GetEmployersOptions extends PaginationRequest {
    text: string
    area: string
    type: Dictionary['employer_type'][number]['id']
    only_with_vacancies: boolean
    sort_by: 'by_name' | 'by_vacancies_open'
}
