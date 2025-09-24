import {
    HHApiError
} from './types/errors.types.ts'

export class HHError extends Error {
    public status: number
    public data: HHApiError

    constructor(status: number, data: HHApiError) {
        super(`HH API Error ${status}`)
        this.status = status
        this.data = data
    }
}
