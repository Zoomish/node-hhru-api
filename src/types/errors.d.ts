export interface HHApiBaseError {
    request_id: string
}

export type BadArgumentErrorType = 'bad_argument' | 'resume_visibility_list'

export type BadArgumentErrorValue =
    | 'per_page'
    | 'unknown_employer'
    | 'limit_exceeded'
    | 'too_many_employers'
    | 'id'

export interface HHApi400Error extends HHApiBaseError {
    errors: {
        type: BadArgumentErrorType
        value: BadArgumentErrorValue
    }[]
}
export type ForbiddenErrorType = 'forbidden' | 'oauth'

export type ForbiddenErrorValue =
    | 'bad_authorization'
    | 'token_expired'
    | 'token_revoked'
    | 'application_not_found'
    | 'user_auth_expected'
    | 'application_auth_expected'
    | 'no_scope'
    | 'used_manager_account_forbidden'
    | 'manager_extra_account_not_found'

export type OAuthError =
    | 'token-revoked'
    | 'token-expired'
    | 'bad-auth-type'
    | 'client-id-deleted'

export interface HHApi403Error extends HHApiBaseError {
    description?: string
    errors: {
        type: ForbiddenErrorType
        value: ForbiddenErrorValue
    }[]
    oauth_error?: OAuthError
}

export interface HHApi404Error extends HHApiBaseError {
    description?: string
    errors: {
        type: 'not_found'
    }[]
}

export type HHApiError = HHApi400Error | HHApi403Error | HHApi404Error
