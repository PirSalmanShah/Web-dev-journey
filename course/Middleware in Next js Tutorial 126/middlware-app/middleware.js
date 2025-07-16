import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
// export function middleware(request) {
//     return NextResponse.redirect(new URL('/', request.url))
// //   return NextResponse.redirect(new URL('/home', request.url))
// }

export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/', request.url))
  }
 
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.rewrite(new URL('/dashboard/user', request.url))
  }
}
 
// See "Matching Paths" below to learn more
// /about/:path*',means that /about/any path will redirect to /home or we can change it to "/" ,also config matcher is optional but it is not write your middlware will run for all urls
// export const config = {
//   matcher: '/about/:path*',
// }
// we can use this add customs headers before for it reaches it destination of add json in it in certain for example db is not connected ,in simple we want of access of req obj before hand  
// // NextResponse
// The NextResponse API allows you to:

// redirect the incoming request to a different URL
// rewrite the response by displaying a given URL
// Set request headers for API Routes, getServerSideProps, and rewrite destinations
// Set response cookies
// Set response headers
// To produce a response from Middleware, you can:

// rewrite to a route (Page or Route Handler) that produces a response
// return a NextResponse directly. See Producing a Response