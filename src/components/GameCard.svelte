<script>
  import GameTitle from "./GameTitle.svelte";

  export let name;
  export let backgroundImage;
</script>

<li class="root">
  <img src={backgroundImage} alt={`${name} image`} class="image" />
  <GameTitle>{name}</GameTitle>
</li>

<style>
  .root {
    width: 140px;
    height: 150px;
    box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.04);
    border-radius: 16px;
  }

  .image {
    width: 100%;
    object-fit: cover;
    aspect-ratio: 2/1;
  }
</style>
