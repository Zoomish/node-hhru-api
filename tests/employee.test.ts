import { describe, expect, it } from 'vitest'
import { getCurrentUser } from '../src/employer/employer.ts'
import { ensureUserToken } from './helpers/auth.ts'
import { setupTests } from './helpers/setup.ts'
setupTests()

describe('Employer API', () => {
    it('should return current user', async () => {
        const token = await ensureUserToken()
        const user = await getCurrentUser(token)
        expect(user).toHaveProperty('id')
        expect(user).toHaveProperty('first_name')
        expect(user).toHaveProperty('last_name')
        expect(user).toHaveProperty('email')
        expect(user).toHaveProperty('auth_type')
        expect(user).toHaveProperty('counters')
        expect(user).toHaveProperty('resumes_url')
    })
})
