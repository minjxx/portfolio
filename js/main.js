/* main.js */

// 1. 네비게이션 메뉴들을 querySelectorAll을 통해 변수에 담는다.
const gnbItems = document.querySelectorAll(".nav_ul li");
// 2. 섹션들을 전부 querySelectorAll을 통해 변수에 담는다.
const sections = document.querySelectorAll("section");

// 3. forEach 문을 통해 한번씩 순회한다.
// 이때 index도 같이 가져온다.
gnbItems.forEach((gnbItem, index) => {

  //4. 네비게이션 메뉴에 클릭 이벤트를 준다.
  gnbItem.addEventListener("click", (e) => {
    // 5. 메뉴를 a 태그에 만들었기 때문에, 
    // 태그의 기본 동작(링크 연결) 방지를 위해 preventDefault를 추가한다.
    e.preventDefault();
    
    // 6. 섹션들 중 네비게이션 메뉴의 index 에 해당하는 섹션의 높이값을 구하고,
    // 네비게이션 높이만큼 값을 빼준다.
    const sectionTop = sections[index].offsetTop - 95;
    
    // 7. 해당 위치로 스크롤을 이동시킨다.
    window.scroll({ top: sectionTop });
  });
});

//상단 클래스 on 추가/제거
const menuTarget = document.querySelector('.main_header'); 

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    menuTarget.classList.add('on');
  } else {
    menuTarget.classList.remove('on');
  }
});