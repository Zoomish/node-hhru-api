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
