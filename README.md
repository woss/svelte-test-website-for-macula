# notes

## svelte-static

when ran with the `VERCEL=1 pnpm build` and `prerender.default` false it doesn't want to build, setting it to the `true` builds it and creates static website.

Setting any of the adapter options will not trigger the vercel build, it will continue withe defaults.

## @sveltejs/adapter-vercel

By default it will always prerender because the prerender is enabled by default, although the `prerender.default` is `false` initially, which means that only files that contain `export const prerender = false` will be prerendered

prerendered SPA https://bafybeigsmidgzybfwbl4q3bbwjmotqzfsldmohlkab75skylwbuhyw7mru.on.localhost/features/
