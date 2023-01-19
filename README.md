# VueTex - Webextension Starter

A [Vite](https://vitejs.dev/), [Vue 3](https://vuejs.org/) and [Vuetify 3](https://next.vuetifyjs.com/) powered WebExtension ([Chrome](https://developer.chrome.com/docs/extensions/reference/) starter template.

## Features

- ⚡️ No nonsense, simple plug and play
- 🥝 Vue 3 - Composition API, [`<script setup>` syntax](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md) and more!
- 🦾 [TypeScript](https://www.typescriptlang.org/) - type safe
- 🖥 Content Script - Use Vue even in content script
- 🌍 WebExtension - isomorphic extension for Chrome, Firefox, and others

## Pre-packed

### WebExtension Libraries

- [`webextension-polyfill`](https://github.com/mozilla/webextension-polyfill) - WebExtension browser API Polyfill with types

## Use the Template

Simple clone this repo and run npm install

## Usage

### Folders

- `src` - main source.
  - `assets` - assets used in Vue components
  - `background` - scripts for background.
  - `components` - auto-imported Vue components that are shared in popup and options page.
  - `contentScript` - scripts and components to be injected as `content_script`
  - `options` - the vue template for the options page
  - `plugins` - vuetify etc
  - `popup` - the vue template for the popup
- `extension` - extension package root.
  - `dist` - built files


### Build

To build the extension, run

```bash
npm build
```

And then pack files under `extension`

## Credits

As you might tell from this ReadMe and a lot of the code in this repo, this template was inspired by the excellent [vitesse-webext](https://github.com/antfu/vitesse-webext/) by antfu. I would've used that but I hate tailwind and I wanted something
much more simple and straightforward
