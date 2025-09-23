import { describe, expect, it } from 'vitest'
import {
    ensureAppToken,
    ensureUserToken,
    refreshUserAuth,
} from './helpers/auth.ts'
import { setupTests } from './helpers/setup.ts'
setupTests()

describe('Common API', () => {
    it('should return app token (or use existing HH_TOKEN)', async () => {
        const token = await ensureAppToken()
        expect(token).toBeTypeOf('string')
    })

    it('should refresh user token', async () => {
        const token = await refreshUserAuth()
        expect(token).toBeTypeOf('string')
    })

    it('should return user token', async () => {
        const token = await ensureUserToken()
        expect(token).toBeTypeOf('string')
    })
})
