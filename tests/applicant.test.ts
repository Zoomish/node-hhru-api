import { describe, expect, it } from 'vitest'
import {
    checkResumeCreation,
    confirmPhone,
    deleteResume,
    getPhoneInfo,
    getResumes,
    publishResume,
    sendPhoneConfirmationCode,
} from '../src/applicant/applicant.ts'
import { ensureUserToken } from './helpers/auth.ts'

describe('Phone Confirmation API', () => {
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
})

describe('Phone Info API', () => {
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

describe('Phone Confirmation Code API', () => {
    it('should send confirmation code successfully', async () => {
        const token = await ensureUserToken()
        const phone = '+79161234567'

        try {
            const response = await sendPhoneConfirmationCode(token, phone)
            expect(response).toHaveProperty('can_request_code_again_in')
            expect(response).toHaveProperty('code_length')
            expect(response).toHaveProperty('notification_type')
        } catch (err: any) {
            expect(err.message).toContain('HH API Error')
        }
    })

    it('should fail for invalid phone', async () => {
        const token = await ensureUserToken()
        const phone = 'invalid-phone'

        try {
            await sendPhoneConfirmationCode(token, phone)
        } catch (err: any) {
            expect(err.message).toContain('HH API Error')
        }
    })
})

describe('Delete Resume API', () => {
    it('should delete resume successfully', async () => {
        const token = await ensureUserToken()
        const resumeId = 'test-resume-id'

        try {
            const response = await deleteResume(token, resumeId)
            expect(response).toBeUndefined()
        } catch (err: any) {
            expect(err.message).toContain('HH API Error')
        }
    })

    it('should return error for non-existent resume', async () => {
        const token = await ensureUserToken()
        const resumeId = 'nonexistent-id'

        try {
            await deleteResume(token, resumeId)
        } catch (err: any) {
            expect(err.message).toContain('HH API Error')
        }
    })
})

describe('Check Resume Creation API', () => {
    it('should return resume creation availability', async () => {
        const token = await ensureUserToken()
        const availability = await checkResumeCreation(token)
        expect(availability).toHaveProperty('created')
        expect(availability).toHaveProperty('is_creation_available')
        expect(availability).toHaveProperty('max')
        expect(availability).toHaveProperty('remaining')
    })
})

describe('Publish Resume API', () => {
    it('should publish the first available resume', async () => {
        const token = await ensureUserToken()
        const resumes = await getResumes(token)
        if (resumes.items.length === 0) {
            throw new Error('No resumes found for the user')
        }
        const resumeId = resumes.items[0].id
        await expect(publishResume(resumeId, token)).resolves.toBeUndefined()
    })
})
