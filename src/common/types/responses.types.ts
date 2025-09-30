import { Vacancy } from "../../applicant/types/types.type.ts"
import { Pagination } from "../../types/const.ts"

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

export interface VacancySearchResponse extends Pagination<Vacancy> {
    found: number
}
