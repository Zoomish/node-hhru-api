export function objectToUrlSearchParams(obj?: object): string {
    if (!obj) return ''
    return new URLSearchParams(
        Object.entries(obj ?? {}).flatMap(([key, value]) => {
            if (value === undefined || value === null) return []
            if (Array.isArray(value)) return value.map((v) => [key, String(v)])
            return [[key, String(value)]]
        })
    ).toString()
}

export function arrayToUrlSearchParams(field: string, array: string[]): string {
    if (!array) return ''
    return new URLSearchParams(array.map((s) => [field, s])).toString()
}

export function objectToFormData<T extends object>(obj: T): FormData {
    const formData = new FormData()
    Object.keys(obj).forEach((key) => {
        const value = obj[key as keyof T]
        if (value !== undefined && value !== null) {
            formData.append(key, value instanceof Blob ? value : String(value))
        }
    })
    return formData
}
