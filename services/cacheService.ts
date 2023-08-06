import NodeCache from 'node-cache';

const secondsToCacheReset = 3600 * 12;
export const cache = new NodeCache({ stdTTL: secondsToCacheReset });

export enum cacheId {
  art = 'artCache',
  code = 'codeCache',
}

export function resetCache() {
  cache.del([cacheId.art, cacheId.code]);
}
