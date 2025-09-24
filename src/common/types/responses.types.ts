export interface AppTokenResponse {
    access_token: string
    token_type: string
    expires_in: number
}

export interface AppTokenResponse {
    access_token: string
    token_type: string
    expires_in: number
}

export interface UserTokenResponse extends AppTokenResponse {
    refresh_token: string
}
