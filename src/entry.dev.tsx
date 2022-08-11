import type { RenderOptions } from '@builder.io/qwik';
import { render } from '@builder.io/qwik';

import Root from './root';

const entry = async (opts: RenderOptions): Promise<void> => render(document, <Root />, opts)

export default entry;
