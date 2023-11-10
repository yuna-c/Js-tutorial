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

const today = ['aa', 'bb', 'cc', 'dd'];
const everyday = today.map((data, index) => {
	return index + data;
});
console.log(everyday);

/*
기존 참조형 자료는 (배열,객체)의 변수로 복사시 원복복사가 안됌(shadow copy : 앝은복사)
- 기존 배열을 단순히 변수에 옮겨 담을 시 
*/

//const colors = ['red', 'green', 'blue']; 휩메모리

const newColors3 = colors; // 참조링크만 복사된것
const newColors3_copy = [...colors];

newColors3[0] = 'hotpink'; //복사링크의 원본도 바뀜(불변성유지 불가)
newColors3.push('white');

console.log('colors', colors);
console.log('newColors3', newColors3);
console.log('newColors3_copy', newColors3_copy);

/*
전개연산자 (spred Operator)
- 참조형 자료(객체,배열)를 완전복사 (Deep Copy, 불변성 유지됨)
- Heap memory에 있는 값을 물리적으로 복사
*/
const interets = ['game', 'movie', 'cartoon']; //객체 참조형 자료
console.log(...interets);

const newInterests = [...interets]; //배열복사
newInterests[2] = 'reading';

console.log('interets', interets);
console.log('newInterets', newInterests);

//객체 복사
const obj = {
	color: 'white',
	today: 1110,
	character: '춘식이',
	weather: 'cold',
	mood: 'not bad',
};

const newObj = { ...obj };
newObj.color = 'green';
newObj.mood = 'sad';

console.log('obj', obj);
console.log('newObj', newObj);

// 객체 합치는 방법
const student1 = {
	//작년 회원가입 정보
	name: 'Micheal',
	age: 20,
};
const extraInfo = {
	//올해 회원가입 정보
	name: 'Micheal',
	age: 21,
	hobby: 'game',
};

//작년 회원가입 정보값 유지, 올해 회원가입 정보 업데이트
//전개 연산자 이용하면 원본유지하면서 기존 2개의 객체 값을 합칠 때 유용
//함수의 인수로 객체로 들어갈 수 있오
const newStudent = { ...student1, ...extraInfo };
console.log('student1', student1);
console.log('extraInfo', extraInfo);
console.log('newStudent', newStudent);
console.log('-------------------------------------');

newStudent.name = 'andy';
newStudent.hobby = 'sleep';
console.log('student1', student1);
console.log('extraInfo', extraInfo);
console.log('newStudent', newStudent);

const aa = {
	aa: 'aa',
	bb: 'bb',
};
const bb = {
	aa: 'ab',
	bb: 'bb',
	cc: 'cc',
};
const aabb = { ...aa, ...bb };
console.log('aa', aa, 'bb', bb);
console.log('aabb', aabb);

aabb.gg = 'gg';
console.log('aabb', aabb);
aabb[0] = '11';
console.log('aabb', aabb);

/*
문자열에 변수를 쉽게 삽입하는 법 'Templat litenal'
*/
const name = '김또깡';
const age = 20;
const address = '서울';

intro(name, age, address);
function intro(name, age, address) {
	console.log('제 이름은 ' + name + '이고, 나이는 ' + age + '살이며, 사는 곳은 ' + address + '입니다.');
}

intro2('김낑깡', 30, '도쿄');
function intro2(name, age, address) {
	console.log(`제 이름은 ${name}이고, 나이는 ${age}살이며, 사는 곳은 ${address}입니다.`);
}
/*
const colors = ['red', 'green', 'blue'];
const color1 = colors[0];
const color2 = colors[1];
const color3 = colors[2];
*/
const [color1, color2, color3, color4] = ['red', 'green', 'blue'];
colors[3] = 'pink';
console.log(color1, color2, color3, color4);

/*
비구조화할당, 구조분해할당(Destructurig Assignment)
- 객체나 배열의 기존 구조를 분해해서 각각의 값으로 재할당
- 배열은 비구조화할당시 변수명 임의로 지정가능
-객체는 무조건 property key 값으로 변수명 지정
*/
const student2 = {
	name: '나나',
	age: 22,
	isFemale: false,
};
// const name = '홍길동';
// 뽑아낼 때는 key 값으로 뽑아야 되지만 다시 다른값으로 변경처리 가능
const { name: name1, age: age1, isFemale } = student2;
console.log(name1);
console.log(age1);
console.log(isFemale);
