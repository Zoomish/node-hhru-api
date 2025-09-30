import {
    Argument,
    Cluster,
    Fixes,
    Pagination,
    Suggests,
} from '../../types/shared.types.ts'
import { VacancySearchItem } from './types.types.ts'

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
