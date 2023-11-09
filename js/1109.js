/*
  함수 (funtion)
  : 자주쓰느 여러개의 코드들을 패키징해서 재활용 하기 위함
  : 함수를 먼저 정의한 이후 호출 기능

  : 함수 정의시 이름을 안붙인 함수 
    => 익명함수 function(){}
  : 이름을 붙인 함수 
    => 기명함수 function name(){}

  매개변수(parameter), 인수(argument)
  : 매개변수 - 외부의 같은 함수내부로 전달하기 위한 통로명
  : 인수 - 함수의 매개변수를 통해서 전달되는 값 자체 

  반환값 (return)
  : 함수 내부에서 만들어진 값을 함수 외부로 물리적으로 내보냄
  : 함수 코드블록 안에서 만들어진 값은 외부에서 접근불가(지역스코프,지역변수)
  
  반환값이 필요한 이유 
  : 함수 내부에서 만들어진 값이 일회성으로 소비되는 것이 아닌
  : 추후 다른 형태로 재사용이 되야될 때 함수 외부로 값을 내보냄
  
  return의 다른 쓰임
  : 함수 내부에서 return문을 만나면 그 즉시 함수 실행 종료
  : 함수 내부 로직에서 error가 발생될만한 상황이면 불필요하게 다음 코드들을 실행하지 않고 해당 함수를 강제 종료할 때

  true, false는 아니지만 true, false로 인지되는 값들

  true로 인지되는 값들 
  : 빈 문자가 아닌 문자값(스페이스바 빈칸도 문자로 인지함)
  : 0이 아닌 숫자값

  false로 인지되는 값들
  : 빈 문자값
  : 숫자 0
  : undefined
  : null

*/

// 함수의 정의 (name이라는 [매개변수]가 연결되어 있는 함수)
function inform(name) {
	console.log(name + '님 하이');
}

// 함수호출 (inform함수 호출시 '홍길동'이라는 [인수] 전달)
inform('홍길동');

// 미션1 : 두개 숫자를 파라미터를 통해 인수로 전달 받아서 두개 더한 값을 콘솔로 출력하는 함수
// typeof 변수값 : 자료형을 문자로 변환
// 미션2 : 만약 파라미터로 전달되는 두개의 값중에 2개의 값중 하나라도 숫자가 아니면 더한 값이 아닌 숫자만 입력하세요라는 에러문구 출력 (typeof, if 활용)

/* 미션1 */
function plusNum(num1, num2) {
	//코드블록 : 지역변수
	const result = num1 + num2;
	return result;
}
// console.log(result); error (재활용 안댐)
// if 2,3 더한값과 4,5를 더한 값을 다시 더해주세요 하면 일회성이니까 호출되고 나서 없어짐
const returned = plusNum(4, 6) + plusNum(4, 3);
console.log(returned);

/* 미션2 */
function plus(num1, num2) {
	//파라미터, 매개변수
	const plus = num1 + num2;

	// 첫번째, 두번째 파라미터로 전달되는 값의 자료형을 문자열로 변수에 저장
	const typeNum1 = typeof num1;
	const typeNum2 = typeof num2;

	console.log(typeNum1);
	console.log(typeNum2);

	// 두변수의 타입 문자값이 모두 number(숫자) 이면 두개 값을 더해서 console출력
	if (typeNum1 === 'number' && typeNum2 === 'number') {
		console.log(plus);
	} else {
		//만약 그렇지 않은 경우 에러문구 출력
		console.log('두개의 인수를 숫자로 입력하세요');
	}
}

// console.log(plus(2, 3)); undefined
plus(2, 3);

/* return */
function returnPlus(num1, num2) {
	const result = num1 + num2;
	return result;
}

//리턴값이 있는 함수 호출
console.log(returnPlus(2, 3));

// if 2,3 더한값과 4,5 6,7를 더한 값을 다시 더해주세요
const result1 = returnPlus(2, 3);
const result2 = returnPlus(4, 5);
const result3 = returnPlus(6, 7);

console.log(returnPlus(2, 3) + returnPlus(4, 5) + returnPlus(6, 7));
console.log(result1 + result2 + result3);

/* return 의 다른쓰임 */
// 엄청 로직이 무거운 함수
function heavyWork(data) {
	/*
	if (data !== undefined) {
		console.log(data);
		console.log(data);
		console.log(data);
	}
  */

	// 에러 상황이 발생되서 불필요하게 코드를 실행할 필요가 없을 때
	// return을 이용해서 강제 함수 실행 중지

	//특정 조건에 따라 무시하거나 종료하거나
	//if (data === undefined) return;
	if (!data) return; // 데이터값이 false, 없을때
	console.log(data);
	console.log(data);
	console.log(data);

	// 재이벤트 발생 금지, 활성화 버튼 비활성화시 사용, 함수 끝날때 까지 재클릭 금지
}
heavyWork(' ');

// 리턴값이 없을 때 undefined
//console.log(heavyWork());
