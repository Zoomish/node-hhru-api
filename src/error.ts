export class HHError<T extends object> extends Error {
    public status: number
    public data: T

    constructor(status: number, data: T) {
        super(`HH API Error ${status}`)
        this.status = status
        this.data = data
    }
}
