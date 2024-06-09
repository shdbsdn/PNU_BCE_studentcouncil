<script>
  import { Heading, Footer, FooterCopyright } from 'flowbite-svelte';
  import { page } from '$app/stores';
  import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
  $: activeUrl = $page.url.pathname;

  const historySections = [
      { 
          period: '2024',
          events: [
              { date: '2024.03.', description:'제 4대 회장단 취임' },
              // 더 많은 이벤트를 추가하세요
          ]
      },
      { 
          period: '2023',
          events: [
              { date: '2023.09.', description: '경암공학관 완공 및 학과 이전' },
              // 더 많은 이벤트를 추가하세요
          ]
      },
      {
          period: '2022',
          events: [
              { date: '2022.06.', description: '차세대 바이오헬스산업 혁신인재양성사업 선정' },
              // 더 많은 이벤트를 추가하세요
          ]
      },
      {
          period: '2020',
          events: [
              { date: '2020.03.', description: '의생명융합공학부 신설' },
              { date: '2020.09.', description: '일반대학원 정보융합공학과 석사과정 및 박사과정 신설' },
              // 더 많은 이벤트를 추가하세요
          ]
      },
  ];
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

.history-section {
  margin-bottom: 3rem;
}

.history-period {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.history-events {
  position: relative;
  padding-left: 1rem;
}

.history-events::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: #ccc;
}

.history-event {
  display: flex;
  margin-bottom: 0.5rem;
}

.history-event-date {
  font-weight: bold;
  margin-right: 1rem;
}

.history-event-description {
  flex: 1;
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

<div class="flex">
  <Sidebar>
  <SidebarWrapper class="ml-8 mt-4">
      <SidebarGroup>
      <SidebarItem label="인사말" href="/insamal"/>
      <SidebarItem label="조직도" href="/jojikdo"/>
      <SidebarItem label="연혁" href="/yeonheuk"/>
      </SidebarGroup>
  </SidebarWrapper>
  </Sidebar>
  <div class="flex-1 p-10">
  <Heading tag="h2" customSize="text-4xl font-extrabold ">연혁</Heading>
  <hr class="my-4 border-t-2 border-blue-200">
  
  {#each historySections as section}
      <div class="history-section">
          <div class="history-period">{section.period}</div>
          <div class="history-events">
              {#each section.events as event}
                  <div class="history-event">
                      <div class="history-event-date">{event.date}</div>
                      <div class="history-event-description">{event.description}</div>
                  </div>
              {/each}
          </div>
      </div>
  {/each}
  </div>
</div>

<Footer class="mt-8">
  <FooterCopyright href="/" by="PNU BCE™" year={2024} />
  <div class="text-center mt-2">
    <p>주소: 경상남도 양산시 물금읍 부산대학로 49 경암공학관 106호</p>
    <p>행정실: 051-510-8544</p>
    <p>이메일: bce.pnu@pusan.ac.kr</p>
  </div>
</Footer>