/*
    변수 
    : 자주 쓰는 값을 담아서 재활용 하기 위한 임시공간
    
    const : 바뀌면 안되는 중요한 값
    let : 자주 바뀔 만한 값

    const a = 'test'; // myName이라는 변수에 '유나' 이름 저장 (myName const 선언 방식이라 덮어쓰기 불가능)
    let myName = '유나'; // a라는 변수에 'test'라는 문자를 저장 (a변수는 let 선언방식이라 추후 덮어쓰기 가능)
    const ex) db주소, 접속 비밀번호, 개인정보, 값이 정확한 거 (숫자,문자,boolean)   
*/
const a = 'test';
let myName = '나나';
console.log(a);
console.log(myName);

/*
    문자열 vs 숫자
    문자 : '',"",``로 감싸서 표현
    숫자 : 숫자만 표현

    강제로 숫자나 변수가 문자화 되는 경우 : ''로 감싸는 순간
*/
// const abc = 'justify-content:center ";"';
const abc = '3';
console.log(abc);

/*
    연산자  
    : 특정 값을 도출하기 위한 연산 식별자(산술연산자 , 비교연산자, 대입연산자)

    산술 연산자 : 숫자값 연산, 문자값 연산
    비교 연산자 : 복수개의 값을 비교해서 true, false (Boolean) 반환 (==, ===, !=, !==, >,=> <,<=)
    대입 연산자 : 우항을 연산된 결과값을 좌항에 대입 
    복합 대입 연산자 : 대입 연산자와 산술 연산자가 결합된 형태
*/

//산술연산자
console.log(3 + 5);
console.log(3 - 5);
console.log(3 * 5);
console.log(3 / 5);
console.log(5 % 2);
//% 나눈 몫의 나머지 구하는 연산자(페이지네이션 버튼 만들기 백엔드 전체 게시글 나누기 페이지 값 + 몫0이면 안만들고 1이면 만들고)

// 비교연산자(조건문을 쓰기 위해)
console.log(4 == 2);
console.log(4 !== 4);
// == 값만 비교,  === 값, 자료형 비교
// != 값이 달라야 true

// let num; //변수 선언(메모리 할당)
// num = 1; //변수에 값 할당(대입 연산자)
let num = 1; //변수 초기화 (메모리 할당과 동시에 값 대입)
// num = num + 1; // 자기 자신 값에 1을 더한 값을 다시 자기 자신에 재할당
// console.log(num);

// 복합 대입 연산자
// num = num + 1;
// num += 1;
// num++;
// num--;
console.log(num);

// let num2 = 2;
// let num2 = num2 + 1;

console.log(true && true); // &&(and)연산자는 복수개의 값이 모두 true여야 true로 인지
console.log(true && false);
console.log(true || true); // ||(or)연산자는 하나만 true면 true로 인지
console.log(true || false);

/*
조건문
:비교연산자를 활용해서 반환되는 true, false값에 따라 코드이 분기 처리

if(조건식1){
  만약 조건식 1이 true면 해당 블록 코드를 실행하고 조건문 중지
  만약 조건식 1이 false면 해당 코드블록 무시하고 다음 조건식 넘어감
} 
else if(false){
  만약 조건식 2이 true면 해당 블록 코드를 실행하고 조건문 중지
  만약 조건식 2이 false면 해당 코드블록 무시하고 다음 조건식 넘어감
} 
else{
  위의 조건식들이 모두 false면 어쨋든 조건식 종료를 위해서 
  해당구문의 코드블록을 실행하고 조건문 종료
}

실제 개발시 제일 많이 활용된 패턴, 
:조건이 여러개 있을 때 해당 구문을 반복처리 하기 위함
:만약 아래 조건에 부합되는 경우가 없으면 아무 코드도 실행되지 않음
:식이 여러 줄일 때
if(조건식1){실행할 코드블록}
if(조건식2){실행할 코드블록}
if(조건식3){실행할 코드블록}

//특정 조건일 때 딱 한줄의 코드만 실행되면 되고
: 특정 조건이 아니면 아무일도 발생 시키지 않을때 중괄호도 생략사용
if(조건식1) 실행할 코드한줄;
*/

const hour = new Date().getHours();
console.log(hour);
console.log(11 > hour); //false 크니까 hour이 11보다 작으면
console.log(11 >= hour);
// 현재 시간이 5보다 같거나 크고 그와 동시에 12보다 작을 때 true (둘다)
console.log(hour >= 5 && hour < 12); //  hour이 5보다 같거나 크고 hour이 12보다 작으면
// 현재 시간이 5보다 같거나 크거나 혹은 12보다 작을 때 ture (하나만)
console.log(hour >= 5 || hour < 12);

// 바디 요소의 스타일 값 중 배경색의 해당하는 값을 aqua로 대입
document.body.style.backgroundColor = 'ㅔㅑㅜㅏ';

//미션
// - 현재 시간이 5~11시 사이면 body 배경색 orange 변경
// - 현재 시간이 11~15시 사이면 body lightblue
// - 현재 시간이 15~19시 사이면 body pink
// - 현재 시간이 19보다 크고 5보다 작으면 사이면 body black

// if (hour >= 5 && hour < 11) {
// }

// if (hour >= 5 && hour < 12) {
//   document.body.style.backgroundColor = "orange";
// }
// else if (hour >= 12 && hour < 15) {
//   document.body.style.backgroundColor = "lightblue";
// }
// else if (hour >= 15 && hour < 20) {
//   document.body.style.backgroundColor = "pink";
// }
// else if (hour >= 15 || hour < 5) {
//   document.body.style.backgroundColor = "black";
// }

// else {document.body.style.backgroundColor = "black";}

if (hour >= 5 && hour < 12) document.body.style.backgroundColor = 'rgb(234, 205, 205)';
if (hour >= 12 && hour < 15) document.body.style.backgroundColor = 'rosybrown';
if (hour >= 15 && hour < 20) document.body.style.backgroundColor = 'rgb(167, 86, 86)';
if (hour >= 15 || hour < 5) document.body.style.backgroundColor = 'rgb(201, 140, 140)';

/*
배열 : 같은 성격의 여러개의 값들을 그룹화 할때 쓰는 자료형
const 변수명 = [값1,값2,값3];
배열값 뽑을 때는
배열이 있는 변수명[순번]; //프로그래밍 언어에서는 첫번째 순번이 1이아닌 0

배열을 쓰는 이유
: 배열로 굳이 같은 성격의 데이터를 묶어두는 이유 (반복문을 써서 자동화 처리하기 위함)

배열의 갯수를 구하는 방법
:배열명.length;
*/

const colors = ['red', 'blue', 'green'];
console.log(colors[0]);
console.log(colors.length);
colors.push('pink');
console.log(colors.length);
console.log(colors[3]);

/*
변수명 작성시 주의점
1. 변수명 숫자로 시작 불가
2. 변수명 가급적 영어로
3. 변수명 대소문자 구분
4. 변수명 특수문자 불가 (_,$ 가능)
*/
