export type CacheHeader = {
  maxAge?: number;
  mustRevalidate?: boolean;
  private?: boolean;
  immutable?: boolean;
};

export function addCacheHeader(response: Response, options: CacheHeader = {}) {
  const {
    maxAge = 86400,
    mustRevalidate = true,
    private: isPrivate = false,
    immutable = false,
  } = options;

  const headerOptions = [
    `max-age=${maxAge}`,
    isPrivate && "private",
    mustRevalidate ? "must-revalidate" : undefined,
    immutable && "immutable",
  ].filter(Boolean);

  response.headers.set("Cache-Control", headerOptions.join(", "));
}
