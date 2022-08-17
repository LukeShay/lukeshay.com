import { CSS } from "gfm";
import { Handlers } from "fresh/server.ts";

const css = `${CSS}
.markdown-body ul {
  list-style: disc
}

.markdown-body ol {
  list-style: numeric
}

.markdown-body table {
  width: fit-content;
}
`;

export const handler: Handlers = {
  GET: () => {
    return new Response(css, {
      headers: {
        "content-type": "text/css",
      },
    });
  },
};
