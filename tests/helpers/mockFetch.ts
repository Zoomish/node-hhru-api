import { Response } from 'node-fetch'
import { vi } from 'vitest'

export function mockFetch(data: any) {
    if (!process.env.HH_TOKEN) {
        vi.stubGlobal(
            'fetch',
            vi.fn().mockImplementation(() => {
                return Promise.resolve(new Response(JSON.stringify(data)))
            })
        )
    }
}
