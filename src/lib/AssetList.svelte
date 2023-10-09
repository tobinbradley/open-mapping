<script>
  import Card from './Card.svelte'

  export let jsonFile
  export let showSearch = true

  let filterString = ''
  let promise = fetch(jsonFile).then((x) => x.json())

  // handle hash
  if (window.location.hash) filterString = window.location.hash.substring(1)
  $: if (filterString.length > 0) window.location.hash = filterString

  // TODO: apps JSON
  // TODO: Data blurb maybe
  // TODO: Apps blurb maybe
  // TODO: FOSS we heard blurb mayble

  function filter(data, str) {
    const searchStr = str.trim().toUpperCase()
    if (searchStr.length > 0) {
      data = data.filter(el => el.title.toUpperCase().indexOf(searchStr) !== -1 || el.description.toUpperCase().indexOf(searchStr) !== -1)
    }

    data.sort((a, b) => {
      return a.title < b.title ? -1 : 1
    })

    return data
  }

</script>

<style>
  .lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid;
    border-color: rgb(100, 100, 100) transparent rgb(100, 100, 100) transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>


{#await promise}
	<div class="text-center">
    <div class="lds-dual-ring"></div>
  </div>
{:then data}
	<!-- promise was fulfilled -->
  {#if showSearch}
  <div class="mb-16">
    <input placeholder="search {data.length} datasets" type="text" class="block bg-white border-2 focus:outline-blue-500 text-black text-2xl p-4 mx-auto w-10/12 rounded-lg drop-shadow-lg" bind:value={filterString}>
  </div>
  {/if}

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-14 ">

    {#each filter(data, filterString) as el}
    <Card record={el} />

    {/each}

  </div>

{:catch error}
	<!-- optionally show something while promise was rejected -->
{/await}