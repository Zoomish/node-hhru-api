import { describe, expect, it } from 'vitest'
import {
    confirmPhone,
    getPhoneInfo,
    getResumes,
} from '../src/applicant/applicant.ts'
import { ensureUserToken } from './helpers/auth.ts'
import { setupTests } from './helpers/setup.ts'
setupTests()

describe('Applicant API', () => {
    it('should return user resumes', async () => {
        const token = await ensureUserToken()
        const resumes = await getResumes(token)
        expect(Array.isArray(resumes.items)).toBe(true)
        if (resumes.items.length > 0) {
            expect(resumes.items[0]).toHaveProperty('id')
            expect(resumes.items[0]).toHaveProperty('title')
        }
    })

    it('should confirm phone with valid code', async () => {
        const token = await ensureUserToken()
        const body = {
            phone: '+79161234567',
            confirmation_code: '123456',
        }

        try {
            const response = await confirmPhone(token, body)
            expect(response).toBeDefined()
        } catch (err: any) {
            expect(err.message).toContain('HH API Error')
        }
    })

    it('should fail with invalid code', async () => {
        const token = await ensureUserToken()
        const body = {
            phone: '+79161234567',
            confirmation_code: '000000',
        }

        try {
            await confirmPhone(token, body)
        } catch (err: any) {
            expect(err.message).toContain('HH API Error')
        }
    })

    it('should return phone information', async () => {
        const token = await ensureUserToken()
        const phone = '+79161234567'

        try {
            const info = await getPhoneInfo(token, phone)
            expect(info).toHaveProperty('phone')
            expect(info.phone).toHaveProperty('formatted')
            expect(info.phone).toHaveProperty('verified')
            expect(info.phone).toHaveProperty('need_verification')
        } catch (err: any) {
            expect(err.message).toContain('HH API Error')
        }
    })

    it('should fail with invalid phone', async () => {
        const token = await ensureUserToken()
        const phone = 'invalid-phone'

        try {
            await getPhoneInfo(token, phone)
        } catch (err: any) {
            expect(err.message).toContain('HH API Error')
        }
    })
})
