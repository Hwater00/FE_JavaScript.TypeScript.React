import styled from "styled-components";
import Title from "../title/Title";
import Lable from "../label/Lable";
import Button from "../button/Button";
import { useState } from "react";




// 컴포넌트 명으로 함수를 만듭니다.
const Container = ()=>{ 

    // 상태 변수를 최상단에 위치하도록 작성합니다.
    // 상태는 컨테이너가 가지고 있고 자식이 클릭되면 부모가 변경되는 로직 설정 값입니다.
    // cv는 변수, setCv는 cv값의 변경을 유발하는 세터, cv의 초기값은 0으로 대입
    const [countValue, setCountValue] = useState(0); // 원래 useState가 리스트 형식이었고 구조 분해 할다응ㄹ 사용중

    const plus =()=>{
        // 클릭되면 countValue의 값에 1을 더해서 갱신하고 렌더링 유발
        setCountValue(countValue+1);
    }

    const minus =() =>{
        setCountValue(countValue-1);
    }




    const StyleDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    `;

    const ContainerdDiv = styled.div`
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `;
    // 만약 CSS 기본문법이 아닌 JSX 문법으로 스타일링을 할 때는 케밥케이스(단어 사이에 -로 구분)
    // 아니라 카멜케이스로 적어주셔야 합니다. -는 자바스크립트에서 예약어를 사욯하기 때문입니다.
    // TSX에서는 CSS 관련해서 사용할 때 반드시 태그명을 대문자로 시작시켜야

    // TSX내지는 JSX양식에 맞춰서 마크업을 합니다.
    return(
        <>
            <ContainerdDiv>
            <Title/>
            <StyleDiv>
                <Button brnTitle="빼기" btnNumber={20} eventFunction={minus}/>
                <Lable countValue= {countValue}/>
                <Button brnTitle="더하기" eventFunction={plus}/>
            </StyleDiv>
            </ContainerdDiv>
        </>
    )
}
// 외부에서 해당 tsx 파일을 로드할 수 있도록 위쪽의 함수를 export 해줍니다.
export default Container;