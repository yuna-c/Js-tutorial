/*
자바스크립트의 자료형 (Data Type)

- 원시형 자료(primitive type)
-- 문자열(String)
-- 숫자 (Number)
-- 논리형 자료 (Boolean, true, false)
-- undifined (undifined)

- 참조형 자료(reference type)
-- 배열 (Array : Object)
-- 객체 (Object)
-- null (Object)

undifind vs null
-특정 값이 없을때

-- undifind : 변수 선언 후 값을 할당하지 않았을 때 시스템이 자동으로 넣어주는 값
-- 특정 값을 찍었을 때  undefinde 나오는 경우는 에러상황 : 있어야 될 메모리 값이 없을 때

-- null : 일부러 명시적으로 값을 비워둘 떄
-- null은 에러상황은 아니고 추후에 어떤 값을 담을 변수를 만들긴 해야되는데 담을 값이 없을 떄 null 할당

객체 property에 변수 연결하는 법
: ES6 이후로 객체의 property key값을 변수로 치환 가능해짐
: 객체의 property key를 대괄호로 묶으면 변수로 활용가능
: react 반복기능 편하게 사용하기 위해서

자바스크립트 데이터형의 자료형 확인하는 법
typeof값 : 해당 값의 자료형이 문자값으로 반환
*/

let test;
console.log(test);
// undifind 있어야 할 공간에 값이 없어서

let youtubeData = null;
console.log(youtubeData);
youtube = '추후에 담길 유튜브 데이터 DB';
// 유튜브 데이터에 추후에 담길 유튜브 데이터

let name1 = 'abc';
let age = '가나다';

const stud = {
	[name1]: 'nana', //키값 = 문자열 (변수)
	[age]: '20', // 객체 프로포티 키, 프로포티 변수
};

console.log(stud.abc);
console.log(stud.가나다);
// console.log(student.age); 변수로 핟당해서 키값 바꾸면 그 전 값 쥬금
console.log(Object.values(stud));
console.log(Object.keys(stud));

// 자료형확인
/*
let txt = 'hello';
let num = 3;
let isFemale = false;
let error;
let colors = ['red', 'green', 'blue'];
let student = {
	name: 'ddd',
	age: 20,
	isFemale: false,
};
let data = null;
console.log(typeof data);

//const 참조형 자료는 값 바꿀 수이짜나
*/

/*
원시형 자료 vs 참조형 자료
원시형 자료 : 
- 메모리에 물리적으로 해당 값이 담기는 자료형
- 메모리에 값만 담김
- 값의 크기가 비교적 명확
- 메모리 선언과 원시형 자료 값 할당이 모두 call stack에서 이루어짐
- string, number, boolean, undefined
- call Stack

참조형 자료 : 
- 메모리에 해당 값 자체가 아닌 해당 값의 위치 값이 참조되는 자료형
- 메모리에 해당값의 위치값만 참조되는 것이 아닌 해당 값으로 활용할 수 있는 함수(메서드)들도 같이 참조
- 값의 크기를 구체적으로 산정 어려움
- 메모리 선언은 call stack 에서 일어나지만 실제 값은 heap memory에 저장됨로 휘메모리에 있는 위치값만 콜스택 변수에 참조됨
- array, object
- memory heap(위치값을 call stack에 저장)

const 재할당 불가능
*/

// 아래의 경우는 실제로 data메모리 공간에 game이라는 원시형 자료값이 물리적으로 들어있기 때문에
// 새로운 원시형 자료값 대입시 값이 변경되는 재할당이 일어나면 에러남
const data = 'game'; //값 변수 콜스택
// data = 3;
// console.log(data);

// colors라는 메모리에는 callstack에 배열값 자체가 담기는게 아닌 heap memory에 있는 해당값의 위치값만 참조됨
const colors = ['red', 'green', 'blue'];
// 해당 참조링크는 동일한 상태에서 참조링크가 가리키고 있는 첫번째 값을 변경하는 것이기 때문에
// callstack에 있는 colors변수에 참조링크가 변경되는 것은 아니므로 참조형 자료의 값들은 const 선언방식이라도 기본 구조를 유지하고 있으면 값의 추가나 제거, 변경은 가능
colors[0] = 'hotpink';
console.log(colors); //값에 위치값만 가지고 있기 때문에 , 실제로는 휩메로리에 데이터가 있음 그러니까 재할당 가능

// 하지만 아래처럼 아래에 새로운값을 재할당 하려고 하면 변수에는 새로운 참조링크가 할당되므로
// callstack에 있는 변수에 새로운 참조링크가 재할당 되므로 에러발생
colors[0] = '가가';
//console.log(colors);
// colors = ['1', '2', '3'];
// console.log(colors); 링크값이 바뀌어 재할당이 일어나니까 안대 참조형 자료 구조는 유지해야대

//변수 선언
// let abc;
// abc = 'test';
// undifined가 있을 거라고 예상하지만 (참조형 자료가) 있을 수 있으니 쓰레기 자료가 초기화 안되니까 처음에서는 null값을 줘서 초기화 해서 실행

// 메모리 선언 => undifined => 값 할당(reset : undifined)
let abc = null; // 초기화
let num = 0; // 변수의 값이 숫자일 때 0으로 초기화 하면 좋음
let txt = ''; // 문자열일 때
let isTrue = true; // 논리형

// 고차함수 ?
abc = 'test';
num = 3;
txt = 'text';
isTrue = false;

console.log(abc);
