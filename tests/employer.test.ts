import { jest } from '@jest/globals'
import fetch, { Response } from 'node-fetch'
import { getEmployerMe } from '../src/employer/employer'

jest.mock('node-fetch')

describe('Employer API', () => {
    it('getEmployerMe should return employer info', async () => {
        ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue(
            new Response(
                JSON.stringify({
                    id: '123',
                    name: 'Company',
                    manager: { id: 'm1', email: 'manager@example.com' },
                })
            )
        )

        const result = await getEmployerMe('token')
        expect(result.name).toBe('Company')
        expect(result.manager.email).toBe('manager@example.com')
    })
})
