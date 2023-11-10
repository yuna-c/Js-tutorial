/*
배열 반복 (forEach,map)

callback : 함수에 인수로 전달되는 함수
hight order function(hof,고차함수) : 인수로 함수를 받거나 혹은 리턴값으로 함수를 내보내는 부모함수 

배열명.forEach(함수);
-- 반복기능만 있음
-- 유사배열도 반복 가능(DOM)

배열.map(함수);
-- 반복기능 추가로 기존 배열값을 복사해서 리턴(자체리턴가능)
-- 순수배열만 반복가능(DOM요소 반복 불가능)
*/

const colors = ['red', 'green', 'blue'];

colors.forEach((data, index) => {
	//이름없는 익명함수
	console.log('첫번재 인수활용', data);
	console.log('두번째 인수활용', colors[index]);
	console.log('-----------');
});

// 참조형 자료 (불변성 유지가 불가)
// 반복기능만 있고 기존 배열 복사기능 없음
const newColors = colors.forEach((data, index) => {
	return data + index; //숫자랑 문자 더할 수 없으니 red0(숫자가 문자값으로 바껴서 치환)
});

// 배열복사 가능(불변성 유지 가능)
// 반복기능과 더불어 기존 배열 복사기능까지 추가됨
const newColors2 = colors.map((data, index) => {
	return data + index; //숫자랑 문자 더할 수 없으니 red0(숫자가 문자값으로 바껴서 치환)
});

console.log(newColors);
console.log(newColors2);
