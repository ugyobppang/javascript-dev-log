const tabBtn = $('.tab-button');
const tabContent = $('.tab-content');

// eq(인덱스) : 순서 명시
// tabBtn.eq(0).on('click', function () {
//   tabBtn.removeClass('orange');
//   tabBtn.eq(0).addClass('orange');
//   tabContent.removeClass('show');
//   tabContent.eq(0).addClass('show');
// });

// tabBtn.eq(1).on('click', function () {
//   tabBtn.removeClass('orange');
//   tabBtn.eq(1).addClass('orange');
//   tabContent.removeClass('show');
//   tabContent.eq(1).addClass('show');
// });

// tabBtn.eq(2).on('click', function () {
//   tabBtn.removeClass('orange');
//   tabBtn.eq(2).addClass('orange');
//   tabContent.removeClass('show');
//   tabContent.eq(2).addClass('show');
// });

// for 반복문 : 같은 코드를 굳이 여러 번 작성할 필요 없이 복붙 가능, 정확히는 반복 실행
// for (횟수) { 복붙할 코드 }
for (let i = 0; i < 3; i++) { // 조건이 참일 동안 반복 실행
  tabBtn.eq(i).on('click', function () {
    tabBtn.removeClass('orange');
    tabBtn.eq(i).addClass('orange');
    tabContent.removeClass('show');
    tabContent.eq(i).addClass('show');
  });
}
// 변수 i    조건 i < 3    복붙 여부
// 0        true         O
// 1        true         O
// 2        true         O
// 3        false        X