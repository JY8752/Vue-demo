# Vue 3 + TypeScript + Vite + Vitest + Vanilla extract

## setup
リンクの通りに
https://zenn.dev/ymgn____/articles/e7709e88948446

```terminal
yarn create vite hello-vue --template vue-ts
cd hello-vue
yarn
yarn dev

//SFCファイルの型チェック(これいらないかも)
yarn add -D vue-tsc
```

```terminal
//vanilla-extract(storybookと併用するのがめんどくさかったのでcss modulesに)
yarn add @vanilla-extract/vite-plugin

yarn add clsx

//storybook
npx storybook init
yarn storybook

//vitest

```