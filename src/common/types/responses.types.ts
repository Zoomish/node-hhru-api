import { IdName, IdUrlName, Pagination } from '../../types/shared.types.ts'
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
    clusters: Clusters[]
}

interface Clusters extends IdName {
    items: Cluster[]
}

interface Cluster extends Omit<IdUrlName, 'id'> {
    items: IdName[]
}
