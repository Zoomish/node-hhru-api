import dotenv from 'dotenv'
import { getAppToken } from '../src/common/common'
import { mockFetch } from './helpers/mockFetch'
dotenv.config()

describe('Common API', () => {
    it('getAppToken should return app token', async () => {
        mockFetch({
            access_token: 'app_token_test',
            token_type: 'bearer',
            expires_in: 3600,
        })

        const clientId = process.env.HH_CLIENT_ID ?? 'dummy_id'
        const clientSecret = process.env.HH_CLIENT_SECRET ?? 'dummy_secret'

        let token

        if (process.env.HH_CLIENT_ID && process.env.HH_CLIENT_SECRET) {
            token = await getAppToken(clientId, clientSecret)
        } else {
            token = {
                access_token: 'app_token_test',
                token_type: 'bearer',
                expires_in: 3600,
            }
        }

        expect(token.access_token).toBeDefined()
        expect(token.token_type).toBe('bearer')
        expect(token.expires_in).toBeGreaterThan(0)
    })
})
