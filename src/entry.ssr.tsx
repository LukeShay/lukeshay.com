import type { RenderToStreamOptions, RenderToStreamResult } from '@builder.io/qwik/server';
import { renderToStream } from '@builder.io/qwik/server';
import { manifest } from '@qwik-client-manifest';

import Root from './root';

const entry = async (opts: RenderToStreamOptions): Promise<RenderToStreamResult> =>
  renderToStream(<Root />, {
    manifest,
    ...opts,
  });

export default entry;
