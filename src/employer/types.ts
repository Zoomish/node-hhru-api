export interface EmployerMeResponse {
    id: string
    name: string
    manager: {
        id: string
        email: string
    }
}
