import { jest } from '@jest/globals'
import fetch, { Response } from 'node-fetch'
import { getResumes } from '../src/applicant/applicant'

jest.mock('node-fetch')

describe('Applicant API', () => {
    it('getResumes should return list', async () => {
        ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue(
            new Response(
                JSON.stringify({
                    items: [
                        {
                            id: '1',
                            title: 'Resume 1',
                            created_at: '2025-09-21',
                        },
                    ],
                    found: 1,
                    page: 0,
                    pages: 1,
                    per_page: 20,
                })
            )
        )

        const result = await getResumes('token')
        expect(result.items).toHaveLength(1)
        expect(result.items[0].id).toBe('1')
    })
})
