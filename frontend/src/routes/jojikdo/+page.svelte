<script>
    import { Heading, P, A } from 'flowbite-svelte';
    import { ChevronRightOutline } from 'flowbite-svelte-icons';
    import { page } from '$app/stores';
    import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarDropdownWrapper, SidebarDropdownItem } from 'flowbite-svelte';
    $: activeUrl = $page.url.pathname;
</script>


<style>
    .center {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 70%;
        height: auto;
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
    <div class="text-overlay">소개</div>
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

<div class="flex h-screen">
    <Sidebar>
    <SidebarWrapper class="ml-8 mt-4">
        <SidebarGroup>
        <SidebarItem label="인사말" href="/insamal"/>
        <SidebarItem label="조직도" href="/jojikdo"/>
        <SidebarItem label="연혁" href="/yeonheuk"/>
        </SidebarGroup>
    </SidebarWrapper>
    </Sidebar>
    <div class="flex-1 p-10 text-2xl font-bold mt-[-1rem]">
    <Heading tag="h2" customSize="text-4xl font-extrabold ">조직도</Heading>
    <hr class="my-4 border-t-2 border-blue-200">
    <img src="/images/학생회 조직도.png" class='center' alt="24학생회조직도" />
    <br>
    <Heading tag="h2" customSize="text-4xl font-extrabold ">부서별 업무</Heading>
    <hr class="my-4 border-t-2 border-blue-200">
    <P class="mb-4">Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.</P>
    </div>
</div>