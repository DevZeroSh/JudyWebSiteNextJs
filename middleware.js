import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const middleware = createMiddleware(routing);

export default middleware;

export const config = {
  matcher: [
    '/',
    '/(en|zh|ar)/:path*',
    '/((?!api|_next|_vercel|.*\\.|favicon.ico).*)'
  ]
};
