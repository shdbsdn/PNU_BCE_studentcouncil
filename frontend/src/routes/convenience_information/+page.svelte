<script>
  import { AccordionItem, Accordion } from 'flowbite-svelte';
</script>

<style scoped>
  .image {
    width: 100%;
    height: 100px;
    display: block;
  }

  .imagee {
    width: 1500px;
    height: 1000px;
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
  <div class="text-overlay">편의정보</div>
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

<br>

<Accordion style="width: 80%; margin: 0 auto;">
  <AccordionItem>
    <span slot="header">
      <svg class="w-6 h-6 text-gray-800 dark:text-white inline mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
      </svg>
      [학생회실 비치 도서 대여]
    </span>
    <p class="mb-2 text-gray-500 dark:text-gray-400">학생회실에 비치된 도서를 대여하고 싶으시면 학생회실 서랍장에 있는 도서 대여 명부에 정보 작성하신 후 대여해주시면 됩니다.</p>
    <p class="mb-2 text-gray-500 dark:text-gray-400">꼭 정해진 반납기간 내에 도서 반납부탁드립니다. </p>
    <ul class="list-disc ps-5 dark:text-gray-400 text-gray-500">
    </ul>
  </AccordionItem>
  <AccordionItem>
    <span slot="header">
      <svg class="w-6 h-6 text-gray-800 dark:text-white inline mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
      </svg>
      [과사무실 전화번호]
    </span>
    <p class="mb-2 text-gray-500 dark:text-gray-400">과사무실 전화번호는 051-510-8543~4 입니다. <br> 문의를 위해 전화를 걸 경우, 처음에 본인의 신분을 밝히고 문의해주세요.</p>
  </AccordionItem>
  <AccordionItem>
    <span slot="header">
      <svg class="w-6 h-6 text-gray-800 dark:text-white inline mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
      </svg>
      [캠퍼스맵, 학생회실 위치]

    </span>
    <p class="mb-2 text-gray-500 dark:text-gray-400">학생회실 위치는 경암공학관 105호입니다. 사적인 목적의 이용을 위해서는 출입하지 말아주세요.</p>
    <img src="/images/캠퍼스맵.png" class="imagee" alt="캠퍼스맵" />
  </AccordionItem>
</Accordion>
