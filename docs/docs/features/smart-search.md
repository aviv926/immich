# Smart Search

Immich uses Postgres as its search database for both metadata and smart search.
Smart Search is capable of returning up to 5,000 results for a single search (this limit is just to avoid browser jank from too many assets being loaded).

Smart search is powered by the [pgvecto.rs](https://github.com/tensorchord/pgvecto.rs) extension, utilizing machine learning models like [CLIP](https://openai.com/research/clip) to provide relevant search results. This allows for freeform searches without requiring specific keywords in the image or video metadata.

Archived photos are not included in search results by default. To include them, mark the checkbox in [advanced search filters](/docs/features/smart-search#advanced-search-filters).
:::tip more powerful models
Since Smart Search relies on CLIP models, more powerful models can be used for more accurate search results, you can learn more in the [FAQ](/docs/FAQ#can-i-use-a-custom-clip-model).
:::

Some search examples:

<img src={require('./img/search-ex-1.png').default} width="70%" title='Search Example 1' />

## Advanced search filters

In addition, Immich offers advanced search functionality, allowing you to find specific content using customizable search filters. These filters include location, one or more faces, specific albums, and more. You can try out the search filters on the [Demo site](https://demo.immich.app).

Smart search features include:

- Search for one or more faces (with or without context search).
- Search by Country or State or City or by all three.
- Search by camera company and model.
- Search by date range.
- Search by file name.
- Search by media types: image, video or all (**Note:** Image includes live images).
- Search by condition: not in any album or archive or Favorite or all conditions.

<img src={require('./img/advanced-search-filters.webp').default} width="70%" title='advanced search filters' />

<img src={require('./img/search-by-file-name.png').default} width="70%" title='advanced search filters' />