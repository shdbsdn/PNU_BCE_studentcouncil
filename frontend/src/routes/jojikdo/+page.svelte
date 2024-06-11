<script>
  import { Heading, P, A, Footer, FooterCopyright } from 'flowbite-svelte';
  import { ChevronRightOutline } from 'flowbite-svelte-icons';
  import { page } from '$app/stores';
  import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarDropdownWrapper, SidebarDropdownItem } from 'flowbite-svelte';
  $: activeUrl = $page.url.pathname;

  const departments = [
    {
      name: '집행부',
      description: '학과에서 진행하는 크고 작은 행사들을 기획하고, 시행하는 부서입니다. 이전에 있던 기획부와 전통교류부를 합쳐서 만든 부서로, 이전 부서들이 이어왔던 일들을 같이 처리합니다. 여러가지 다양한 이벤트 등을 많은 회의를 통해 결정하고, 논의하여 이를 수행합니다. 학과 대부분의 이벤트는 집행부를 통해서 진행됩니다.'
    },
    {
      name: '총무부',
      description: '학과의 회비를 도맡아서 관리합니다. 매년 예산서를 작성해서 한 학기에 사용할 돈을 정해서 관리합니다. 학과 이벤트에 사용되는 돈들은 모두 총무부가 관리해서 진행합니다. 이를 통해 학생들에게서 받은 학생회비가 투명하고 공정하게 사용된다는 것을 보여줍니다.'
    },
    {
      name: '학술사무부',
      description: '학생들의 편의와 학업에 관련된 일을 도맡아서 합니다. 시험기간에는 학생들에게 이전 선배들이 공부했던 자료들을 나눠주기도 하고, 학기중에는 학생들을 위한 사물함 관리도 도맡아서 합니다. 신입생들의 과잠 디자인 및 제작도 모두 학술사무부에서 진행합니다.'
    },
    {
      name: '홍보부',
      description: '학과에서 진행되는 행사들을 홍보하는 역할을 수행합니다. 주로 인스타그램을 통해 홍보카드를 만들어서 올리기도 하며, 학과 카톡방에 올라오는 공지 글귀를 작성하기도 합니다.'
    }
  ];
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

  .department-card {
    border: 1px solid #e5e7eb; /* Light gray border */
    border-radius: 8px; /* Rounded corners */
    padding: 1.5rem; /* Padding inside the card */
    margin-bottom: 2rem; /* Space between cards */
  }

  .department-name {
    font-size: 1.5rem; /* Larger font size */
    font-weight: bold; /* Bold text */
    position: relative; /* Position relative for ::after */
    display: inline-block; /* Inline-block for width calculation */
  }

  .department-name::after {
    content: '';
    display: block;
    width: 100%; /* Full width of department name */
    height: 0.25rem; /* Thickness of the line */
    background-color: #4299e1; /* Blue color */
    margin-top: 0.5rem; /* Space above the line */
  }

  .department-description {
    font-size: 1rem; /* Default font size */
    line-height: 1.5; /* Line height for better readability */
    color: #4a5568; /* Gray text color */
    margin-top: 1rem; /* Space above the description */
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

<div class="flex flex-col min-h-screen">
  <div class="flex-1 flex">
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
      <div class="container mx-auto p-4">
        {#each departments as department}
          <div class="department-card">
            <div class="department-name">{department.name}</div>
            <div class="department-description">{department.description}</div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
