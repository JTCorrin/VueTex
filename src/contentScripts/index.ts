import Browser from 'webextension-polyfill'
import { createApp } from 'vue'
import App from './views/App.vue'

(async () => {

    // mount component to context window
    console.debug("loading div")
    const container = document.createElement('div')
    const root = document.createElement('div')
    const styleEl = document.createElement('link')
    console.debug(root)
    const shadowDOM = container.attachShadow?.({ mode: __DEV__ ? 'open' : 'closed' }) || container
    styleEl.setAttribute('rel', 'stylesheet')
    styleEl.setAttribute('href', Browser.runtime.getURL('contentScripts/style.css'))
    shadowDOM.appendChild(styleEl)
    shadowDOM.appendChild(root)
    document.body.appendChild(container)
    createApp(App).mount(root)
  })()