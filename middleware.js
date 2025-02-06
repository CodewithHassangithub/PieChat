import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  beforeAuth: (req) => {
    // Execute any code before authentication
  },
  afterAuth: (auth, req) => {
    // Handle authenticated requests
  },
  publicRoutes: [
    "/",
    "/forums",
    "/about",
    "/contact",
    "/pricing",
    "/sign-in",
    "/sign-up",
    "/api/stream/user"
  ],
  ignoredRoutes: [
    "/api/stream/user"
  ]
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};