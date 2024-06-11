<script>
  import { AccordionItem, Accordion } from 'flowbite-svelte';
</script>

<style>

.image_banner {
  width: 100%;
  height: 100px;
  object-fit: cover;
  display: block;
}
  .image {
  width: 900px;
  height: 300px;
  display: block;
}

.imagee {
  width: 1000px;
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

.contact-info {
    text-align: left; /* 오른쪽 정렬 */
    padding-left: 160px; /* 오른쪽 여백 추가 */
    margin-top: 10px; /* 상단 여백 추가 */
}

</style>

<div class="image-container">
  <img src="/images/sky.jpg" class="image_banner" alt="하늘" />
  <div class="text-overlay">FAQ</div>
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
  <AccordionItem open>
    <span slot="header">
      <svg class="w-6 h-6 text-gray-800 dark:text-white inline mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
      </svg>
      [출석인정]
    </span>
    <Accordion>
      <AccordionItem>
        <span slot="header">코로나19 확진자 출석인정신청 방법</span>
        <p class="mb-2 text-gray-500 dark:text-gray-400">코로나19 확진자 '출석인정' 신청방법입니다.<br><br>

          
          *** 처리절차 ***<br>
          
              (1단계) 출석인정원 작성(학생지원시스템 → 수업 → 출석인정신청) <br>
          
              (2단계) 소속학과(의생명융합공학부) 승인 <br>
          
              (3단계) 소속단과대학장(정보의생명공학대학장) 승인<br>
          
              (4단계) 승인받은 출석인정허가서 인쇄해서 교과목 담당교수님께 직접 제출<br>
          
                       - 결석 전에 미리 교수님께 결석사실을 알려드리고, 출석가능한 다음 수업일에 즉시 제출해야 함<br>
          <img src="/images/출석인정신청방법.png" class="image" alt="출석인정신청방법" />
          </p>
        <ul class="list-disc ps-5 dark:text-gray-400 text-gray-500">
          <br>
          <p>자세한 내용은 https://bce.pusan.ac.kr/bce/50537/subview.do (학과 홈페이지) 참고 부탁드립니다.</p>
        </ul>
      </AccordionItem>
      <AccordionItem>
        <span slot="header">코로나19 백신접종 대비 '백신공결제' 운영</span>
        <p class="mb-2 text-gray-500 dark:text-gray-400">코로나19 백신접종 대비 '백신공결제' 운영 안내입니다.<br><br>
          *** 처리절차 ***<br>

          (1단계) 출석인정원 작성(학생지원시스템 → 수업 → 출석인정신청)<br>
      
          (2단계) 소속학과(의생명융합공학부) 승인 <br>
      
          (3단계) 소속단과대학장(정보의생명공학대학장) 승인<br>
      
          (4단계) 승인받은 출석인정허가서 인쇄해서 교과목 담당교수님께 직접 제출<br>
      
                   - 결석 전에 미리 교수님께 결석사실을 알려드리고, 출석가능한 다음 수업일에 즉시 제출해야 함
      <img src="/images/백신공결제.png" class="imagee" alt="백신공결제" />

       </p>
       <ul class="list-disc ps-5 dark:text-gray-400 text-gray-500">
        <br>
        <p>자세한 내용은 https://bce.pusan.ac.kr/bce/50537/subview.do (학과 홈페이지) 참고 부탁드립니다.</p>
      </ul>
      </AccordionItem>
    </Accordion>
  </AccordionItem>

  <AccordionItem open>
    <span slot="header">
      <svg class="w-6 h-6 text-gray-800 dark:text-white inline mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
      </svg>
      [대학원]
    </span>
    <Accordion>
      <AccordionItem>
        <span slot="header">학위논문제출 자격시험 종합시험 FAQ</span>
        <p class="mb-2 text-gray-500 dark:text-gray-400">학위논문제출 자격시험 중 종합시험 관련 자주 물어보시는 질문을 아래와 같이 정리했습니다. <br>

          
          <br>
      1. 실시 일정<br><br>
      
      - 3월 및 9월 4째주 금요일 오후 13:00-16:00 실시 예정. (매학기 날짜 별도 공고)<br>
      
       
      
       
      <br>
      2. 시험 유의사항<br><br>
      
      - 시험시간(13:00-16:00) 중 중도 퇴실하여 화장실 갈수 없음(재입장 불가)<br>
      
      - 1과목응시자 14:00까지 퇴실<br>
      
      &nbsp;&nbsp;&nbsp;2과목응시자 15:00까지 퇴실<br>
      
      &nbsp;&nbsp;&nbsp;3~4과목응시자 16:00까지 퇴실<br>
      
      - 연필사용 불가.<br>
      
      &nbsp;&nbsp;&nbsp;펜사용(다양한 색상 사용 가능)<br>
      
      - 작성후 답안지와 문제지 함께 제출. 답안지에 감독 날인 확인 후 퇴실<br>
      
      - 답안지에만 답안 작성. 문제지는 추후 파쇄<br>
      
       </p>
       <ul class="list-disc ps-5 dark:text-gray-400 text-gray-500">
        <br>
        <p>자세한 내용은 https://bce.pusan.ac.kr/bce/50537/subview.do (학과 홈페이지) 참고 부탁드립니다.</p>
        </ul>
  </AccordionItem>
    </Accordion>
  </AccordionItem>

  <AccordionItem open>
    <span slot="header">
      <svg class="w-6 h-6 text-gray-800 dark:text-white inline mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
      </svg>
      [학점인정]
    </span>
    <Accordion>
      <AccordionItem>
        <span slot="header">일반선택 학점 취득</span>
        <p class="mb-2 text-gray-500 dark:text-gray-400">일반선택 학점 취득 관련 자주 물어보시는 질문을 아래와 같이 정리했습니다. <br><br>

          관련 규정 : 부산대학교 교육과정 편성 및 운영 규정 개정<br>일반선택 학점 취득은 아래 몇가지 방법이 있습니다. 관련 규정을 이해하기 쉽도록 아래와 같이 간략하게 예시와 함께 설명합니다. 전체 규정에 대해 설명하고 있지는 않으므로 세부내용이 궁금하신 분은 첨부의 규정을 확인하시기 바랍니다. 
          <br>
          <br>
          
          1. 타학과 전공과목을 이수하는 경우<br>
          
             - 학점취득 빈도수 : 높음(대다수 일반선택 학점 취득 방법)<br>
          
             - 개설주관 : 타학과<br>
          
             - (예시) 의생명융합공학부 소속 학생이 기계공학부 전공기초 '기계공학개론' 교과목을 수강한 경우<br>
          
             - (예시) 의생명융합공학부 소속 학생이 경제학과 전공필수 교과목인 '미시경제학' 교과목 수강한 경우<br>
          
             - (예시) 의생명융합공학부 소속 학생이 영어영문학과 전공선택 '중급영어회화' 교과목 수강한 경우<br>
          
           
             <br>
          2. 타대학에서 이수한 학점<br>
          
             - 학점취득 빈도수 : 종종? (해외파견 프로그램 학점 / 국내 타대학 교류 학점 / 편입학생 전적대학 취득학점)<br>
          
             - 추가설명 : 부산대에서 이수한 학점이 아닌 경우는 교과구분이 설정되어 있지 않습니다. 그래서 타대학의 학점을 부산대의 졸업학점으로 인정처리하는 과정에서 '교과구분'을 지정해 주는 작업을 하게 됩니다. 이때 전공으로 인정가능한 과목은 전공기초, 전공필수, 전공선택으로 지정하지만 부산대와 교육과정이 달라서 전공으로 인정하기 어려운 과목은 모두 '일반선택'으로 지정하여 줍니다. <br>
          
           
             <br>
          3. 교과목 자체가 일반선택으로 개설되는 과목<br>
          
             - 학점취득 빈도수 : 가끔 (특수목적 개설과목이므로 개인의 취향이나 목적에 따라 선택 수강)<br>
          
             - (예시) 교양교육원 '기초영어' : 입학시 수능 영어 등급 지정 기준 이하인 경우 교양필수 '대학영어' 에 대한 선이수 수강 교과목<br>
          
             - (예시) 취업전략과 '진로탐색과생애설계', '대학생활설계와비전' 등 : 취업관련 특화 교과목<br>
          
             - (예시) 언어교육원 'PNU TOEFL 기초' : 해외파견 교환학생의 TOEFL 능력 향상에 도움을 주기 위해 개설<br>
          
             - (예시) 홍보실 '대학홍보봉사(II)' : 홍보대사 활동하는 학생들에게 부여되는 봉사학점<br>
          
             - (예시) 국제교류본부 '외국인학생 튜터링봉사(I)(II)' : 학부 외국인 공부를 튜터로 도와주는 경우 부여되는 봉사학점<br>
          
          ** 그 외 다양한 교과목이 있으며 홈페이지에서 검색 : 스마트학생지원시스템-수업-학부수강편람-과목구분'일반선택' 설정후 검색<br>
          
           
          <br>
          4. 교양선택 외국어(6영역) 제2외국어 교과목을 초과 이수한 학점<br>
          
             - 학점취득 빈도수 : 매우 희귀<br>
          
             - (예시) 의생명융합공학부 소속 학생이 필요한 교양선택은 9학점이나 평소 언어에 관심이 많아서 영어를 제외한 제2외국어 과목인 '베트남어', '불어회화기초', '러시아어회화', '몽골어', '글로벌중국어', '일어(I)'를 수강한 경우 <br>
          
                      => 6과목 중 2과목(6학점)을 졸업에 필요한 일반선택 학점으로 전환 가능(4학년 졸업사정시 신청해야함)<br>
          
                      => 남은 4과목 중 3과목(9학점)은 교양선택 졸업충족요건으로 활용됨. <br>
          
                         초과이수한 1과목은 평점평균(GPA)를 높이는데는 미미한 도움을 줄 수 있음.<br>
          
           
                         <br>
          5. 교양선택 외국어(6영역) 영어과목 or 융복합(7영역)중 1과목(3학점)<br>
          
             - 학점취득 빈도수 : 매우매우 희귀<br>
          
             - (예시) 외국어(6영역) 영어과목을 일반선택학점으로 변환신청한 경우 융복합(7영역)과목은 변환할수 없음<br>
          
                        융복합(7영역)과목을 일반선택학점으로 변환신청한 경우 외국어(6영역) 영어과목은 변환할수 없음<br>
          
           
                        <br>
          6. 전공이수학점 중 전공학점을 초과한 학점<br>
          
             - (예시) 2020-2022 교육과정 대상자는 일반화학(II)와 일반물리학(II) 중 1과목을 이수하게 되어 있으나 두과목다 수강한 경우 초과된 전공기초 3학점을 졸업심사시 일반선택 3학점으로 인정하여 심사함<br>
          
             - (예시) 졸업을 위한 최소 전공선택 학점이 34학점이나 그 이상을 수강한 경우 초과한 전공선택학점을 일반선택 학점으로 인정하여 졸업심사함<br>
          
          
             <br>
          7. 중도포기 학점<br>
          
             - 복수전공, 부전공, 연계전공, 학생자율전공, 융합전공 등을 이수하다가 중도에 포기하는 경우 이미 취득한 타 학과 전공과목 이수학점은 일반선택학점으로 인정</p>
        <ul class="list-disc ps-5 dark:text-gray-400 text-gray-500">
        <br>
        <p>자세한 내용은 https://bce.pusan.ac.kr/bce/50537/subview.do (학과 홈페이지) 참고 부탁드립니다.</p>
        </ul>
  </AccordionItem>
    </Accordion>
  </AccordionItem>
</Accordion>
<p class="contact-info">*자세한 문의는 woo07027@naver.com 으로 부탁드립니다!</p>





