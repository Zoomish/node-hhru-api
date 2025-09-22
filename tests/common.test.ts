import { describe, expect, it } from 'vitest'
import {
    getAppToken,
    getUserToken,
    refreshUserToken,
} from '../src/common/common.ts'

describe('Common API', () => {
    it(
        'getAppToken should return app token',
        async () => {
            const token = await getAppToken(
                process.env.HH_CLIENT_ID!,
                process.env.HH_CLIENT_SECRET!
            )
            expect(token).toHaveProperty('access_token')
            expect(token).toHaveProperty('expires_in')
        },
    )

    it('getUserToken should return user token', async () => {
        const token = await getUserToken(
            process.env.HH_CLIENT_ID!,
            process.env.HH_CLIENT_SECRET!,
            process.env.HH_AUTH_CODE!,
            process.env.HH_REDIRECT_URI
        )
        expect(token).toHaveProperty('access_token')
        expect(token).toHaveProperty('refresh_token')
    })

    it('refreshUserToken should return new access token', async () => {
        const token = await refreshUserToken(
            process.env.HH_CLIENT_ID!,
            process.env.HH_CLIENT_SECRET!,
            process.env.HH_REFRESH_TOKEN!
        )
        expect(token).toHaveProperty('access_token')
        expect(token).toHaveProperty('refresh_token')
    })
})
