export interface CurrentUser {
    auth_type: string | null
    is_admin: boolean
    is_applicant: boolean
    is_application: boolean
    is_employer: boolean
    is_employer_integration: boolean
    email: string | null
    first_name: string
    id: string
    is_anonymous: boolean
    last_name: string
    middle_name?: string | null
    phone?: string | null
    counters: Record<string, any>
    is_in_search: boolean
    negotiations_url: string
    resumes_url: string
    user_statuses: Record<string, any>
}
