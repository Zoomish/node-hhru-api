import { jest } from '@jest/globals';
import fetch, { Response } from 'node-fetch';

export function mockFetch(data: any) {
    if (!process.env.HH_TOKEN) {
        jest.mock('node-fetch')
        ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue(
            new Response(JSON.stringify(data))
        )
    }
}
