import { jest } from '@jest/globals';
import dotenv from 'dotenv';
import fetch, { Response } from 'node-fetch';
dotenv.config()

export function mockFetch(data: any) {
    if (!process.env.HH_TOKEN) {
        jest.mock('node-fetch')
        ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue(
            new Response(JSON.stringify(data))
        )
    }
}
