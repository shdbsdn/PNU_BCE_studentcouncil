<script>
  import { onMount } from 'svelte';
  import images from '/src/imageData/images.json';

  let imageData = [];

  onMount(() => {
    imageData = images;
  });
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap');

  :global(html), :global(body) {
    height: 100%;
    margin: 0;
    font-family: 'Noto Sans KR', sans-serif; /* 폰트 적용 */
  }
  .image-container {
    position: relative;
    width: 100%;
    margin: 0 auto;
    margin-top: -13px;
  }

  .image {
    width: 100%;
    height: 530px;
    object-fit: cover;
    display: block;
  }

  .text-overlay {
    position: absolute;
    top: 30%;
    left: 20%;
    transform: translate(-50%, -50%);
    color: white;
    padding: 10px;
    font-size: 3em; /* Adjust the font size as needed */
    font-weight: bold; /* Make the text bold */
    text-align: center;
    white-space: nowrap;
  }

  .custom-line {
    margin-top: -15px; /* 원하는 상단 여백으로 조정 */
  }
  

  .different-font {
    font-family: 'Caveat', cursive;
    font-size: 2em;
  }
</style>

<div class="mt-[-1rem]">
  {#each imageData as image}
    <div class="image-container">
      <img src={image.src} alt={image.alt.replace('<br>', ' ')} class="image" />
      <div class="text-overlay">
        {#if image.alt.includes('<br>')}
          {#each image.alt.split('<br>') as part, i}
            {#if i === 0}
              <span>{@html part + '<br>'}</span>
            {:else}
              <span class="different-font">{@html part}</span>
            {/if}
          {/each}
        {:else}
          {@html image.alt}
        {/if}
      </div>
    </div>
  {/each}
</div>

<br>

<div class="relative flex items-center custom-line">
  <div class="flex-grow border-t border-gray-300"></div>
  <div class="flex-shrink mx-4 flex space-x-2">
    <div class="w-2 h-2 bg-gray-300"></div>
    <div class="w-2 h-2 bg-gray-300"></div>
    <div class="w-2 h-2 bg-gray-300"></div>
  </div>
  <div class="flex-grow border-t border-gray-300"></div>
</div>