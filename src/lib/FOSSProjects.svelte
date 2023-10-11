<script>
  export let jsonFile

  let promise = fetch(jsonFile).then((x) => x.json())
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


  <div class="container max-w-4xl mx-auto">
    <ul class="text-lg">

    {#each data.sort((a, b) => {
      return a.title < b.title ? -1 : 1
    }) as el}
      <li class="mb-3"><a class="text-sky-600 font-bold hover:underline" href="{el.theURL}" target="_blank">{el.title}</a>: {@html el.description}</li>

    {/each}
    </ul>

  </div>

{:catch error}
	<!-- optionally show something while promise was rejected -->
{/await}