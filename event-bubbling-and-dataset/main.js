const tabBtn = $('.tab-button');
const tabContent = $('.tab-content');
const list = $('.list');

function openTab(num) {
  tabBtn.removeClass('orange');
  tabBtn.eq(num).addClass('orange');
  tabContent.removeClass('show');
  tabContent.eq(num).addClass('show');
}

// for (let i = 0; i < tabBtn; i++) {
//   tabBtn.eq(i).on('click', function () {
//     openTab(i);
//   });
// }

// 이벤트 리스너를 쓸 때마다 RAM 용량을 차지함, 이벤트 리스너 줄이면 성능상 좋음
// 이벤트 버블링 응용, 이벤트 리스너 줄이기 가능
// list.on('click', function (e) {
//   if ($(e.target).is(tabBtn.eq(0))) { // if (e.target === document.querySelectorAll('.tab-button')[0]) {}
//     openTab(0);
//   } else if ($(e.target).is(tabBtn.eq(1))) {
//     openTab(1);
//   } else {
//     openTab(2);
//   }
// });

// 이벤트 버블링 + dataset 응용
// 셀렉터로 찾은 HTML 요소.dataset.자료이름 : HTML 요소에 몰래 숨긴 정보 가져오기
list.on('click', function (e) {
  console.log(e.target.dataset.id);
  openTab(parseInt(e.target.dataset.id));
});