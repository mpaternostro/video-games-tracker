<script>
  import { games } from "../store/index";
  import GameCard from "./GameCard.svelte";
</script>

<div data-testid="home" class="root">
  <h1>Games</h1>
  {#await $games}
    <!-- promise is pending -->
    <p>waiting for the promise to resolve...</p>
  {:then value}
    <!-- promise was fulfilled -->
    <ul class="games-list">
      {#each value.results as { name, background_image }}
        <GameCard {name} {background_image} />
      {/each}
    </ul>
  {:catch error}
    <!-- promise was rejected -->
    <p>Something went wrong: {error.message}</p>
  {/await}
</div>

<style>
  .root {
    margin: 15px;
  }
  .games-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>
