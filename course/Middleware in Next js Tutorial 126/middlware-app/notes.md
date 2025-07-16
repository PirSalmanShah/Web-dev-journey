### 🧠 What is Middleware in Next.js?
Middleware is a tiny bit of server-side code that runs before the user sees a page.

### 🧪 What can it do?
Middleware can:

🚪 Redirect someone (e.g., send /about to /about-2)

🚧 Block or allow pages (e.g., check if user is logged in)

🔀 Rewrite URLs

🍪 Check or set cookies

🧾 Add/modify headers

### 🛠️ Where do you write it?
Make a file called middleware.js (or .ts) at the root of your Next.js project (where pages/ or app/ folder lives).

### ✨ How does it work?
A simple example:

```
import { NextResponse } from 'next/server'

export function middleware(request) {
  return NextResponse.redirect(new URL('/home', request.url))
}

export const config = {
  matcher: '/about/:path*',
}
```
This says:
“If the user visits ```/about``` or anything under it, send them to ```/home.```”

### 🔑 Terms to remember
Term	Think of it like...
middleware	Your logic that runs before the page
NextRequest	The request coming in (like a letter)
NextResponse	Your response (like your reply letter)
matcher	Which paths your middleware should run on

### 💡 When to use Middleware?
🚨 Auth checks before showing dashboard

🌍 Redirect users by location or language

⚙️ Inject custom headers or cookies

### 🔁 Summary
Middleware is like a gatekeeper. Before your user enters a page, it checks something, then decides if they should continue, be redirected, or denied.