<script>
  import { generators } from "$lib/generators.js"

  let value = "generate a value"

  async function handleClick(generatorName) {
    value = generators[generatorName]()
    await navigator.clipboard.writeText(value)
  }
</script>

<div class="flex flex-col items-center justify-center h-screen bg-zinc-900">
  <h1 class="mb-6 jetbrains-mono-500 text-xl text-zinc-400">{value}</h1>

  <div class="grid grid-cols-5 gap-4 w-3/4 mx-auto jetbrains-mono-200">
    {#each Object.keys(generators) as generatorName}
      <button
        class="border border-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded"
        on:click={() => handleClick(generatorName)}>{generatorName}</button
      >
    {/each}
  </div>
</div>

<style>
  button {
    width: 180px;
    height: 80px;
  }
</style>
