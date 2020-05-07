  function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // playing 클래스가 추가 되었을 때 바뀌는 css property 값을 적어준다.
    e.target.classList.remove('playing'); // 제거
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // audio의 data-key값을 가져옴
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`); // key의 data-key값을 가져옴
    if (!audio) return; // audio keyCode 값이 없을 경우 중단

    key.classList.add('playing'); // 키가 눌릴 때, playing 클래스 추가
    audio.currentTime = 0; // audio 파일을 특정 초(s)로 되감기
    audio.play(); // 재생
  }

  const keys = Array.from(document.querySelectorAll('.key')); // 모든 .key들을 keys에 저장
  keys.forEach(key => key.addEventListener('transitionend', removeTransition)); // 모든 .key에 removeTransition 이벤트 추가
  window.addEventListener('keydown', playSound); // playSound 실행