# HeadHunter API SDK for Node.js

A lightweight **TypeScript/JavaScript SDK** for [HeadHunter API](https://api.hh.ru).

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
import { Common, Applicant, Employer } from "node-hhru-api"

// Get an application token
const appToken = await Common.getAppToken(
  process.env.HH_CLIENT_ID!,
  process.env.HH_CLIENT_SECRET!
)

// Get current user profile (requires user token)
const me = await Employer.getCurrentUser("<user_access_token>")
console.log(me.email)
```

---

## 🛠 Usage

You can import methods in two ways:

1. **Grouped namespaces** (`Common`, `Applicant`, `Employer`)
2. **Direct imports** (tree-shaking friendly)

### 1. Using Namespaces

```ts
import { Common, Applicant, Employer } from "node-hhru-api"

// Application token (client_credentials flow)
const appToken = await Common.getAppToken(clientId, clientSecret)

// User token (authorization_code flow)
const userToken = await Common.getUserToken(clientId, clientSecret, code, redirectUri)
```

### 2. Direct Imports

```ts
import { getAppToken, getUserToken, refreshUserToken } from "node-hhru-api/common/common"
import { getResumes } from "node-hhru-api/applicant/applicant"
import { getCurrentUser } from "node-hhru-api/employer/employer"

// Same usage as above
const appToken = await getAppToken(clientId, clientSecret)
const resumes = await getResumes(userToken)
```

---

## 🔑 Authentication Flows

### Application Token (Client Credentials)

Use when your app needs **general API access** (not on behalf of a user):

```ts
const appTokenResponse = await Common.getAppToken(clientId, clientSecret)
console.log(appTokenResponse.access_token)
```

### User Token (Authorization Code)

Use when you need to act **on behalf of a user**:

```ts
const userTokenResponse = await Common.getUserToken(
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
const refreshed = await Common.refreshUserToken(clientId, clientSecret, refreshToken)
console.log(refreshed.access_token)
```

---

## 👤 Applicant API

Get applicant resumes:

```ts
const resumes = await Applicant.getResumes(userToken)

resumes.items.forEach(r => {
  console.log(`${r.id}: ${r.title}`)
})
```

---

## 🏢 Employer API

Get current employer profile:

```ts
const me = await Employer.getCurrentUser(userToken)
console.log(me.first_name, me.last_name, me.email)
```

---

## ⚙️ Configuration

Customize HTTP client (headers, locale, etc.):

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
import { ApplicantTypes, EmployerTypes, CommonTypes } from "node-hhru-api"

type Resume = ApplicantTypes.Resume
type CurrentUser = EmployerTypes.CurrentUser
type AppTokenResponse = CommonTypes.AppTokenResponse
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

MIT © 2025 Your Name
