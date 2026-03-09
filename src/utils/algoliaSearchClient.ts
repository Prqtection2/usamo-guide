import algoliasearch from 'algoliasearch/lite';

const appId = process.env.GATSBY_ALGOLIA_APP_ID ?? '';
const searchKey = process.env.GATSBY_ALGOLIA_SEARCH_KEY ?? '';

if (!appId || !searchKey) {
  // This avoids silently using the default USACO index.
  console.warn(
    'Algolia search env vars are missing. Set GATSBY_ALGOLIA_APP_ID and GATSBY_ALGOLIA_SEARCH_KEY.'
  );
}

export const searchClient = algoliasearch(appId, searchKey);
