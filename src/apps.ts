import "./app.postcss"
import "./lib/registerServiceWorker"

import AssetList from "./lib/AssetList.svelte"
import FossProjects from "./lib/FOSSProjects.svelte"

const app = new AssetList({
  target: document.getElementById("apps"),
  props: {
    jsonFile: './json/apps.json',
    showSearch: false
  }
})

const projects = new FossProjects({
  target: document.getElementById("projects"),
  props: {
    jsonFile: './json/projects.json'
  }
})
