<script>
  import { games } from "../store/index";
  import GameCard from "./GameCard.svelte";
</script>

<div data-testid="home" class="root">
  <h1 data-testid="home-title">Games</h1>
  {#await $games}
    <!-- promise is pending -->
    <p>waiting for the promise to resolve...</p>
  {:then value}
    <!-- promise was fulfilled -->
    <ul class="games-list">
      {#each value.results as Game}
        <GameCard {...Game} />
      {/each}
    </ul>
  {:catch error}
    <!-- promise was rejected -->
    <p>Something went wrong: {error.message}</p>
  {/await}
</div>

<style>
  .root {
    margin: 16px;
  }
  .games-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
