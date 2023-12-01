// 실습1
const userNames = ['김철수','박지수','리액트'];

// 구조분해할당에 의한 분할저장
const [kim,park,lee] = userNames;
console.log(`kim: ${kim}, park:${park}, lee:${lee}`);
const [kim2,,lee2] = userNames;
console.log(`kim2: ${kim2},lee2:${lee2}`);

const [kim3,,lee3,err] = userNames;
console.log(`kim3: ${kim3}, lee3:${lee3}, err:${err} `);

// 변수 값 교환하기(디스트릭처링으로 교환)
let first = 10;
let second = 20;

console.log(`교환 전-- first: ${first}, seconf:${second}`);
[second,first]=[first,second] // 배열을 분해해서 각자 대입함
console.log(`교환 후-- first: ${first}, seconf:${second}`);






// 실습2
// 스프레드 문법은 내부 요소를 개별 요소로 다시 뿌려줍니다.
// 가령 [1,2,3,4,5]라고 저장된 배열이 있다면
// ...[1,2,3,4,5,]와 같이 ...을 배열요소 왼쪽에 붙여주면
//1,2,3,4,5라고 풀리는 식입니다.

// 스프레드를 활용한 배열 확장
console.log("=================");
const foods = ['돈까스','텐동','햄버거','수제비'];

// '피자', '초밥'을 해당 배열에 추가하는 경우, 스프레드 없이 확장하면 다음과 같습니다.
// [['돈까스','텐동','햄버거','수제비'],'피자','초밥']로 이중 배열이 됨.
const newFoods = [foods,'피자','초밥'];
console.log(`추가작업 결과물 체크:${newFoods}`);
console.log(`newFoods의 0번째 요소: ${newFoods[0]}`);

// 실제로 의도한대로 확장하기 위한 스프레드 문법 적용
// ...foods = '돈까스','텐동','햄버거','수제비' (즉, 양옆 대괄호 빠짐)
const advFoods = [...foods,'초밥','햄버거'];
console.log(`advFoods의 0번째 요소호: ${advFoods[0]}`);