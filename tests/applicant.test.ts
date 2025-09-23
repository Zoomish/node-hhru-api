import { describe, expect, it } from 'vitest'
import { getResumes } from '../src/applicant/applicant.ts'
import { ensureUserToken } from './helpers/auth.ts'
import { setupTests } from './helpers/setup.ts'
setupTests()
describe('Applicant API', () => {
    it('should return user resumes', async () => {
        const token = await ensureUserToken()
        console.log(token)

        const resumes = await getResumes(token)
        console.log(resumes)

        expect(Array.isArray(resumes.items)).toBe(true)
        if (resumes.items.length > 0) {
            expect(resumes.items[0]).toHaveProperty('id')
            expect(resumes.items[0]).toHaveProperty('title')
        }
    })
})
