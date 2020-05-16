const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked; // 마지막에 클릭한 checkbox를 기록하는 변수

function handleCheck(e) {

    // lastChecked와 현재 클릭한 elemnet 사이에 있는지 확인
    let inBetween = false;
 
    // shift키를 누른채 체크가 되었는지, 체크되었다면 조건문 실행
    // 요소를 하나 선택하고 shift 키를 누르면 그 사이의 값까지 모두 체크
    // 처음부터 shift 키를 누르고 요소를 클릭하면 하위 모든 요소까지 체크
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            //사이에 있는 값인지 판단하여 변경
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log('Starting to check them in between!');
            }
            if (inBetween) {
                checkbox.checked = true; // checked 상태를 변경
            }
        });
    }
    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));