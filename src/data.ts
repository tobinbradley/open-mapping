import "./app.postcss"
import "./lib/registerServiceWorker"

import AssetList from "./lib/AssetList.svelte"

const app = new AssetList({
  target: document.getElementById("app"),
  props: {
    //jsonFile: './json/apps.json'
    jsonFile: "https://maps.mecknc.gov/opendata/data.json"
  }
})
