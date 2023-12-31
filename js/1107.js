// document.getElementById('box').style.backgroundColor = 'rosybrown';

/*
자바스크립트 interpreter language(인터프리터 언어, 실시간)
: 컴파일이라는 단계를 거치지 않고 모든 브라우저에 내장이 되서 실시간으로 동작하는 언어

요즘 자바스크립트가 뜨는 이유
: 기존 브라우저 성능이 안좋아서 코드개발의 간편함 보다는 성능 중심의 개발을 하다보니 java, c같은 언어가 대세
:전반적인 사용자 시스템이 좋아지면서 개발시 성능을 예전처럼 고려할 필요 없어지다 보니 간편한 인터프리터 방식의 개발이 선호

자바스크립트는 대표적인 비동기 동작 방식 
- 동기적 동작방식 : 입력한 순차적으로 실행되는 방식
- 비동기적 동작방식 : 동시에 한꺼번에 실행되는 방식

자바스크립트가 비동기적으로 동작하는 이유
- 자바스크립트는 브라우저(web api)에 내장되어 브라우저 기능과 상호적으로 작업하기 때문
- 특정 업무를 자바스크립트와 web api가 분담해서 처리하므로 특정 작업의 순서를 특정하기 어려움

자바스크립트가 비동기적으로 동작하며 발생하는 대표적 오류 사례
- 브라우저를 통해 유튜브 서버로부터 유튜브 데이터를 가져옴(wep api)
- 해당 유튜브 데이터를 통해 자바스크랩트를 이용해 동적 DDM생성(JS)
- 위 사례 경우 자바스크립트가 비동기적으로 동작하기 때문에 아직 브라우저가 데이터를 다 받아지지 않아도 스크립트(js)가 DOM 생성을 시작하면서 오류 발생(runtime error)
- 위와 같은 에러 상황을 runtime error
- runtime error : 사용자가 실 서비스를 이용하는 도중 발생하는 에러

프론트엔드 개발자가 제일 신경 쓸 작업
- 비동기로 발생하는 작업 흐름을 강제로 동기화 시키는 작업(promise)
- 하나 끝나고 하나 시작하게 하는 작업

자바스크립트의 구조 
- call stack (특정 업무를 실행하는 작업 공간)
:: 자바스크립트는 콜스택이 하나밖에 없는 단일 쓰레드 방식(웹API랑 콜스텍이 같이 처리해서 비동기임)
:: 자바스크립트 명령어를 순차적으로 실행
:: 변수 선언시 메모리를 할당하거나 원시형 자료(문자, 숫자)같은 간단한 자료구조 저장 가능

- memory heap (임시로 특정 데이터를 저장하는 공간)
:: 데이터의 크기 확정 힘든 대용량 데이터, 참조형 자료 (배열,객체) 저장되는 공간
:: memory heap에 저장되는 값은 자바스크립트에 내장되어 있는 garggae collector에 의해서 정기적으로 안쓰는 메모리들은 삭제됨
    */

/*
핵심요약
- 자바스크립트는 브라우저에 내장이 되어 서로 상호보완적으로 동작됨
- 자바스크립트는 비동기 방식으로 동작됨 (입력한 순서대로 동작되지 않을 수 있음)
- 자바스크립트에 비동기가 발생하는 상황을 강제로 동기화 시키는 작업 이슈가 많음
*/
