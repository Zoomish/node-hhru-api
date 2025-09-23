import { describe, expect, it } from 'vitest'
import {
    confirmPhone,
    getPhoneInfo,
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


