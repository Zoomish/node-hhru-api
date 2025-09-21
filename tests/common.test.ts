import { jest } from '@jest/globals'
import fetch, { Response } from 'node-fetch'
import { authorize } from '../src/common/common'

jest.mock('node-fetch')

describe('Common API', () => {
    it('authorize should return token', async () => {
        ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue(
            new Response(
                JSON.stringify({
                    access_token: 'test_token',
                    token_type: 'bearer',
                    refresh_token: 'refresh_token',
                    expires_in: 3600,
                })
            )
        )

        const result = await authorize('id', 'secret', 'code', 'redirect')
        expect(result.access_token).toBe('test_token')
        expect(result.token_type).toBe('bearer')
    })
})
