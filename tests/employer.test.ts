import dotenv from 'dotenv'
import { getEmployerMe } from '../src/employer/employer'
import { mockFetch } from './helpers/mockFetch'
dotenv.config()

describe('Employer API', () => {
    it('getEmployerMe should return employer info', async () => {
        mockFetch({
            id: '123',
            name: 'Company',
            manager: { id: 'm1', email: 'manager@example.com' },
        })

        const token = process.env.HH_TOKEN!
        const result = await getEmployerMe(token)
        expect(result.id).toBeDefined()
    })
})
