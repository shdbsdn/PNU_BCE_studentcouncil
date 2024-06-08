<script>
    import { Timeline, TimelineItem } from 'flowbite-svelte';
    import { CalendarWeekSolid } from 'flowbite-svelte-icons';
    import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarDropdownWrapper, SidebarDropdownItem } from 'flowbite-svelte';
</script>

<style>
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
    <div class="text-overlay">활동</div>
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

<div class="flex h-screen">
<Sidebar class="ml-8 mt-[-0.5rem]">
    <SidebarWrapper>
        <SidebarGroup>
        <SidebarItem label="2023" href="/2023"/>
        <SidebarItem label="2024" href="/2024"/>
        </SidebarGroup>
    </SidebarWrapper>
</Sidebar>
    <div class="flex-1 p-10 text-2xl font-bold">
    <Timeline order="vertical" class="mt-[-2.5rem]">
    <TimelineItem title="중간고사 간식행사" date="24_4_10">
        <svelte:fragment slot="icon">
        <span class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
            <CalendarWeekSolid class="w-4 h-4 text-primary-600 dark:text-primary-400" />
        </span>
        </svelte:fragment>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">중간고사 간식행사를 진행했습니다! 중간고사 화이팅!</p>
    </TimelineItem>
    <TimelineItem title="MT" date="24_5_11">
        <svelte:fragment slot="icon">
        <span class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
            <CalendarWeekSolid class="w-4 h-4 text-primary-600 dark:text-primary-400" />
        </span>
        </svelte:fragment>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">청도로 MT를 다녀왔습니다!</p>
    </TimelineItem>
    <TimelineItem title="기말고사 간싱행사" date="24_6_10">
        <svelte:fragment slot="icon">
        <span class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
            <CalendarWeekSolid class="w-4 h-4 text-primary-600 dark:text-primary-400" />
        </span>
        </svelte:fragment>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">기말고사 간식행사를 진행했습니다! 기말고사 화이팅!</p>
    </TimelineItem>
    </Timeline>
    </div>
</div>