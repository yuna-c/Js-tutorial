/*
    변수 : 자주 쓰는 값을 담아서 재활용 하기 위한 임시공간
    const : 바뀌면 안되는 중요한 값
    let : 자주 바뀔 만한 값

    const a = 'test'; // myName이라는 변수에 '유나' 이름 저장 (myName const 선언 방식이라 덮어쓰기 불가능)
    let myName = '유나'; // a라는 변수에 'test'라는 문자를 저장 (a변수는 let 선언방식이라 추후 덮어쓰기 가능)
    const ex) db주소, 접속 비밀번호, 개인정보, 값이 정확한 거 (숫자,문자,boolean)   
    */
const a = 'test';
let myName = '유나';
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
    연산자 : 특정 값을 도출하기 위한 연산 식별자(산술연산자 , 비교연산자, 대입연산자)
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

// 비교연산자
console.log(4 == 2);
console.log(4 !== 4);
// == 값만 비교,  === 값, 자료형 비교
// != 값이 달라야 true
