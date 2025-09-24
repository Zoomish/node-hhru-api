# HeadHunter API SDK for Node.js
# In Development

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
import { getUserToken } from "node-hhru-api/common"
import { getResume } from "node-hhru-api/applicant"
import { setHttpConfig } from "node-hhru-api/http"

setHttpConfig({
  locale: "RU",
  host: "hh.ru",
  userAgent: "MyApp/1.0 (me@example.com)"
})

const userTokenResponse = await getUserToken(
  clientId,
  clientSecret,
  code,         // received from OAuth redirect
)

const resume = await getResume(userTokenResponse.access_token)
console.log(resume.id)
```

---

## 🛠 Usage

You can import methods in two ways:

1. **Direct imports** (tree-shaking friendly)
2. **Grouped namespaces** (`Common`, `Applicant`, `Employer`)

### 1. Direct Imports

```ts
import { getUserToken } from "node-hhru-api/common"
import { getResume } from "node-hhru-api/applicant"

const userTokenResponse = await getUserToken(
  clientId,
  clientSecret,
  code,         // received from OAuth redirect
)

const resume = await getResume(userTokenResponse.access_token)
console.log(resume.id)
```

---


### 2. Using Namespaces

```ts
import { Common, Employer } from "node-hhru-api"

const userTokenResponse = await Common.getUserToken(
  clientId,
  clientSecret,
  code,         // received from OAuth redirect
)

const me = await Employer.getCurrentUser(userTokenResponse.access_token)
console.log(me.email)
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
}) //Use this at the beginning of your code
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

Before running, make sure to set environment variables:

```bash
export HH_CLIENT_ID=your_client_id
export HH_CLIENT_SECRET=your_client_secret
export HH_AUTH_CODE=your_auth_code
export HH_REDIRECT_URI=your_redirect_uri
```

```bash
npm run test
```


---

## 📜 License

MIT © 2025 Zoomish
