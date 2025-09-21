import dotenv from 'dotenv'
import { getResumes } from '../src/applicant/applicant'
import { mockFetch } from './helpers/mockFetch'
dotenv.config()

describe('Applicant API', () => {
    it('getResumes should return list', async () => {
        mockFetch({
            items: [{ id: '1', title: 'Resume 1', created_at: '2025-09-21' }],
            found: 1,
            page: 0,
            pages: 1,
            per_page: 20,
        })

        const token = process.env.HH_TOKEN!
        const result = await getResumes(token)
        expect(result.items).toBeDefined()
    })
})
