// src/createEmotionCache.js

import { cache } from '@emotion/css';
import createCache from '@emotion/cache';

export default function createEmotionCache() {
  return createCache({ key: 'css', prepend: true, cache });
}
