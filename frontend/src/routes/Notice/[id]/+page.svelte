<!-- frontend/src/routes/Notice/[id]/+page.svelte -->
<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { get } from 'svelte/store';
  import axios from 'axios';

  let notice = {};
  let error = null;

  onMount(async () => {
    const params = get(page).params;
    const id = params.id;
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/notices/${id}/`);
      console.log('API Response:', response.data);
      notice = response.data;
    } catch (err) {
      console.error('Error fetching notice:', err);
      error = err;
    }
  });
</script>

<style>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
  }
  .notice {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .notice-title {
    font-size: 2rem;
    color: #333;
    margin-bottom: 0.5rem;
  }
  .notice-content {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 1rem;
  }
  .notice-image {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 1rem;
  }
  .notice-date {
    font-size: 0.9rem;
    color: #999;
  }
  .back-button {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.1rem 0.5rem;
    background-color: #002850;
    color: white;
    text-decoration: none;
    border-radius: 1px;
    transition: background-color 0.3s ease;
  }
  .back-button:hover {
    background-color: #0056b3;
  }
</style>

<div class="container">
  {#if error}
    <p>Error loading notice: {error.message}</p>
  {:else if notice.title}
    <div class="notice">
      <div class="notice-title">{notice.title}</div>
      <div class="notice-date"> {new Date(notice.created_at).toLocaleDateString()}</div>
      <div class="notice-content">{notice.content}</div>
      {#if notice.image}
        <img class="notice-image" src="{notice.image}" alt="{notice.title}" />
      {/if}
      <a href="/Notice" class="back-button">Back to Notices</a>
    </div>
  {:else}
    <p>Loading...</p>
  {/if}
</div>
