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
*/

let test;
console.log(test);
// undifind 있어야 할 공간에 값이 없어서

let youtubeData = null;
console.log(youtubeData);
youtube = '추후에 담길 유튜브 데이터 DB';
// 유튜브 데이터에 추후에 담길 유튜브 데이터

let name = 'abc';
let age = '가나다';

const student = {
	[name]: 'nana', //키값 = 문자열 (변수)
	[age]: '20',
};

console.log(student.abc);
console.log(student.가나다);
// console.log(student.age); 변수로 핟당해서 키값 바꾸면 그 전 값 쥬금
console.log(Object.values(student));
console.log(Object.keys(student));
