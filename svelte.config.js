import preprocess from "svelte-preprocess";

const config = {
  preprocess: [preprocess({
    postcss: true
  })],
};

export default config;

// import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

// export default {
//   // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
//   // for more information about preprocessors
//   preprocess: [vitePreprocess({
//     postcss: true
//   })],
// };
