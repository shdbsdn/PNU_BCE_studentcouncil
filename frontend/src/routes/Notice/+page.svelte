<script>
  import { onMount } from 'svelte';
  import axios from 'axios';

  let notices = [];
  let nextPage = null;
  let prevPage = null;
  let currentPage = 1;
  let totalPages = 1;

  async function fetchNotices(url) {
    const response = await axios.get(url);
    notices = response.data.results;
    nextPage = response.data.next;
    prevPage = response.data.previous;
    currentPage = parseInt(new URL(url).searchParams.get('page')) || 1;
    totalPages = Math.ceil(response.data.count / 10);
  }

  onMount(async () => {
    await fetchNotices(`${import.meta.env.VITE_API_URL}/notices/`);
  });

  function goToPage(page) {
    fetchNotices(`${import.meta.env.VITE_API_URL}/notices/?page=${page}`);
  }
</script>

<style>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
  }
  .table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 0.5rem; /* 파란 선과 표 사이의 간격 최소화 */
  }
  .table th, .table td {
    padding: 8px;
    text-align: center; /* 텍스트를 가운데 정렬 */
  }
  .table th {
    font-weight: bold;
    border-bottom: 2px solid #ddd;
    padding-top: 0; /* 상단 여백 제거 */
  }
  .table td {
    border-bottom: 1px solid #ddd;
    vertical-align: middle; /* 내용이 가운데 정렬되도록 설정 */
  }
  .table tr:hover {
    background-color: #f1f1f1;
  }
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
  .pagination button {
    padding: 0.1rem 0.5rem;
    border: 1px solid #ddd;
    background-color: white;
    cursor: pointer;
    margin: 0 0.2rem;
  }
  .pagination button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  .pagination button.active {
    background-color: #002850;
    color: white;
    border-color: #002850;
  }
  .notice-image {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 8px;
    margin-right: 1rem;
  }
  .notice-title {
    display: flex;
    align-items: center;
    justify-content: flex-start; /* 제목과 이미지를 왼쪽 정렬 */
    padding-left: 1rem; /* 제목과 내용이 조금 더 오른쪽에서 시작되도록 설정 */
  }
  .header-hr {
    margin: 1rem 0 0.5rem 0; /* 표와의 간격을 줄이기 위해 하단 여백 설정 */
    border-top: 2px solid #63b3ed;
  }

  .image {
  width: 100%;
  height: 100px;
  object-fit: cover;
  display: block;
}

.image-container {
  position: relative;
  width: 100%;
  margin: 0 auto;
  margin-top: -17px;
}

.text-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 2em;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  text-align: center;
}

.custom-line {
  margin-top: -15px; /* 원하는 상단 여백으로 조정 */
}


</style>

<div class="image-container">
  <img src="/images/sky.jpg" class="image" alt="하늘" />
  <div class="text-overlay">공지사항</div>
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

<div class="container">
  <hr class="header-hr">
  <table class="table">
    <thead>
      <tr>
        <th style="width: 10%;">번호</th>
        <th style="width: 70%;">제목</th>
        <th style="width: 20%;">날짜</th>
      </tr>
    </thead>
    <tbody>
      {#each notices as notice, index}
        <tr on:click={() => window.location.href = `/Notice/${notice.id}`} style="cursor: pointer;">
          <td>{(currentPage - 1) * 10 + index + 1}</td>
          <td class="notice-title">
            {#if notice.image}
              <img src="{notice.image}" alt="{notice.title}" class="notice-image" />
            {/if}
            {notice.title}
          </td>
          <td>{new Date(notice.created_at).toLocaleDateString()}</td>
        </tr>
      {/each}
    </tbody>
  </table>

  <div class="pagination">
    {#each Array(totalPages).fill(0).map((_, i) => i + 1) as page}
      <button on:click={() => goToPage(page)} class={page == currentPage ? 'active' : ''}>{page}</button>
    {/each}
  </div>
</div>
