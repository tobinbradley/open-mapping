import "./app.postcss"
import "./lib/registerServiceWorker"

import AssetList from "./lib/AssetList.svelte"

const app = new AssetList({
  target: document.getElementById("apps"),
  props: {
    jsonFile: './json/apps.json',
    showSearch: false
  }
})

const projects = new AssetList({
  target: document.getElementById("projects"),
  props: {
    jsonFile: './json/projects.json',
    showSearch: false
  }
})
