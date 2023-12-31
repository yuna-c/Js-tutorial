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

// false로 인식되는 값인 (0,'', undefined, null)이 인수로 전달되면 함수 실행 종료됨
heavyWork('');

// 리턴값이 없을 때 undefined
//console.log(heavyWork());

/* 이름값이 인수로 전달되면 인사말 출력, 이름값 미 전달시 경고문(조건문,함수) */
function introduce(name) {
	/*
	if (!name) {
		console.log('이름을 입력해 주세요');
	} else {
		console.log(name + '님 안녕하세요');
	}
	if (name) {
		console.log(name + '님 안녕하세요');
	} else {
		console.log('이름을 인수로 입력해 주세요');
	}
  */

	// 삼항연산자(if,else문을 3개의 항을 이용해서 간소화한 형태)
	// 삼항연산자를 쓰는 경우는 조건식의 true,false값에 따라 실행할 구문의 한줄의 간단한 구문일 때
	// 리액트 개발에서 JSX라는 가상돔 출력구문 안쪽에는 조건문을 3항 연산자만 사용가능
	// 조건식 ? 조건식이 true일 떄 실행할 구문 : 조건식이 false일 때 실행할 구문
	return name ? console.log(name + '님 안녕하세요') : console.log('이름을 인수로 입력해 주세요');
}
introduce();

/* 삼항 연산자로 고도화시킨 함수 */
function introduce2(name) {
	name ? console.log(name + '님 안녕하세요❤') : console.log('이름을 인수로 입력해 주세요');
}
introduce2('나나');

// 인수값이 있을때만 실행되는 함수 작성시
function test(name) {
	if (name) console.log(name + '님 안녕하세요❤');
	return;
}
test('곤란해');

/* &&연산자 */
function test2(name) {
	name && console.log(name + '님 반갑습니다❤'); //else문이 필요 없는 연산자
}
test2();

test3('김통깨'); // hoisting
function test3(name) {
	let defaultName = '아무개'; //지역변수

	// &&연산자 뒤에 대입연산자가 들어올 수 없으므로 대입연산구문을 괄호처리해서 그룹화)
	!name && (name = defaultName); // 네임값이 없을때 지역변수로 치환해서 처리(true일때만 처리)
	// if (name) console.log(name + '님 안녕하세요❤');
	return console.log(name + '❤' + '님 반갑습니다');
}
test3();

/*
함수의 종류 
- 익명함수 : 함수에 이름이 없는 형태 (변수에 익명함수를 대입해서 주로 호출)
- 기명함수 : 함수에 이름이 있는 형태(funtion 키워드로 선언하고 호출)

- 선언적함수 
: function 키워드로 이름을 붙여서 선언하는 형태           
: 함수의 호출 위치가 자유로움(함수 선언 이전에 호출 가능, hoisting)
: only js

- 선언적 함수가 선언되기 전에 호출 가능한 이유
: 자바스크립트 파일을 실행하기 전에 판단 단계에서 미리 변수와 선언적 함수를 우선적으로 해석하기 때문에 호출 가능

- 대입형함수 
: 일반 변수에 일반함수를 대입하는 형태
: 함수가 변수에 대입되는 형태이기 때문에 함수가 대입된 이후에만 호출 가능
: 정상적인 경우 
: react

- 즉시실행함수 : 익명함수 형태로 함수를 정의하자마자 자기자신을 즉시 호출하는 함수형태 

ES6
화살표함수 
- 익명함수를 간소화처리(내부적으로 this 객체를 생성하지 않는 함수)
*/

// 선언적함수(호출위치 자유로움), 기명함수
console.log(plus(3, 4));
// undefined 떠야 하는데,
function plus(num1, num2) {
	return num1 + num2;
}
console.log('plus', plus(3, 4));

// 대입형함수(대입 이후에만 호출 가능, Reference error), 익명함수
// console.log(minus);
let minus = function (num1, num2) {
	return num1 - num2;
};
console.log('minus', minus(5, 3));

/* 
우선적 확인(스크립트가 런타임 실행 전에) : 변수, 선언적 함수
대입형 함수 
*/

// 화살표 함수 (대입형 함수를 축약한 형태)
const multiply = (num1, num2) => {
	return num1 * num2;
};
const result = multiply(2, 3);
console.log('multifly', result);

// 화살표함수에서 return문 생략한 형태
// 화살표 뒤에 중괄호 return문 없이 특정 값을 도출하는 연산식이 있으면 해당 값 자체가 자동 리턴되는 형태
// 위의 리턴 함수와 동일한 구문
const multiply1 = (num1, num2) => num1 * num2;
console.log('화살표함수 리턴 축약문');
console.log('multifly1', multiply1(2, 3));

// 굳이 리턴할 필요가 없는 함수라도 코드의 간결화를 위해 축약하는 경우도 있음
const introduce3 = (name) => name && console.log(name + '님 하이');
introduce3('홍길동');

// 1. 함수에 인수 전달하고 내부의 값 리턴으로 내보내기
function plusTo(num1, num2) {
	return num1 + num2;
}
const result4 = plusTo(2, 3);
console.log(result4);

//2.함수안쪽에서 조건문과 return을 활용해 함수 강제종료
function introduce(name) {
	if (!name) return;
	console.log(name + '님 반갑습니다.');
}
introduce('메가커피');
introduce();

/*
반복문 - 여러번 반복되는 특정 코드를 자동 반복처리
내장함수 - 이미 시스템에 정의되어 있는 함수
for(자바스크립트 기본내장함수), forEach, map(배열전용 내장함수)

forEach(ES5) map(ES6): 사본유무
*/

// for문 패턴 : for(초기값; 반복범위; 반복방식){}
for (let i = 1; i <= 100; i++) {
	console.log('eeee');
}

const weather = ['sunny', 'cloud', 'rain', 'snow', 'any']; //참조형자료
/*
// console.log(colors[1]);
for (let i = 0; i < weather.length; i++) {
	console.log(weather[i]);
}
*/

// forEach로 반복처리
// forEach안쪽에 함수를 인수로 전달
// forEach안쪽에 인수로 전달되는 매개변수로는 다음의 값들이 자동 전달됨
// 첫번째 인수(현재 반복도는 배열의 각 데이터 값)
// 두번재 인수(현재 반복도는 순번)
// 세번째 인수 (반복도는 원본 배열 값 전체)
weather.forEach(function (data, index, arr) {
	// 반복또는 데이터, 순서, 원본배열값
	console.log('data', data);
	console.log('index', index);
	//console.log('arr', arr);
});

// 배열값을 인수로 받아서 누구님 반갑습니다 라는 콘솔문을 자동을 반복해준는 함수
const names = ['길동이', '판섭이', '영철이'];

function introduce4(arr) {
	arr.forEach(function (data) {
		console.log(data + ' 어서오고');
	});
}
introduce4(names);
console.log('---------------------------------');

const classA = ['아이유', '수지', '아이린'];
const classB = ['송혜교', '김태희', '강감찬'];

function intro(array) {
	array.forEach(function (data, index) {
		console.log(data + ' hi~' + ' 넌 ' + index + '번째로 왔어');
	});
}
intro(classA);
intro(classB);
