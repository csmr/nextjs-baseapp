import { NextResponse } from "next/server"

// Note how request is passed to the middleware f
export const middleware = (request) => {
    // Redirects every request to /home
    return NextResponse.redirect(new URL('/', request.url))
}

export default middleware

export const config = {
    matcher: '/todoos'
}