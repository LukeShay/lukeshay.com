import { MiddlewareHandlerContext } from "fresh/server.ts";

export function handler(req: Request, ctx: MiddlewareHandlerContext) {
  if (req.url.includes("www")) {
    return ctx.next();
  }

  const url = req.url.replace("lukeshay.com", "www.lukeshay.com");

  return new Response(`Redirecting you to ${url}...`, {
    headers: {
      location: url,
    },
    status: 302,
  });
}
