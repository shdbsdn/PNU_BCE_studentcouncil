<script>
  import { Heading, P, A, Footer, FooterCopyright } from 'flowbite-svelte';
  import { ChevronRightOutline } from 'flowbite-svelte-icons';
  import { page } from '$app/stores';
  import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarDropdownWrapper, SidebarDropdownItem } from 'flowbite-svelte';
  $: activeUrl = $page.url.pathname;
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

.leader-image {
  width: 200px; /* 원하는 크기로 조절 */
  height: auto; /* 높이를 자동으로 설정 */
  margin-bottom: 1rem;
}

.leader-container {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.leader-info {
  flex: 1;
  font-size: 10em;
  margin-left: 5rem;
}

.leader-name {
  position: absolute;
  width: 200px; /* 이미지와 동일한 너비 */
  text-align: center;
  color: rgb(0, 0, 0);
  font-weight: bold;
  font-size: 1.2rem;
}

.leader-image-container {
  position: relative;
  width: 200px;
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
    <Heading tag="h2" customSize="text-4xl font-extrabold ">회장단 인사말</Heading>
    <hr class="my-4 border-t-2 border-blue-200">
    
    <div class="leader-container">
      <div class="leader-image-container">
        <div class="leader-name">회장 김민준</div>
        <br>
        <img src="/images/회장.jpg" alt="회장" class="leader-image"/>
      </div>
      <div class="leader-info">
        <P class="mb-4">안녕하십니까, 부산대학교 제 4대 의생명융합공학부 학생회 ‘TOOgether’ 의 학생회장 김민준 입니다. <br> 'TOOgether'는 Too와 Together를 합친 단어로, '무엇이든 함께, 다같이' 라는 뜻을 가지고 있습니다. <br> 저희 학생회에서는 어떤 일을 하든 학생 여러분들이 최우선이 되도록 노력하고 있습니다. <br> 학생들의 말에 귀기울여 듣고, 피드백을 수용하여, 더 나은 행사나 이벤트, 정책 등을 시행하려고 노력하고 있습니다. <br> 의생명융합공학부 학생 여러분들을 위해 계속해서 고민하고, 노력해서 우리 의생명융합공학부가 더 좋은 학과가 되도록 최선을 다하는
        'TOOgether'가 되겠습니다. <br> 저희 'TOOgether'의 슬로건인 '무엇이든 함께, 다같이' 에 걸맞는 학생회가 되도록 항상 노력하겠습니다. <br> 무엇이든 궁금한 점이나 문제사항이 있으면 저희 학생회를 찾아주세요! 감사합니다!
        </P>
      </div>
    </div>
    <div class="leader-container">
      <div class="leader-image-container">
        <div class="leader-name">부회장 김재진</div>
        <br>
        <img src="/images/부회장.jpg" alt="부회장" class="leader-image"/>
      </div>
      <div class="leader-info">
        <P class="mb-4">안녕하십니까, 부산대학교 제 4대 의생명융합공학부 학생회 ‘TOOgether’ 의 부학생회장 김재진 입니다. <br>학생회는 여러분의 목소리를 대변하고 더 나은 학과생활을 위해 존재 합니다. <br> 이러한 목표를 항상 마음속에 지니고 선후배와 동기들간의 원활한 소통을 할 수 있도록 노력하겠습니다.</P>
      </div>
    </div>
  </div>
</div>

<br>
<br>
<br>
<br>
<Footer class="mt-8">
  <FooterCopyright href="/" by="PNU BCE™" year={2024} />
  <div class="text-center mt-2">
    <p>주소: 경상남도 양산시 물금읍 부산대학로 49 경암공학관 106호</p>
    <p>행정실: 051-510-8544</p>
    <p>이메일: bce.pnu@pusan.ac.kr</p>
  </div>
</Footer>