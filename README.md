# HeadHunter API SDK for Node.js

A lightweight **TypeScript/JavaScript SDK** for [HeadHunter API](https://api.hh.ru).
Provides helpers for working with **application tokens**, **user tokens**, applicants’ **resumes**, and employer data.

---

## 📦 Installation

```bash
npm install node-hhru-api
```

or with yarn:

```bash
yarn add node-hhru-api
```

---

## ⚡ Quick Start

```ts
import { getAppToken } from "node-hhru-api/common"
import { getCurrentUser } from "node-hhru-api/employer"

const appToken = await getAppToken(
  process.env.HH_CLIENT_ID!,
  process.env.HH_CLIENT_SECRET!
)

const me = await getCurrentUser("<user_access_token>")
console.log(me.email)
```

---

## 🛠 Usage

You can import methods in two ways:

1. **Direct imports** (tree-shaking friendly)
2. **Grouped namespaces** (`Common`, `Applicant`, `Employer`)

### 1. Direct Imports

```ts
import { getAppToken, getUserToken, refreshUserToken } from "hh-api-sdk/common/common"
import { getResumes } from "hh-api-sdk/applicant/applicant"
import { getCurrentUser } from "hh-api-sdk/employer/employer"

// Same usage as above
const appToken = await getAppToken(clientId, clientSecret)
const resumes = await getResumes(userToken)
```

---


### 2. Using Namespaces

```ts
import { Common, Applicant, Employer } from "hh-api-sdk"

// Application token (client_credentials flow)
const appToken = await Common.getAppToken(clientId, clientSecret)

// User token (authorization_code flow)
const userToken = await Common.getUserToken(clientId, clientSecret, code, redirectUri)
```

## 🔑 Authentication Flows

### Application Token (Client Credentials)

```ts
import { getAppToken } from "node-hhru-api/common"

const appTokenResponse = await getAppToken(clientId, clientSecret)
console.log(appTokenResponse.access_token)
```

### User Token (Authorization Code)

```ts
import { getUserToken } from "node-hhru-api/common"

const userTokenResponse = await getUserToken(
  clientId,
  clientSecret,
  code,         // received from OAuth redirect
  redirectUri   // optional
)

console.log(userTokenResponse.access_token)
console.log(userTokenResponse.refresh_token)
```

### Refresh User Token

```ts
import { refreshUserToken } from "node-hhru-api/common"

const refreshed = await refreshUserToken(clientId, clientSecret, refreshToken)
console.log(refreshed.access_token)
```

---

## ⚙️ Configuration

You can customize HTTP client (headers, locale, etc.):

```ts
import { setHttpConfig } from "node-hhru-api/http"

setHttpConfig({
  locale: "RU",
  host: "hh.ru",
  userAgent: "MyApp/1.0 (me@example.com)"
})
```

⚠️ HeadHunter requires a valid `HH-User-Agent`.
It should be in the format:
`AppName/Version (contact-email@example.com)`

---

## 📂 Types

All response objects are fully typed:

```ts
import { Resume } from "node-hhru-api/applicant/types"
import { CurrentUser } from "node-hhru-api/employer/types"
import { AppTokenResponse, UserTokenResponse } from "node-hhru-api/common/types"
```

---

## 🧪 Tests

The project includes tests with [Vitest](https://vitest.dev/):

```bash
npm run test
```

Before running, make sure to set environment variables:

```bash
export HH_CLIENT_ID=your_client_id
export HH_CLIENT_SECRET=your_client_secret
export HH_AUTH_CODE=your_auth_code
export HH_REDIRECT_URI=your_redirect_uri
```

---

## 📜 License

MIT © 2025 Zoomish
