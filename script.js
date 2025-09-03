// 하단 점 클릭 이벤트 (슬라이더 예시 기능)
document.querySelectorAll(".dots span").forEach((dot, index) => {
  dot.addEventListener("click", () => {
    alert(`슬라이드 ${index + 1} 선택됨`);
  });
});
