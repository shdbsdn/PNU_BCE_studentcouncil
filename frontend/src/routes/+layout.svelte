<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Dropdown, DropdownItem, Footer, FooterCopyright, Tooltip } from 'flowbite-svelte';
  import { page } from '$app/stores';
  $: activeUrl = $page.url.pathname;
  let showDropdown = false;

  function toggleDropdown() {
    showDropdown = !showDropdown;
  }
  
</script>

<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap');

  :global(html), :global(body) {
    height: 100%;
    margin: 0;
    font-family: 'Noto Sans KR', sans-serif; /* 폰트 적용 */
  }

  :global(body) {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  #app {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .content {
    flex: 1; /* 내용 부분이 남은 공간을 채우도록 설정 */
  }

  .dropdown {
    display: none;
    position: absolute;
    background-color: white;
    border: 1px solid #ccc;
    padding: 10px;
    z-index: 1000;
    width: 100px; /* Dropdown width */
  }

  .tooltip:hover .dropdown {
    display: block;
  }

  .custom-line2 {
    margin-top: 40px; /* 원하는 상단 여백으로 조정 */
    margin-bottom: -22px; /* 원하는 상단 여백으로 조정 */
  }

</style>

<div id="app">
  <div style="display: flex; align-items: center; justify-content: center; text-align: center; border-bottom: 1px solid gray; padding: 10px;">
    <a href="/" style="display: flex; align-items: center; text-decoration: none; color: inherit;">
      <img src="/images/PNU_BCE_logo.jpg" style="width: 50px; height: auto; margin-right: 10px;" alt="PNUBCELogo" />
      <div style="font-size: 1.4em; font-weight: bold;">
        PNU BCE Student Council
      </div>
    </a>
  </div>

  <Navbar class="bg-blue-900 mb-4 border-b-2 border-gray-300" style="display: flex; justify-content: center; align-items: center;">
    <NavHamburger on:click={toggleDropdown} style="position: absolute; left: 10px;" />
    <NavUl style="display: flex; justify-content: center; align-items: center; flex: 1;">
      <div class="tooltip" style="position: relative;">
        <NavLi class="relative {activeUrl === '/insamal' || activeUrl === '/jojikdo' || activeUrl === '/yeonheuk' ? 'text-blue-500' : 'text-white'}" style="font-size: 1.2em; font-weight: bold; margin-left: 50px;">
          <span class="inline">소개</span>
          <div class="dropdown">
            <DropdownItem href="/insamal" class="text-black dark:text-white">인사말</DropdownItem>
            <DropdownItem href="/jojikdo" class="text-black dark:text-white">조직도</DropdownItem>
            <DropdownItem href="/yeonheuk" class="text-black dark:text-white">연혁</DropdownItem>
          </div>
        </NavLi>
      </div>
      <NavLi href="/Notice" class="nav-li {activeUrl === '/Notice' ? 'text-blue-500' : 'text-white'}" style="font-size: 1.2em; font-weight: bold; margin-left: 80px;">공지</NavLi>
      <NavLi href="/FAQ" class="nav-li {activeUrl === '/FAQ' ? 'text-blue-500' : 'text-white'}" style="font-size: 1.2em; font-weight: bold; margin-left: 80px;">FAQ</NavLi>
      <NavLi href="/convenience_information" class="nav-li {activeUrl === '/convenience_information' ? 'text-blue-500' : 'text-white'}" style="font-size: 1.2em; font-weight: bold; margin-left: 80px;">편의정보</NavLi>
      <div class="tooltip" style="position: relative;">
        <NavLi class="relative {activeUrl === '/2023' || activeUrl === '/2024' ? 'text-blue-500' : 'text-white'}" style="font-size: 1.2em; font-weight: bold; margin-left: 80px;">
          <span class="inline">활동</span>
          <div class="dropdown">
            <DropdownItem href="/2023" class="text-black dark:text-white">2023</DropdownItem>
            <DropdownItem href="/2024" class="text-black dark:text-white">2024</DropdownItem>
          </div>
        </NavLi>
      </div>
    </NavUl>
  </Navbar>

  <div class="content">
    <slot></slot>
  </div>

</div>

<div class="relative flex items-center custom-line2">
  <div class="flex-grow border-t border-gray-300"></div>
  <div class="flex-shrink mx-4 flex space-x-2">
    <div class="w-2 h-2 bg-gray-300"></div>
    <div class="w-2 h-2 bg-gray-300"></div>
    <div class="w-2 h-2 bg-gray-300"></div>
  </div>
  <div class="flex-grow border-t border-gray-300"></div>
</div>

<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>

<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>

<Footer class="mt-8 bg-blue-900 text-white">
  <div class="relative mt-2">
    <div class="text-center">
      <p class="bold text-xl font-bold">PNU BCE TOGETHER</p><br>
      <p>부산대학교 의생명융합공학부 학생회 ㅣ 경상남도 양산시 물금읍 부산대학로 49 경암공학관 105호</p>
      <p>TEL: 051-510-8543~4 / E-MAIL: bce.pnu@pusan.ac.kr</p>
    </div>
    <div class="absolute right-0 top-0 mt-2 mr-4">
      <a href="https://www.instagram.com/pnu_bce/" target="_blank" class="text-white mx-2">
        <i class="fab fa-instagram fa-2x"></i>
      </a>
      <a href="https://www.youtube.com/@bcepnu" target="_blank" class="text-white mx-2">
        <i class="fab fa-youtube fa-2x"></i>
      </a>
    </div>
  </div>
  <FooterCopyright class='text-white' href="/" by="PNU BCE™" year={2024} />
</Footer>

