import dotenv from 'dotenv'
import {
    getAppToken,
    getUserToken,
    refreshUserToken,
} from '../../src/common/common.ts'
dotenv.config()

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
    if (process.env.HH_ACCESS_TOKEN && process.env.HH_REFRESH_TOKEN) {
        userToken = process.env.HH_ACCESS_TOKEN
        refreshToken = process.env.HH_REFRESH_TOKEN
    }
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
    if (process.env.HH_EXPIRES_IN) {
        const now = Date.now()
        const expires = new Date(
            Date.now() + +process.env.HH_EXPIRES_IN * 1000
        ).getTime()

        if (expires > now) {
            userToken = process.env.HH_ACCESS_TOKEN!
            refreshToken = process.env.HH_REFRESH_TOKEN!
            return userToken
        }
    }
    if (!refreshToken) {
        throw new Error('No refresh_token')
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
