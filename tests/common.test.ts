import dotenv from 'dotenv'
import { authorize } from '../src/common/common'
import { mockFetch } from './helpers/mockFetch'
dotenv.config()

describe('Common API', () => {
    it('authorize should return token', async () => {
        mockFetch({
            access_token: 'test_token',
            token_type: 'bearer',
            refresh_token: 'refresh_token',
            expires_in: 3600,
        })

        const clientId = process.env.HH_CLIENT_ID!
        const clientSecret = process.env.HH_CLIENT_SECRET!
        let token

        if (process.env.HH_TOKEN) {
            token = { access_token: process.env.HH_TOKEN }
        } else {
            token = await authorize(
                clientId,
                clientSecret,
                'dummy_code',
                'http://localhost'
            )
        }

        expect(token.access_token).toBeDefined()
    })
})
