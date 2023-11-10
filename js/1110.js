/*
배열 반복 (forEach,map)

callback : 함수에 인수로 전달되는 함수
hight order function(hof,고차함수) : 인수로 함수를 받거나 혹은 리턴값으로 함수를 내보내는 부모함수 

배열명.forEach(함수);

*/

const colors = ['red', 'green', 'blue'];
colors.forEach((data, index) => {
	//이름없는 익명함수
	console.log('첫번재 인수활용', data);
	console.log('두번째 인수활용', colors[index]);
	console.log('-----------');
});
