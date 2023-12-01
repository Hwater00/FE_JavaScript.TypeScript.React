//실습1
// 자바스크립트의 함수는 함수를 리턴할 수 있음
// 자바스크립트에서 함수 분류 시 first-class인 1급 객체라고 부른다.
function calculator(n1,n2){
    // 함수를 변수처럼 선언 및 변수처럼 return 가능
    // 함수 내부 지역에서 사용하는 내부 함수
    // add만 꺼내서 사용하는 것은 불가능하다.
    function add(){ 
        return n1+n2;
    }
    // 함수 자체를 리턴하는 케이스
     return add;

    // 함수를 호출한 결과를 리턴하는 케이스
    //return add();
}

// 1. 함수 자체를 리턴하는 케이스
// n1+n2를 실행한다 X, add라는 함수를 정의만 한 상태
// closur == add , add 호출 X

// 2. 함수를 호출한 결과를 리턴하는 케이스
// calculator 지역 내부의 위치하여 접근 가능해서 add()로 파라미터는 가까운 변수를 가져와 씀.
// closur에 11을 저장한다.

const closur = calculator(5,6); 
console.log(closur);
console.log(typeof(closur)); 



// 실습2
// 1. 함수 자체 반환
function getVisitor(){
    let visitCount = 0; // 지역변수이지만, 호출이 끝나도 값을 유지하고 있음
    function countVisitor(){
        return ++visitCount
    }
    return countVisitor;
}

// 클로저 적용 코드 (getVisitor가 종료되어도 계속해서 visitCount의 값이 유지됨)
const countVisitor1= getVisitor();
console.log(countVisitor1());
console.log(countVisitor1());
console.log(countVisitor1());

// 2. 함수 결과값 반환
function getVisitor(){
    let visitCount = 0; // 지역변수로 호출이 끝나면 사라짐.
    function countVisitor(){
        return ++visitCount
    }
    return countVisitor();
}

// 클로저 미 적용 코드(getVisitor() 호출시마다 visitCount가 0으로 초기화됨)
// 호출이 끝나고 초기화 되는 과정이 진행되면서 1에서 늘어나지 않은 = 결과값 반환임으로
const countVisitor2= getVisitor();
console.log(countVisitor2); 

const countVisitor3= getVisitor();
console.log(countVisitor3);