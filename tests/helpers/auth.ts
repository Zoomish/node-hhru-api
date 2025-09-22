import {
    getAppToken,
    getUserToken,
    refreshUserToken,
} from '../../src/common/common.ts'

let appToken: string | null = null
let userToken: string | null = null
let refreshToken: string | null = null

export async function ensureAppToken(): Promise<string> {
    if (process.env.HH_TOKEN) {
        appToken = process.env.HH_TOKEN
        return appToken
    }
    if (!appToken) {
        const tokenData = await getAppToken(
            process.env.HH_CLIENT_ID!,
            process.env.HH_CLIENT_SECRET!
        )
        appToken = tokenData.access_token
    }
    return appToken
}

export async function ensureUserToken(): Promise<string> {
    if (!userToken) {
        const tokenData = await getUserToken(
            process.env.HH_CLIENT_ID!,
            process.env.HH_CLIENT_SECRET!,
            process.env.HH_AUTH_CODE!,
            process.env.HH_REDIRECT_URI
        )
        userToken = tokenData.access_token
        refreshToken = tokenData.refresh_token
    }
    return userToken
}

export async function refreshUserAuth(): Promise<string> {
    if (!refreshToken) {
        throw new Error('No refresh_token, сначала вызови ensureUserToken()')
    }
    const tokenData = await refreshUserToken(
        process.env.HH_CLIENT_ID!,
        process.env.HH_CLIENT_SECRET!,
        refreshToken
    )
    userToken = tokenData.access_token
    refreshToken = tokenData.refresh_token
    return userToken
}
