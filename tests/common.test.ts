import 'dotenv/config'
import { describe, expect, it } from 'vitest'
import { getAppToken } from '../src/common/common'
import { mockFetch } from './helpers/mockFetch'

describe('Common API', () => {
    it('getAppToken should return app token', async () => {
        mockFetch({
            access_token: 'app_token_test',
            token_type: 'bearer',
            expires_in: 3600,
        })

        const clientId = process.env.HH_CLIENT_ID ?? 'dummy_id'
        const clientSecret = process.env.HH_CLIENT_SECRET ?? 'dummy_secret'

        const token = await getAppToken(clientId, clientSecret)

        expect(token.access_token).toBeDefined()
        expect(token.token_type).toBe('bearer')
        expect(token.expires_in).toBeGreaterThan(0)
    })
})
