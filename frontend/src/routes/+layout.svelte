<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Dropdown, DropdownItem, Footer, FooterCopyright, Tooltip } from 'flowbite-svelte';
  import { page } from '$app/stores';
  $: activeUrl = $page.url.pathname;
  let showDropdown = false;

  function toggleDropdown() {
    showDropdown = !showDropdown;
  }
  
</script>

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

  
</style>

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

<div>
  <slot></slot>
</div>

<Footer class="mt-8">
  <FooterCopyright href="/" by="PNU BCE™" year={2024} />
  <div class="text-center mt-2">
    <p>주소: 경상남도 양산시 물금읍 부산대학로 49 경암공학관 106호</p>
    <p>행정실: 051-510-8544</p>
    <p>이메일: bce.pnu@pusan.ac.kr</p>
  </div>
</Footer>

