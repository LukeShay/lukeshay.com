import { MiddlewareHandlerContext } from "fresh/server.ts";
import { redirect } from "lshay/responses.ts";

export function handler(req: Request, ctx: MiddlewareHandlerContext) {
  if (
    req.url.includes("www.") ||
    req.url.includes("fresh.") ||
    req.url.includes("localhost")
  ) {
    return ctx.next();
  }

  const url = req.url.replace("lukeshay.com", "www.lukeshay.com");

  return redirect(url);
}
